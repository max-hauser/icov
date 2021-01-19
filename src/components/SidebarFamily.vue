<template>
  <div class="family">
    <div id="list-rendering">
      <ol>
        <li v-for="todo in children" v-bind:key="todo">
          <img src="../assets/child-white.png" alt="child">
          {{ todo.naam }}
        </li>
        <li>
          <img src="../assets/partner-white.png" alt="partner">
          {{partner}}
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
  let kids = "";
  let partnerNaam = "";
  if(localStorage.target != null){
    user = JSON.parse(localStorage.target);
    kids = user._Family[0]["kinderen"];
    partnerNaam = user._Family[0]["partner"]["naam"];
  }

    return {
      children: kids,
      partner: partnerNaam
    }
  },
  mounted: function(){

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
</style>
