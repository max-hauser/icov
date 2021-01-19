<template>
  <div class="finance">
    <div id="list-rendering">
      <ol>
        <li>
          <img src="../assets/finance-white.png" alt="salary">
          <p>salaris</p>
          <p>{{salary}}</p>
        </li>
        <li>
          <img src="../assets/finance-white.png" alt="salary">
          <p>schulden</p>
          <p>{{debt}}</p>
        </li>        
      </ol>
    </div>
  </div>  
</template>

<script>
const user = JSON.parse(localStorage.target);
const salaris = user._FINANCES[0]["jaarinkomen"];
const schulden = user._FINANCES[1]["schuldGrootte"];

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      salary: salaris,
      debt: schulden
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
