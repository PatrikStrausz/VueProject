<template>
  <div id="single-starship">
    <div class="style">Name: {{starship.name}}</div>
    <div class="style">Model: {{starship.model}}</div>
    <div class="style">Cost: {{starship.cost_in_credits}}</div>
    <div class="style">Max speed: {{starship.max_atmosphering_speed}}</div>
    <div class="style">Length: {{starship.length}}</div>
    <div class="style">Cargo capacity: {{starship.cargo_capacity}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      starship: {}
    };
  },

  created() {
    fetch("https://swapi.dev/api/starships/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.starship = data;
      });
  }
};
</script>

<style>
#single-starship {
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