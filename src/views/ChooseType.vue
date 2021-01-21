<template>
<div>
    <router-link to="/"><img src="../assets/logout.png" alt="logout" class="logout" @click="logout"></router-link>
    <div class="home">
    <h1>Welke data zoek je?</h1>

    <section>
      <a href="/searchperson">
        <div>
          <img alt="Vue logo" src="../assets/user.png">
          <p>Persoonsgegevens</p>
        </div>
      </a>

      <a href="/searchcompany">
        <div>
          <img alt="Vue logo" src="../assets/office-black.png">
          <p>Bedrijfgegevens</p>
        </div>
      </a>      
    </section>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import LoginForm from '@/components/LoginForm.vue'


export default {
  name: 'Home',
  components: {
  },
  methods: {
    logout: function(event) {
      event.preventDefault();
      localStorage.clear();
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
  .home{
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

.home section{
    display: flex;
}

.home a {
    display: block;
    background-color: #ffffff;
    padding: 5vh 10vw;
    margin: 15px;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
    box-shadow: 0 0 10px;
} 

.home a img{
  object-fit: cover;
  height: auto;
  width: 100px;
}

a:nth-child(2) p {
    margin-top: 40px;
}

.home a:first-child img{
  object-fit: unset;
}

h1{
  color: #fff;
}

img{
  width: 100px;
}

.logout{
  padding: 10px 20px;
  border-radius: 10px;
  width: 25px;
  left: 1vw;
  top: 1vh;
  margin: 20px;
  position: absolute;
  background: transparent;
}
</style>
