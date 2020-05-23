<template>
  <div id="starships">
    <div v-for="(starship, index) in starships" :key="index" class="single-starship">
      <router-link v-bind:to="'/starships/' + starship.url.slice(31,33) ">
        <div>{{starship.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starships: [],
      id: ""
    };
  },
  methods: {},
  created() {
    fetch("https://swapi.dev/api/starships/")
      .then(response => response.json())
      .then(data => {
        this.starships = data.results;
      });
  }
};
</script>

<style >
#starships {
  max-width: 25%;
  margin: 5% auto;
}

.single-starship {
  text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>