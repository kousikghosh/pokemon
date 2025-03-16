<template>
  <slot />
</template>

<script setup lang="ts">
import { inject, provide, ref, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const filterResults = inject<(value: string) => void>("search") ?? (() => {});
const filterResultsDebounced = useDebounceFn(filterResults, 100);

const searchText = ref("");
watch(searchText, (value) => {
  filterResultsDebounced(value);
});

provide("searchText", searchText);
provide("update:searchText", (value: string) => {
  searchText.value = value;
});
provide("update:searchTextImmediate", (value: string) => {
  searchText.value = value;
  filterResults(value);
});
</script>
