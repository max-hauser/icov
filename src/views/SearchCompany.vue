<template>
<div>
    <router-link to="/"><img src="../assets/logout.png" alt="logout" class="logout" @click="logout"></router-link>
    <div class="home">
    <h1>Bedrijfgegevens zoeken</h1>

    <section>
      <h2>U gaat nu zoeken naar Bedrijfgegevens</h2>
    <form action="" autocomplete="off" id="loginform">
      <label for="username">Afdeling:</label>
      <input type="text" name="query" id="query" placeholder="Afdeling:" autofocus>
      <input type="submit" value="Zoeken" name="login" id="submit" @click="getdata">   
    </form>   
      <div class="information">
        <strong class="infoBtn" @click="information">i</strong>
        <p class="info hide">Probeer: shipping</p>
      </div>       
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
    getdata: async function (event) {
      event.preventDefault();

      const query = document.querySelector('#query').value;

        if(query === "sales" || query == "shipping" || query == "executive"){

          localStorage.setItem('department', query);
          this.$router.push('/company');
        }else{
          console.log("geen resultaten gevonden!")
          const searchbar = document.querySelector('#query');
          searchbar.style.border = "1px solid red";
          setTimeout(()=> {
            searchbar.style.border = "1px solid black";
            searchbar.value = "";
            searchbar.autofocus = true;
          }, 1000)
        }      
    },
     information: function(event) {
      event.preventDefault();
      document.querySelector('.info').classList.toggle('hide');
    },
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
  height: 100px;
  width: 100px;
}

.home a:first-child img{
  object-fit: unset;
}

h1{
  color:  #ffffff;
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

form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

form input{
  margin-bottom: 15px;
  padding: 10px;
}

form input[type="submit"]{
  background-color: black;
  border: none;
  width: min-content;
  border-radius: 3px;
  color: #fff;
  padding: 10px 20px;
}

section{
  background-color: #ffffff;
  width: 50vw;
  margin: 0 auto;
  padding: 25px;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.hide{
  visibility: hidden;
}

.information{
  display: flex;
  justify-content: left;
  align-items: center;  
}

.information strong{
  background-color: #000;
  padding: 10px;
  border-radius: 100%;
  color:#fff;
  text-align: center;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;  
}

.information strong:hover{
  cursor: pointer;
}

.info{
  margin-left: 25px;
}
</style>
