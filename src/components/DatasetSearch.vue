<template>
  <form role="search" @submit.prevent>
    <label :for="inputId">
      <span class="sr-only">Search</span>
    </label>
    <input
      :id="inputId"
      type="search"
      :value="searchText"
      placeholder="Search..."
      class="h-11 w-full md:w-auto mb-3 md:mb-0"
      @input="updateSearchText($event.target.value)"
    />
    <button type="submit">
      <span class="sr-only">Submit Search</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { uniqueId } from "lodash-es";

const searchText = inject<string>("searchText");
const updateSearchText = inject<(value: string) => void>("update:searchText");

const inputId = uniqueId("search");
</script>

<style scoped></style>
