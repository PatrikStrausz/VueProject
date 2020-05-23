<template>
  <div id="single-vehicle">
    <div class="style">Name: {{vehicle.name}}</div>
    <div class="style">Model: {{vehicle.model}}</div>
    <div class="style">Cost: {{vehicle.cost_in_credits}}</div>
    <div class="style">Max speed: {{vehicle.max_atmosphering_speed}}</div>
    <div class="style">Length: {{vehicle.length}}</div>
    <div class="style">Cargo capacity: {{vehicle.cargo_capacity}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      vehicle: {}
    };
  },

  created() {
    fetch("https://swapi.dev/api/vehicles/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.vehicle = data;
      });
  }
};
</script>

<style>
#single-vehicle {
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