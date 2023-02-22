<template>
  <h1>Sermons</h1>
  <ul>
    <li
      v-for="sermon in sermons"
      :key="sermon.id"
      style="list-style-type: none"
    >
      <h2>{{ sermon.attributes.title }}</h2>
      <h3>by</h3>
      <!-- TODO research how to get relational entity in graphql -->
      <h5>{{ sermon.attributes.speaker.data.attributes.name }}</h5>
    </li>
  </ul>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import { defineComponent, watchEffect, computed } from "vue";
import { ALL_SERMON_QUERY } from "@/composables/use-graphql";

export default defineComponent({
  setup() {
    const { result } = useQuery(ALL_SERMON_QUERY);

    const sermons = computed(() => result.value?.sermons.data ?? []);

    watchEffect(() => {
      console.log(sermons);
    });

    return { sermons };
  },
});
</script>
