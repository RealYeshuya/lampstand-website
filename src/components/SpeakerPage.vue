<template>
  <h1>Speakers</h1>
  <ul>
    <li
      v-for="speaker in speakers"
      :key="speaker.id"
      style="list-style-type: none"
    >
      <h2>{{ speaker.attributes.name }}</h2>
      <h3>Sermons:</h3>
      <!-- TODO research how to get relational entity in graphql -->
      <ul style="list-style-type: none">
        <li v-for="sermon in speaker.attributes.sermons.data" :key="sermon.id">
          <h5>{{ sermon.attributes.title }}</h5>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import { defineComponent, watchEffect, computed } from "vue";
import { ALL_SPEAKER_QUERY } from "@/composables/use-graphql";

export default defineComponent({
  setup() {
    const { result } = useQuery(ALL_SPEAKER_QUERY);

    const speakers = computed(() => result.value?.speakers.data ?? []);

    watchEffect(() => {
      console.log(speakers);
    });

    return { speakers };
  },
});
</script>
