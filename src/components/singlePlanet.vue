<template>
  <div id="single-planet">
    <div class="style">Name: {{planet.name}}</div>
    <div class="style">Terain: {{planet.terrain}}</div>
    <div class="style">Gravity: {{planet.gravity}}</div>
    <div class="style">Climate: {{planet.climate}}</div>
    <div class="style">Population: {{planet.population}}</div>
    <div class="style">Diameter: {{planet.diameter}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      planet: {}
    };
  },

  created() {
    fetch("https://swapi.dev/api/planets/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.planet = data;
      });
  }
};
</script>

<style>
#single-planet {
  max-width: 25%;
  margin: 5% auto;
}

.style {
  text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>