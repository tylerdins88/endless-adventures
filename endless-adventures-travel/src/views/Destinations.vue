<template>
  <DestinationFrame :destination="destinations[0]" />
</template>

<script>
import DestinationFrame from "../components/frames/DestinationFrame.vue";
import allDestinations from "../data/destinations.js";

export default {
  components: {
    DestinationFrame,
  },
  data() {
    return {
      destinations: allDestinations,
    };
  },
};
</script>
