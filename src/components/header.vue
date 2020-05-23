<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/people" exact>People</router-link>
      </li>
      <li>
        <router-link to="/planets" exact>Planets</router-link>
      </li>
      <li>
        <router-link to="/films" exact>Films</router-link>
      </li>
      <li>
        <router-link to="/species" exact>Species</router-link>
      </li>
      <li>
        <router-link to="/vehicles" exact>Vehicles</router-link>
      </li>
      <li>
        <router-link to="/starships" exact>Starships</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  font-size: 1.1vw;
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: #eee;
  color: #444;
}
</style>