<template>
  <div class="form-inline">
    <label :for="selectId">
      <span class="not-sr-only">{{ datasetI18n.show }}</span>
      <span class="sr-only">Number of entries to show</span>
    </label>
    <select
      :id="selectId"
      :value="props.showEntries"
      class="form-control md:mr-1 md:ml-1"
      @change="handleChange($event)"
    >
      <option
        v-for="option in props.showEntriesOptions"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text ? option.text : option.value }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { inject, withDefaults, defineProps, defineEmits } from "vue";
import { uniqueId } from "lodash-es";

interface DatasetShowProps {
  showEntries?: number;
  showEntriesOptions?: { value: number; text?: number | string }[];
}

interface DatasetShowEmits {
  (event: "changed", value: number): void;
}

const props = withDefaults(defineProps<DatasetShowProps>(), {
  showEntries: 10,
  showEntriesOptions: () => [
    { value: 5, text: 5 },
    { value: 10, text: 10 },
    { value: 25, text: 25 },
    { value: 50, text: 50 },
    { value: 100, text: 100 },
  ],
});

const emit = defineEmits<DatasetShowEmits>();

const showEntries = inject<(value: number) => void>("showEntries");
showEntries?.(Number(props.showEntries));

function handleChange(event: Event) {
  if (!event.target) return;

  const target = event.target as HTMLSelectElement;
  emit("changed", Number(target.value));
  showEntries?.(Number(target.value));
}

const datasetI18n = inject("datasetI18n");

const selectId = uniqueId("dataset-show-select");
</script>
