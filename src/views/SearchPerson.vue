<template>
<div>
    <router-link to="/"><img src="../assets/logout.png" alt="logout" class="logout"></router-link>
    <div class="home">
    <h1>Persoon zoeken</h1>

    <section>
      <h2>U gaat nu zoeken naar persoonsgegevens</h2>
    <form action="" autocomplete="off" id="loginform">
      <label for="username">Voer de naam of bsn nummer in van de persoon:</label>
      <input type="text" name="query" id="query" placeholder="Naam / BSN-nummer" autofocus>
      <input type="submit" value="Zoeken" name="login" id="submit" @click="getdata">   
    </form>   
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
      
      const data = await fetch('data.json').then(promise => promise.json()).then(data => { return data});
      let result = [];
      data.forEach(element => {
        const naam = element["_LABEL"];
        const bsn = element["_BSN"];
        if(naam.includes(query) || bsn.includes(query)){
          result.push(element);
        }
      });
        if(result.length > 0){
          console.log(result[0]);
          localStorage.setItem('target', JSON.stringify(result[0]));
          console.log(localStorage)
          this.$router.push('/person');
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
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  width: 25px;
  left: 1vw;
  top: 1vh;
  margin: 20px;
  position: absolute;
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
</style>
