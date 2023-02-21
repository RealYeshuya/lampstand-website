<template>
  <h1>Speakers</h1>
  <ul>
    <li v-for="speaker in speakers" :key="speaker.id">
      <h2>{{ speaker.attributes.name }}</h2>
      <!-- TODO research how to get relational entity in graphql -->
      <ul>
        <li v-for="sermon in speaker.attributes.sermons.data" :key="sermon.id">
          <h5>{{ sermon }}</h5>
        </li>
      </ul>
      <!-- <ul>
        <li v-for="sermon in speakers.data.sermons" :key="sermon.id">
          {{ sermon.attributes.name }}
        </li>
      </ul> -->
    </li>
  </ul>
</template>

<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { watchEffect, computed } from "vue";

const ALL_SPEAKER_QUERY = gql`
  query {
    speakers {
      data {
        id
        attributes {
          name
          email
          phoneNumber
          sermons {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

const { result } = useQuery(ALL_SPEAKER_QUERY);

const speakers = computed(() => result.value?.speakers.data ?? []);

watchEffect(() => {
  console.log(speakers);
});
</script>
