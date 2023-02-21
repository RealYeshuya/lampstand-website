<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SpeakerPage />
  </div>
</template>

<script>
import SpeakerPage from "@/components/SpeakerPage.vue";

export default {
  name: "HomeView",
  components: {
    SpeakerPage,
  },
};
</script>
