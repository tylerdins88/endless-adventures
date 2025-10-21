<template>
  <div class="destination-frame">
    <!-- Collapsible Header -->
    <div class="destination-header" @click="toggleOpen">
      <img
        :src="getHeaderPhoto(destination.header)"
        alt="Destination photo"
        class="destination-thumb-vertical"
      />
      <div class="destination-title">
        <h2>{{ destination.title }} - {{ destination.location }}</h2>
        <span class="caret">{{ isOpen ? "▼" : "▶" }}</span>
      </div>
    </div>

    <!-- Collapsible Content -->
    <div v-if="isOpen">
      <ul class="destination-info-grid">
        <li><strong>Details:</strong> {{ destination.details }}</li>
        <li><strong>Location:</strong> {{ destination.location }}</li>
        <li><strong>Features:</strong> {{ destination.features }}</li>
        <li>
          <strong>Type:</strong>
          <span v-if="destination.family === 'Yes'">Family Friendly</span>
          <span v-else-if="destination.adult === 'Yes'">Adult Only</span>
          <span v-else>General</span>
        </li>
      </ul>

      <!-- PHOTO SECTION -->
      <div
        v-if="destination.photos && destination.photos.length"
        class="photo-section"
      >
        <span class="photo-label">Photos:</span>
        <div class="photo-scroll">
          <div
            class="photo-thumb"
            v-for="(photo, index) in destination.photos"
            :key="index"
            @click="openModal(getPhotoUrl(photo))"
          >
            <img :src="getPhotoUrl(photo)" :alt="`Photo ${index + 1}`" />
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="modalPhoto" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <img :src="modalPhoto" alt="Enlarged Photo" />
          <button class="close-button" @click.stop="closeModal">&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  destination: {
    type: Object,
    required: true,
  },
});

const { destination } = props;

const isOpen = ref(false);
const modalPhoto = ref(null);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const getHeaderPhoto = (filename) => {
  return new URL(
    `../../assets/destinationphotos/${destination.folder}/${filename}`,
    import.meta.url
  ).href;
};

const getPhotoUrl = (filename) => {
  return new URL(
    `../../assets/destinationphotos/${destination.folder}/${filename}`,
    import.meta.url
  ).href;
};

const openModal = (photo) => {
  modalPhoto.value = photo;
};

const closeModal = () => {
  modalPhoto.value = null;
};
</script>

<style scoped>
.destination-frame {
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.destination-frame h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.destination-frame ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.destination-frame li {
  margin: 0.5rem 0;
  font-weight: bold;
}

.photo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
}

.photo-label {
  font-weight: bold;
  white-space: nowrap;
}

.photo-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.photo-thumb {
  flex: 0 0 auto;
  width: 120px; /* roughly 50% smaller than before */
  cursor: pointer;
}

.photo-thumb img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  transition: transform 0.2s ease;
}

.photo-thumb img:hover {
  transform: scale(1.05);
}

.destination-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #e5e7eb; /* Tailwind gray-200 */
  border-radius: 0.5rem;
}

.destination-thumb-vertical {
  padding-top: 8px;
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
}
.destination-title {
  padding: 8px;
  display: inline-flex;
}
.destination-header h2 {
  font-size: 1.25rem;
  margin: 0;
}

.caret {
  padding-left: 24px;
  font-size: 1.25rem;
  user-select: none;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content img {
  width: 50%;
  height: auto;
  border-radius: 10px;
}

.close-button {
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: white;
  border: none;
  font-size: 2rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
