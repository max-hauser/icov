<template>
  <div class="family">
    <div id="list-rendering">

      <div class="currentJob">
        <h3>Huidig</h3>
        <img src="../assets/finance-white.png" alt="werk">
        <strong>{{job}}</strong>
      </div>

      <ul>
        <li>Salaris</li>
      </ul>

      <input type="range" list="tickmarks" v-model="salary" disabled min="0" step="100" max="5000">

      <datalist id="tickmarks">
        <option value="0" label="0"></option>
        <option value="1000" label="1000"></option>
        <option value="2000" label="2000"></option>
        <option value="3000" label="3000"></option>
        <option value="4000" label="4000"></option>
        <option value="5000" label="5000"></option>
      </datalist> 

      <ul>
        <li>Schulden</li>
        <li><span class="danger">Hoge schulden</span></li>
      </ul>  

      <input type="range" list="tickmarks" value="3100" disabled min="0" step="100" max="5000">

      <datalist id="tickmarks">
        <option value="0" label="0"></option>
        <option value="1000" label="1000"></option>
        <option value="2000" label="2000"></option>
        <option value="3000" label="3000"></option>
        <option value="4000" label="4000"></option>
        <option value="5000" label="5000"></option>
      </datalist> 

      <ul>
        <li></li>
      </ul>                         
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
let salaris = "";
let schulden = "";
let functie = "A";
if(localStorage.target != null){
 user = JSON.parse(localStorage.target);
 salaris = (user._FINANCES[0]["jaarinkomen"] / 12) / 3;
 schulden = user._FINANCES[1]["schuldGrootte"];
functie = user.iCOV_node_subtype;
}
functie = functie.toLowerCase();    
    return {
      salary: salaris,
      debt: schulden,
      job: functie
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

/* style range */
input[type=range] {
    width: 50vw;
    max-width: 100%;
    margin-left: 0;
}

/* style datalist */
input[type=range] + datalist {
    display: block;
    margin-top: -4px;
    width: 50vw;
    display: flex;
    justify-content: space-between;
}

input[type=range] {
  -webkit-appearance: none;
  margin: 18px 0 0px 0px;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: auto;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: black;
  border-radius: 1.3px;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  background: black;
  cursor: auto;
  -webkit-appearance: none;
  margin-top: -12px;
}

ul{
    list-style-type: none;
    text-align: left;
    border-top: 2px solid black;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    margin: 0;  
}

datalist{
  margin-bottom: 100px;
}

.danger{
  background-color: #F25555;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
}

.currentJob {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 10vh;
}

.currentJob img{
  background-color: #000000;
  padding: 10px 20px;
}
</style>
