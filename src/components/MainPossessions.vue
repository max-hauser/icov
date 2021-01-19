<template>
  <div class="possessions">
    <div id="list-rendering">
      <ol>
        <li v-for="todo in possessions" v-bind:key="todo">
          <div v-if="todo.type === 'appartement'" :class="{ active: todo.actief }">
            <img src="../assets/woonplaats-white.png" alt="">
            {{ todo.type }}
          </div>
          <div v-else-if="todo.type === 'auto'" :class="{ active: todo.actief }">
            <img src="../assets/voertuig-white.png" alt="">
            {{todo.merk}} {{todo.model}}
          </div>
          <div v-else-if="todo.type === 'huis'" :class="{ active: todo.actief }">
            <img src="../assets/woonplaats-white.png" alt="">
            {{ todo.type }}
          </div>          
        </li>       
      </ol>     
    </div>
    <DumbbellPlot />
  </div>  
</template>

<script>

import DumbbellPlot from '@/components/DumbbellPlot.vue'

const user = JSON.parse(localStorage.target);
const bezittingen = user._POSSESSIONS;
const status = user._POSSESSIONS["actief"];
export default {
  name: 'HelloWorld',
  components: {
    DumbbellPlot
  },
  props: {
    msg: String
  },
  data() {
    return {
      actief: status,
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

#list-rendering ol li div{
    background: #666;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    width: 8vw; 
    opacity: 0.5;
}

#list-rendering ol li div.active{
  background-color: #000;
  opacity: 1;
}
</style>
