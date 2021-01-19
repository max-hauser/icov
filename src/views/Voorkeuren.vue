<template>
<div class="wrapper">
  <div class="popup">

    <ul>
      <li><img src="../assets/filter.png" alt="filter"></li>
      <li><img src="../assets/opvallend.png" alt="opvallend"></li>
    </ul>

    <h1>Wat is voor jou opvallend?</h1>

    <div class="row">
      <fieldset>
        <legend>Schuld</legend>
        0 <input type="range" name="" id="" list="tickmarks"> 10.000
      </fieldset>
      <datalist id="tickmarks">
        <option value="0" label="0%"></option>
        <option value="10"></option>
        <option value="20"></option>
        <option value="30"></option>
        <option value="40"></option>
        <option value="50" label="50%"></option>
        <option value="60"></option>
        <option value="70"></option>
        <option value="80"></option>
        <option value="90"></option>
        <option value="100" label="100%"></option>
      </datalist>      
      <fieldset>
        <legend>Hoeveelheid schuldeisers</legend>
        0 <input type="range" name="" id="" list="schuld"> 10
      </fieldset>
      <datalist id="schuld">
        <option value="0" label="0%"></option>
        <option value="10"></option>
        <option value="20"></option>
        <option value="30"></option>
        <option value="40"></option>
        <option value="50" label="50%"></option>
        <option value="60"></option>
        <option value="70"></option>
        <option value="80"></option>
        <option value="90"></option>
        <option value="100" label="100%"></option>
      </datalist>       
    </div>

    <ul>
      <h3>Strafblad</h3>
      <li><input type="checkbox" name="" id="">Toon</li>
      <li><input type="checkbox" name="" id="">Geen</li>
    </ul>

    <ul>
      <h3>Feiten op het Strafblad tonen</h3>
      <li><input type="checkbox" name="" id="">Misdrijven</li>
      <li><input type="checkbox" name="" id="">Zedendelicten</li>
    </ul>

    <ul>
      <h3>Strafblad</h3>
      <li><input type="checkbox" name="" id="">Overtredingen</li>
    </ul>   

    <div class="row">

    <fieldset>
      <legend>Prijs van bezittingen</legend>
      0<input type="range" name="" id="" list="bezit">1000.000
    </fieldset>
      <datalist id="bezit">
        <option value="0" label="0%"></option>
        <option value="10"></option>
        <option value="20"></option>
        <option value="30"></option>
        <option value="40"></option>
        <option value="50" label="50%"></option>
        <option value="60"></option>
        <option value="70"></option>
        <option value="80"></option>
        <option value="90"></option>
        <option value="100" label="100%"></option>
      </datalist>     
    <fieldset>
      <legend>Hoeveelheid bezittingen</legend>
      0<input type="range" name="" id="" list="aantal">10
    </fieldset> 
      <datalist id="aantal">
        <option value="0" label="0%"></option>
        <option value="10"></option>
        <option value="20"></option>
        <option value="30"></option>
        <option value="40"></option>
        <option value="50" label="50%"></option>
        <option value="60"></option>
        <option value="70"></option>
        <option value="80"></option>
        <option value="90"></option>
        <option value="100" label="100%"></option>
      </datalist>     
    <fieldset>
      <legend>vermogen op bankrekening</legend>
      0<input type="range" name="" id="" list="vermogen">10.000.000
    </fieldset>  
      <datalist id="vermogen">
        <option value="0" label="0%"></option>
        <option value="10"></option>
        <option value="20"></option>
        <option value="30"></option>
        <option value="40"></option>
        <option value="50" label="50%"></option>
        <option value="60"></option>
        <option value="70"></option>
        <option value="80"></option>
        <option value="90"></option>
        <option value="100" label="100%"></option>
      </datalist>     
    </div>  

    <button @click="route">Verder</button>    
  </div>
  </div>
</template>

<script>
export default {
methods: {
  route: function(){
    this.$router.push('/choosetype');
  },
  mounted: function(){
    if(localStorage.refresh == undefined){
      localStorage.setItem("refresh", "no");
      location.reload();
    }
  }
}
}
</script>

<style scoped>

  .wrapper{
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .popup{
    background-color: #fff;
    width: 50vw;
    display: block;
    text-align: left;
    padding: 3vw;
  }


  .row{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  fieldset{
    display: flex;
    border: none;
    width: 40%;
  }

  ul{
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-direction: column;    
    margin-bottom: 10px;
  }

  .shadow{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header{
    background-color: red;
    width: 100%;
  }

  h3{
    margin-bottom: 0;
  }

input[type="range"] {
    width: 100%;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: auto;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: black;
  border-radius: 1.3px;
}

/* Special styling for WebKit/Blink */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 36px;
  width: 16px;
  cursor: pointer;
  margin-top: -8px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
}

.popup ul:nth-child(1) {
    display: flex;
    flex-direction: row;
}

button {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 20px 30px;
    border-radius: 5px;
    float: right;
    font-size: 1.1em;
    font-weight: bold;
}

</style>