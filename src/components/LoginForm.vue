<template>
  <div class="loginform">
    <h1>Welkom bij iCOV</h1>
    <form action="" autocomplete="off" id="loginform">
      <label for="username">username:</label>
      <input type="text" name="username" id="username" placeholder="username">

      <label for="password">password:</label>
      <input type="password" name="password" id="password" placeholder="password">

      <input type="submit" value="Login" name="login" id="submit" @click="getFormData">
            
    </form>
  </div>
</template>

<script>

export default {
  name: 'Welkom bij iCOV',
  props: {
    msg: String
  },
  methods: {
    getFormData: function (event) {
      event.preventDefault();
      const username = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;
      localStorage.setItem('username', 'admin');
      localStorage.setItem('password', 'admin123');
      localStorage.setItem('loggedin', false);

      if(username === localStorage.username && password === localStorage.password) {
        localStorage.loggedin = true;
        this.$router.push('/voorkeuren');
      }else{
        localStorage.loggedin = false;
      }
    }      
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.loginform {
  background-color: #ffffff;
  width: 50vw;
  margin: 0 auto;
  padding: 25px;
  box-shadow: 0 0 10px;
  border-radius: 10px;
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

</style>
