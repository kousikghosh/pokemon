<template>
  <div>
    <NavBar />
    <!-- <PokemonList /> -->
    <router-view> </router-view>
    <PageFooter />
  </div>
</template>

<script lang="ts">
import "./components/pokemon.scss";

import { defineComponent } from "vue";
import NavBar from "./components/Layouts/NavBar.vue";
import PageFooter from "./components/Layouts/PageFooter.vue";
//import PokemonList from "./components/PokemonList.vue";

export default defineComponent({
  name: "App",
  components: {
    //PokemonList,
    NavBar,
    PageFooter,
  },
});
</script>
