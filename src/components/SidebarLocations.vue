<template>
  <div class="locations">
    <div id="list-rendering">
      <ol>
        <li v-for="todo in locations" v-bind:key="todo">
          <div v-if="todo.entiteit === 'woning'">
            <img src="../assets/woonplaats-white.png" alt="">
          </div>
          <div v-else-if="todo.entiteit === 'werk'">
            <img src="../assets/office-white.png" alt="">
          </div>
          {{ todo.entiteit }}
        </li>       
      </ol>     
    </div>
  </div>  
</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
let user = "";
let locaties = "";
if(localStorage.target != null){
 user = JSON.parse(localStorage.target);
 locaties = user._ADDRESS;
}    
    return {
      home: 'woning',
      work: 'werk',
      locations: locaties,
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
