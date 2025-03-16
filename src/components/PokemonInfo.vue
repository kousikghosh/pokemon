<template>
  <div class="card-info-container">
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
      <div class="abilities">
        <li v-for="(ability, index) in abilities" :key="index">
          {{ ability.ability.name }}
        </li>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, defineProps, ref } from "vue";
import { useSelector, useDispatch } from "@reduxjs/vue-redux";
import { pokemonInfoFetch } from "../store/slices/pokemon-info-slice";
import axios from "axios";

const props = defineProps({
  url: String,
});

let pokemonName = ref("");
let pokomanHeight = ref("");
let pokomanWeight = ref("");
let abilities = ref([] as any);
let imageUrl = ref("");

const pokemonInfo = useSelector((state) => state.pokemonInfo);
const dispatch = useDispatch();

onMounted(() => {
  sendRequest();
});

const sendRequest = async () => {
  await axios
    .get(props.url)
    .then((response) => {
      // eslint-disable-next-line no-debugger
      //console.log("Response:", response.data);
      pokemonName.value = response.data.name;
      pokomanHeight.value = response.data.height;
      pokomanWeight.value = response.data.weight;
      abilities.value = response.data.abilities;

      // eslint-disable-next-line
      imageUrl.value =
        response.data.sprites.other["official-artwork"].front_default;
    })
    .catch((error) => {
      console.error("Error sending request:", error);
    });
};
</script>
