<template>
  <h1>Sermons</h1>
  <ul>
    <li v-for="sermon in sermons" :key="sermon.id">
      <h2>{{ sermon.attributes.title }}</h2>
      <!-- TODO research how to get relational entity in graphql -->
      <h5>{{ sermon.attributes.speaker.data }}</h5>
    </li>
  </ul>
</template>

<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { watchEffect, computed } from "vue";

const ALL_SERMON_QUERY = gql`
  query {
    sermons {
      data {
        id
        attributes {
          title
          description
          reference
          speaker {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const { result } = useQuery(ALL_SERMON_QUERY);

const sermons = computed(() => result.value?.sermons.data ?? []);

watchEffect(() => {
  console.log(sermons);
});
</script>
