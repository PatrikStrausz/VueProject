<template>
  <div id="single-specie">
    <div class="style">Name: {{specie.name}}</div>
    <div class="style">Language: {{specie.language}}</div>
    <div class="style">Classification: {{specie.classification}}</div>
    <div class="style">Average lifespan: {{specie.average_lifespan}}</div>
    <div class="style">Designation: {{specie.designation}}</div>
    <div class="style">Average height: {{specie.average_height}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      specie: {}
    };
  },

  created() {
    fetch("https://swapi.dev/api/species/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.specie = data;
      });
  }
};
</script>

<style>
#single-specie {
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