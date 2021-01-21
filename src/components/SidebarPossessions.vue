<template>
  <div class="possessions">
    <div id="list-rendering">
      <ol>
        <li v-for="todo in possessions.slice(0, 2)" v-bind:key="todo">
          <div v-if="todo.type === 'appartement'">
            <img src="../assets/woonplaats-white.png" alt="">
          </div>
          <div v-else-if="todo.type === 'auto'">
            <img src="../assets/voertuig-white.png" alt="">
          </div>
          {{ todo.type }}
        </li>       
      </ol>     
    </div>
  </div>  
</template>

<script>

export default {
  name: 'Helloorld',
  props: {
    msg: String
  },
  data() {
let user = "";
let bezittingen = "";
if(localStorage.target != null){
 user = JSON.parse(localStorage.target);
 bezittingen = user._POSSESSIONS;
}    
    return {
      car: 'auto',
      house: 'appartement',
      possessions: bezittingen,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width: 50px;
    height: 50px;
    object-fit: contain;
    padding-bottom: 10px;
  }

  ol{
    margin: 0;
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-start;

  }

  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
  }

  li p {
      margin: 0;
  }  
</style>
