<template>
  <div class="hello">
    <div id="profile">
      <div><img src="../assets/user-white.png" alt="user"></div>
      <ol>
        <li>
          <h2>{{naam}}</h2>
        </li>
        <li>
          <p>Persoonlijke informatie</p>
        </li>
        <li>
          <p>{{geboortedatum}}</p>
        </li>
        <li>
          <p>{{relatie}}</p>
        </li>        
      </ol>
    </div>
  </div>  
</template>

<script>
let user = "";
let name = "";
let dob = "";
let status = "";
if(localStorage.target != null){
 user = JSON.parse(localStorage.target);
 name = user._LABEL;
 dob = user._DATE_OF_BIRTH;
 status = user._Family[0]["burgelijke status"];
}

export default {
  props: {
    msg: String
  },
  data() {
    return {
      naam: name,
      geboortedatum: dob,
      relatie: status
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  

  ol{
    margin: 0;
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
  }

  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li p {
      margin: 0;
      color: #fff;
  }
  
  h2{
    color: #fff;
  }

div#profile {
    display: flex;
    margin-bottom: 5vh;
    padding:  2vh 5vh;

}

#profile ol{
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 5vh;
}  
</style>
