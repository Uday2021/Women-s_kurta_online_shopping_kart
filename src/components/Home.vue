<template>
  <div>
    <Headers />

    <Filteration />

    <main-content
      />
  </div>
</template>

<script>
import Headers from "./Header.vue";
import Filteration from "./filter.vue";
import mainContent from "./mainContent.vue";
export default {
  name: "Home",
  components: {
    Headers,
    Filteration,
    mainContent,
  },
};
</script>

<style scoped></style>
