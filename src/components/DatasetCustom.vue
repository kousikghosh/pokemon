<script>
import { Dataset } from "vue-dataset";

export default {
  ...Dataset,
  provide() {
    return {
      // Provide the translated texts here
      datasetI18n: {
        show: "Show",
        entries: "",
        previous: "<",
        next: ">",
        showing: "Showing",
        showingTo: "to",
        showingOf: "of",
        showingEntries: "projects",
      },
    };
  },
};
</script>
