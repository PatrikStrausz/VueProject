import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import people from "./components/people";
import singlePerson from "./components/singlePerson";
import planets from "./components/planets";
import singlePlanet from "./components/singlePlanet";
import films from "./components/films";
import singleFilm from "./components/singleFilm";
import species from "./components/species";
import singleSpecie from "./components/singleSpecie";
import vehicles from "./components/vehicles";
import singleVehicles from "./components/singleVehicle";
import starships from "./components/starships";
import singleStarship from "./components/singleStarship";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/people",
    component: people,
  },
  {
    path: "/people/:id",
    component: singlePerson,
  },
  {
    path: "/planets",
    component: planets,
  },
  {
    path: "/planets/:id",
    component: singlePlanet,
  },
  {
    path: "/films",
    component: films,
  },
  {
    path: "/films/:id",
    component: singleFilm,
  },
  {
    path: "/species",
    component: species,
  },
  {
    path: "/species/:id",
    component: singleSpecie,
  },
  {
    path: "/vehicles",
    component: vehicles,
  },
  {
    path: "/vehicles/:id",
    component: singleVehicles,
  },
  {
    path: "/starships",
    component: starships,
  },
  {
    path: "/starships/:id",
    component: singleStarship,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
