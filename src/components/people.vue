<template>
  <div id="people">
    <div v-for="(person, index) in people" :key="index" class="single-person">
      <router-link v-bind:to="'/people/' + parseInt(index+1) ">
        <div v:bind:id="1">{{person.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [],
      id: ""
    };
  },
  methods: {},
  created() {
    fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(data => {
        this.people = data.results;
      });
  }
};
</script>

<style >
#people {
  max-width: 25%;
  margin: 5% auto;
}

.single-person {
  text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>