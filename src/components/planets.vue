<template>
  <div id="planet">
    <div v-for="(planet, index) in planets" :key="index" class="single-planet">
      <router-link v-bind:to="'/planets/' + parseInt(index+1) ">
        <div v:bind:id="1">{{planet.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planets: [],
      id: ""
    };
  },
  methods: {},
  created() {
    fetch("https://swapi.dev/api/planets/")
      .then(response => response.json())
      .then(data => {
        this.planets = data.results;
      });
  }
};
</script>

<style >
#planet {
  max-width: 25%;
  margin: 5% auto;
}

.single-planet {
  text-align: center;
  width: 100%;
 font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>