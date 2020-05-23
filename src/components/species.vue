<template>
  <div id="species">
    <div v-for="(specie, index) in species" :key="index" class="single-specie">
      <router-link v-bind:to="'/species/' + parseInt(index+1) ">
        <div>{{specie.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      species: [],
      id: ""
    };
  },
  methods: {},
  created() {
    fetch("https://swapi.dev/api/species/")
      .then(response => response.json())
      .then(data => {
        this.species = data.results;
      });
  }
};
</script>

<style >
#species {
 max-width: 25%;
  margin: 5% auto;
}

.single-specie {
  text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>