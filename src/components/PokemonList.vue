<template>
  <div class="main-container">
    <!-- <Dataset v-slot="{ ds }" :ds-data="formattedData">
      <DatasetSearchProvider>
        <div
          class="flex items-center mb-6 flex-col lg:flex-row corp lg:float-right widget-group"
          :data-page-count="ds.dsPagecount"
        >
          <div class="block items-center corp lg:flex md:flex">
            <div class="mr-0 md:mr-3 w-full">
              <DatasetSearch />
            </div>
          </div>
        </div>
        <div class="table-container dataset corp" style="--tw-shadow: none">
          <table
            style="
              border-top: 1px solid #333333;
              box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
            "
            aria-label="Dataset table"
          >
            <DatasetItem tag="tbody">
              <template #noDataFound>
                <tr>
                  <DatasetNoResults />
                </tr>
              </template>
            </DatasetItem>
          </table>
        </div>

        <div class="pagination-container grid gap-5 my-6 corp">
          <div />
          <div class="flex flex-col items-center data-pager">
            <nav
              id="paginationBullet"
              role="navigation"
              aria-label="Pagination Navigation"
              :aria-describedby="paginationId"
            >
              <DatasetPager />
            </nav>
            <p :id="paginationId" class="text-xs text-grey-900 mt-5">
              <DatasetInfo />
            </p>
          </div>
          <div class="justify-self-end">
            <DatasetShow />
          </div>
        </div>
      </DatasetSearchProvider>
    </Dataset> -->
    <div class="card" v-for="(item, index) in pokemonList" :key="index">
      <PokemonInfo :url="item.url" @click="handleClick(index)" />
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  nextTick,
  onMounted,
  ref,
  defineProps,
  defineComponent,
} from "vue";
import { DatasetInfo, DatasetItem, DatasetPager } from "vue-dataset";
import DatasetNoResults from "./DatasetNoResults.vue";
import DatasetSearchProvider from "./DatasetStateProvider.vue";

import Dataset from "./DatasetCustom.vue";
import DatasetSearch from "./DatasetSearch.vue";
import DatasetShow from "./DatasetShow.vue";
import { uniqueId } from "lodash-es";
import { useSelector, useDispatch } from "@reduxjs/vue-redux";
import { fetchUser } from "../store/slices/user-slice";
import PokemonInfo from "./PokemonInfo.vue";
import PokemonDetails from "./PokemonDetails.vue";

import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const paginationId = uniqueId("dataset-pagination");

const pokemonList = useSelector((state) => state.user.userList);
const dispatch = useDispatch();

onMounted(() => {
  dispatch(fetchUser());
});

const handleClick = (params) => {
  // eslint-disable-next-line no-debugger
  // router.push({
  //   name: "details",
  //   path: "details",
  // });
  // eslint-disable-next-line no-debugger
  debugger;
  // router.addRoute({
  //   path: "/details",
  //   component: PokemonDetails,
  // });
  //router.push("details");

  router.push("details");
};
</script>
