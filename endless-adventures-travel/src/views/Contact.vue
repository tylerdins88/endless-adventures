<template>
  <div class="formcontainer">
    <div
      class="emailform max-w-lg mx-auto shadow-lg rounded-lg overflow-hidden"
    >
      <form @submit.prevent="submitForm" ref="formRef" class="p-6" novalidate>
        <!-- Honeypot (hidden from users; simple bot trap) -->
        <input
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
          style="
            position: absolute;
            left: -9999px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
          "
          aria-hidden="true"
        />

        <div class="mb-5">
          <label for="user_name" class="nameLabel text-sm">Name:</label>
          <input
            v-model="formData.user_name"
            type="text"
            id="user_name"
            name="user_name"
            class="personsName block w-full mt-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600"
            required
          />
        </div>

        <div class="mb-5">
          <label for="user_email" class="emailLabel text-sm">Email:</label>
          <input
            v-model="formData.user_email"
            type="email"
            id="user_email"
            name="user_email"
            class="personsEmail block w-full mt-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600"
            required
          />
        </div>

        <div class="mb-5">
          <label for="message" class="messageLabel text-sm">Message:</label>
          <textarea
            v-model="formData.message"
            id="message"
            name="message"
            rows="4"
            class="personsMessage block w-full mt-1 px-4 py-2.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          :aria-busy="isSubmitting ? 'true' : 'false'"
          class="w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 ease-in-out"
        >
          Send
        </button>

        <span
          v-if="isSubmitting"
          class="block mt-2 text-gray-600 dark:text-gray-400"
          role="status"
          aria-live="polite"
        >
          Sending...
        </span>

        <!-- User-facing status message -->
        <p v-if="status" class="block mt-3 text-sm" aria-live="polite">
          {{ status }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

export default {
  data() {
    return {
      formData: {
        user_name: "",
        user_email: "",
        message: "",
      },
      isSubmitting: false,
      status: "", // success/error message shown to the user
    };
  },
  methods: {
    async submitForm(event) {
      // Redundant because of @submit.prevent, but harmless:
      if (event && typeof event.preventDefault === "function")
        event.preventDefault();

      const form = this.$refs.formRef;

      // Honeypot check (if filled, likely a bot)
      if (form && form.website && form.website.value) {
        // Silently drop submission
        return;
      }

      // Native validation
      if (!form.checkValidity()) {
        this.status = "Please fill in all required fields.";
        this._clearStatusSoon();
        return;
      }

      // Extra email validation
      const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        this.formData.user_email
      );
      if (!emailOK) {
        this.status = "Please enter a valid email address.";
        this._clearStatusSoon();
        return;
      }

      this.isSubmitting = true;
      this.status = "";

      try {
        await this.sendEmail(form);
        // Success feedback
        this.status = "Thanks! Your message has been sent.";
        // Reset the form fields
        this.formData.user_name = "";
        this.formData.user_email = "";
        this.formData.message = "";
        // Also clear native form inputs to keep EmailJS/refs in sync
        form.reset();
      } catch (error) {
        console.error("Failed to send email:", error);
        this.status = "Sorry—something went wrong. Please try again.";
      } finally {
        this.isSubmitting = false;
        this._clearStatusSoon();
      }
    },
    sendEmail(form) {
      return emailjs
        .sendForm(serviceId, templateId, form, userId)
        .then((result) => {
          console.log("SUCCESS!", result.text);
        })
        .catch((error) => {
          console.log("FAILED...", error.text || error);
          throw error; // Re-throw for upstream handling
        });
    },
    _clearStatusSoon() {
      // Clear the status message after a few seconds
      if (this._statusTimer) clearTimeout(this._statusTimer);
      this._statusTimer = setTimeout(() => {
        this.status = "";
      }, 6000);
    },
  },
  beforeUnmount() {
    if (this._statusTimer) clearTimeout(this._statusTimer);
  },
};
</script>

<style scoped>
/* Add any additional styling or overrides here */

.formcontainer {
  margin-top: 3em;
}

.emailform {
  margin-top: 40px;
  background-color: #006db0;
}

.nameLabel,
.emailLabel,
.messageLabel {
  color: black;
  margin-left: 20px;
}

.personsName,
.personsEmail,
.personsMessage {
  color: black;
  background-color: silver;
}

button {
  color: black;
  background-color: silver;
}

button:hover {
  background-color: #006db0;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

@media (max-width: 640px) {
  .emailform {
    margin-top: 200px;
    max-width: 90%;
  }
}
</style>
