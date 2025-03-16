import { createRouter, createWebHistory } from "vue-router";
import PokemonDetails from "../components/PokemonDetails.vue";
import PokemonList from "../components/PokemonList.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "PokemonList",
    component: PokemonList,
    props: (route) => ({ query: route.query.q }),
  },
  {
    path: "/details",
    name: "PokemonDetails",
    component: PokemonDetails,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
