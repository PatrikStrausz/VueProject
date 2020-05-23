<template>
  <div id="vehicles">
    <div v-for="(vehicle, index) in vehicles" :key="index" class="single-vehicle">
      <router-link v-bind:to="'/vehicles/' + vehicle.url.slice(30,32)">
        <div>{{vehicle.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicles: [],
      id: ""
    };
  },
  methods: {},
  created() {
    fetch("https://swapi.dev/api/vehicles/")
      .then(response => response.json())
      .then(data => {
        this.vehicles = data.results;
      });
  }
};
</script>

<style >
#vehicles {
  max-width: 25%;
  margin: 5% auto;
}

.single-vehicle {
  text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>