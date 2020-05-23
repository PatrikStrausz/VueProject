<template>
  <div id="single-film">
    <div class="style">Title: {{film.title}}</div>
    <div class="style">Director: {{film.director}}</div>
    <div class="style">Producer: {{film.producer}}</div>
    <div class="style">Release date: {{film.release_date}}</div>
    <div class="style">Episode id {{film.episode_id}}</div>
    <div class="style">Opening crawl: {{film.opening_crawl}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      film: {}
    };
  },

  created() {
    fetch("https://swapi.dev/api/films/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.film = data;
      });
  }
};
</script>

<style>
#single-film {
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