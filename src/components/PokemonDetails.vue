<template>
  <div class="card-info-container">
    <button
      type="button"
      class="btn btn-primary back-button"
      @click="backToListPage"
    >
      Back
    </button>
    <img class="card-img" :src="imageUrl" alt="pokemon avatar" />
    <div class="pokemon-info-container">
      <div>
        <label aria-label="name" id="name" for="name">Name: </label
        ><span class="pokemon-name">{{ pokemonName }}</span>
      </div>
      <div>
        <label aria-label="height" for="height">Height: </label
        ><span class="pokemon-height">{{ pokomanHeight }}</span>
      </div>
      <div>
        <label aria-label="weight" for="weight">weight: </label
        ><span class="pokemon-weight">{{ pokomanWeight }}</span>
      </div>
      <div class="pt-2">Abilities:</div>
      <div class="abilities pt-0">
        <li v-for="(ability, index) in abilities" :key="index">
          {{ ability.ability.name }}
        </li>
      </div>
      <div class="pt-2 stats">Stats:</div>
      <div class="pt-0 stats-list" v-for="(stat, index) in stats" :key="index">
        <div>
          Base stat Score:<span class="stat-score-value">{{
            stat.base_stat
          }}</span>
        </div>
        <div>
          Stat Name: <span class="stat-name">{{ stat.stat.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, defineProps, ref } from "vue";
import { useSelector, useDispatch } from "@reduxjs/vue-redux";
import { pokemonInfoFetch } from "../store/slices/pokemon-info-slice";
import axios from "axios";
import { useLocalStorage } from "@vueuse/core";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  url: String,
});

let pokemonName = ref("");
let pokomanHeight = ref("");
let pokomanWeight = ref("");
let abilities = ref([] as any);
let imageUrl = ref("");
let stats = ref([] as any);
let pokemonUrl = ref("");

const pokemonInfo = useSelector((state) => state.pokemonInfo);
console.log("pokemonInfo: ", pokemonInfo);
const dispatch = useDispatch();

onMounted(() => {
  console.log("URL: ", props.url);
  pokemonUrl.value = localStorage.pokemonUrl;
  //dispatch(pokemonInfoFetch(props.url));
  sendRequest();
});

const backToListPage = () => {
  router.back();
};

const sendRequest = async () => {
  await axios
    .get(pokemonUrl.value)
    .then((response) => {
      // eslint-disable-next-line no-debugger
      console.log("Response:", response.data);
      pokemonName.value = response.data.name;
      pokomanHeight.value = response.data.height;
      pokomanWeight.value = response.data.weight;
      abilities.value = response.data.abilities;
      stats.value = response.data.stats;

      // eslint-disable-next-line
      imageUrl.value =
        response.data.sprites.other["official-artwork"].front_default;
    })
    .catch((error) => {
      console.error("Error sending request:", error);
    });
};
</script>
