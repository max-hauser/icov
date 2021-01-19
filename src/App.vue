<template>
<div>
  <nav>
    <div id="nav">
      <!-- 
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/">Uitloggen</router-link>
      -->
    </div>    
  </nav>
  <router-view/>
</div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
