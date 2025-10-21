<template>
  <DestinationFrame :destination="destinations[0]" />
  <DestinationFrame :destination="destinations[1]" />
  <DestinationFrame :destination="destinations[2]" />
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
