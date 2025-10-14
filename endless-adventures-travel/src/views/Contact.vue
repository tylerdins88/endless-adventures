<template>
  <div class="formcontainer">
    <div class="emailform">
      <form @submit.prevent="submitForm" ref="formRef" novalidate>
        <!-- Honeypot (hidden field to catch bots) -->
        <input
          type="text"
          name="website"
          class="hp"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        />

        <div>
          <label for="user_name" class="label">Name:</label>
          <input
            v-model="formData.user_name"
            type="text"
            id="user_name"
            name="user_name"
            class="field"
            required
          />
        </div>

        <div>
          <label for="user_email" class="label">Email:</label>
          <input
            v-model="formData.user_email"
            type="email"
            id="user_email"
            name="user_email"
            class="field"
            required
          />
        </div>

        <div>
          <label for="message" class="label">Message:</label>
          <textarea
            v-model="formData.message"
            id="message"
            name="message"
            rows="4"
            class="field"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          :aria-busy="isSubmitting ? 'true' : 'false'"
          class="btn w-full"
        >
          Send
        </button>

        <span
          v-if="isSubmitting"
          class="status"
          role="status"
          aria-live="polite"
        >
          Sending...
        </span>

        <p v-if="status" class="status" aria-live="polite">
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
      formData: { user_name: "", user_email: "", message: "" },
      isSubmitting: false,
      status: "",
      _statusTimer: null,
    };
  },
  methods: {
    async submitForm(event) {
      if (event?.preventDefault) event.preventDefault();

      const form = this.$refs.formRef;
      if (form?.website?.value) return; // honeypot

      if (!form.checkValidity()) {
        this._flash("Please fill in all required fields.");
        return;
      }

      const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        this.formData.user_email
      );
      if (!emailOK) {
        this._flash("Please enter a valid email address.");
        return;
      }

      this.isSubmitting = true;
      this.status = "";
      try {
        await emailjs.sendForm(serviceId, templateId, form, userId);
        this.status = "Thanks! Your message has been sent.";
        this.formData = { user_name: "", user_email: "", message: "" };
        form.reset();
      } catch (err) {
        console.error("Failed to send email:", err);
        this.status = "Sorry—something went wrong. Please try again.";
      } finally {
        this.isSubmitting = false;
        this._clearStatusSoon();
      }
    },
    _flash(msg) {
      this.status = msg;
      this._clearStatusSoon();
    },
    _clearStatusSoon() {
      if (this._statusTimer) clearTimeout(this._statusTimer);
      this._statusTimer = setTimeout(() => (this.status = ""), 6000);
    },
  },
  beforeUnmount() {
    if (this._statusTimer) clearTimeout(this._statusTimer);
  },
};
</script>

<style scoped>
.formcontainer {
  margin-top: 3em;
}

.emailform {
  margin-top: 40px;
  background-color: #b7d9f7; /* requested blue */
}

/* Labels */
.label {
  display: block;
  color: black;
  margin-left: 0.25rem;
  font-size: 0.875rem;
}

/* Inputs & Textarea */
.field {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.6rem 1rem;
  font-size: 0.875rem;
  border: 1px solid #333;
  border-radius: 0.375rem;
  background-color: #5c4421; /* requested gold */
  color: #ffffff; /* improve contrast on dark gold */
}

.field:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(183, 217, 247, 0.6);
  border-color: #000;
}

/* Button */
.btn {
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: box-shadow 0.2s ease, transform 0.05s ease,
    background-color 0.2s ease;
  background-color: #5c4421; /* requested gold */
  color: #ffffff; /* readable on dark gold */
  border: 1px solid #000;
}

.btn:hover {
  background-color: #b7d9f7; /* swap on hover for a simple effect */
  color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Status text */
.status {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: #333;
}

/* Honeypot field (visually hidden) */
.hp {
  position: absolute !important;
  left: -9999px !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
}
</style>
