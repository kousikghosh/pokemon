<template>
  <div v-if="searchText" class="flex justify-center items-center h-24">
    <p>
      No results found for "{{ searchText }}".
      <a
        class="text-orange-500 no-underline"
        role="button"
        @click.prevent="updateSearchTextImmediate('')"
      >
        Clear filter
      </a>
    </p>
  </div>
  <div v-else class="flex flex-col justify-center items-center my-7">
    <img alt="" src="/src/assets/graphics/workers.svg" role="presentation" />
    <p v-if="props.itemType === 'requested-files'" class="mt-8 mb-0 font-bold">
      No requests found.
    </p>
    <p v-else class="mt-8 mb-0 font-bold">No projects found.</p>
  </div>
</template>

<script setup lang="ts">
import { inject, defineProps } from "vue";

interface WpNoResultsShowProps {
  itemType?: string;
}
const props = defineProps<WpNoResultsShowProps>();

const searchText = inject<string>("searchText");
const updateSearchTextImmediate = inject<(value: string) => void>(
  "update:searchTextImmediate"
);
</script>
