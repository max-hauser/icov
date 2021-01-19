<template>
  <div>
    <h2>Filter de weergave</h2>

    <table>
      <thead>
        <th>Opvallende personen</th>
        <th>Bezittingen</th>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" name="persoon_uitgelicht" id="persoon_uitgelicht">Uitgelicht</td>
          <td><input type="checkbox" name="bezittingen" id="bezittingen">Bezittingen</td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <th>Locatie</th>
        <th>Bezittingen</th>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" name="alle_locaties" id="alle_locaties" @change="alleLocaties">Alle locaties</td>
          <td><input type="checkbox" name="alle_afdelingen" id="alle_afdelingen" @change="alleAfdelingen">Alle</td>
        </tr>
        <tr>
          <td><input type="checkbox" name="huidige_locaties" id="huidige_locaties" @change="huidigeLocatie"> Huidige locaties</td>
          <td><input type="checkbox" name="afdeling_sales" id="afdeling_sales" @change="sales">Sales</td>
        </tr>
        <tr>
          <td><input type="checkbox" name="oude_locaties" id="oude_locaties" @change="oudeLocatie"> Oude locaties</td>
          <td><input type="checkbox" name="afdeling_shipping" id="afdeling_shipping" @change="shipping">Shipping</td>
        </tr>  
        <tr>
          <td></td>
          <td><input type="checkbox" name="afdeling_executive" id="afdeling_executive" @change="executive">Executive</td>
        </tr>                
      </tbody>
    </table>  

      <h2>Zoek</h2>
      <div class="searchfield">
        <input type="text" name="zoek" id="zoek" placeholder="Naam, BSN, locatie" autocomplete="off">
        <button @click="search"></button>
      </div>  

      <h2>weergave optie</h2>
      <button>Hierarchie</button>
      <button class="selected">Vermogen</button>      
  </div>
</template>

<script>
export default {
  methods: {
    huidigeLocatie: function(){
      document.querySelector('.oude_locatie').classList.toggle('hide');
      document.querySelector('.huidige_locatie').classList.remove('hide');
    },
    oudeLocatie: function(){
      document.querySelector('.huidige_locatie').classList.toggle('hide');
      document.querySelector('.oude_locatie').classList.remove('hide');
    },
    alleLocaties: function (){
      document.querySelector('.huidige_locatie').classList.toggle('hide');
      document.querySelector('.oude_locatie').classList.toggle('hide');      
    },
    alleAfdelingen: function (){
      document.querySelectorAll('.st4').forEach(el => {
        el.classList.toggle('hide');
      });
    },
    sales: function (){
      document.querySelectorAll('.st4').forEach(el => {
        el.classList.toggle('hide');
      });      
      document.querySelectorAll('.sales').forEach(el => {      
        el.classList.toggle('hide');
      });  
    },
    shipping: function (){
      document.querySelectorAll('.st4').forEach(el => {
        el.classList.toggle('hide');
      });      
      document.querySelectorAll('.shipping').forEach(el => {      
        el.classList.toggle('hide');
      });  
    },
    executive: function (){
      document.querySelectorAll('.st4').forEach(el => {
        el.classList.toggle('hide');
      });      
      document.querySelectorAll('.executive').forEach(el => {      
        el.classList.toggle('hide');
      });  
    },
    search: function (){
      const input = document.querySelector("#zoek").value;
      if(input === "Steven King" || input === "steven king"){
      document.querySelectorAll('.st4').forEach(el => {
        el.classList.toggle('hide');
      });         
      document.querySelector('.steven').classList.toggle('hide');   
      document.querySelector('.huidige_locatie').classList.add('hide');
      document.querySelector('.oude_locatie').classList.add('hide');        
      }
    }          
  }
}
</script>

<style scoped>

table{
  font-size: 10px;
  text-align: left;
}

td{
  width: 50%;
}

button{
  display: block;
  padding: 10px 20px;
  border-radius: 10px;
  width: 50%;
  border: none;
  margin-bottom: 10px;
  transition: 0.3s;
}

button:hover{
  background-color: lightgray;
  cursor: pointer;
}

button.selected{
  background-color: #75767A;
  color: #fff;
}


circle#Ellipse_180_1_ {
    fill: red;
}

.searchfield{
  display: flex;
}

.searchfield button{
  background-color: #000;
  padding: 5px;
  display: flex;
  align-self: stretch;
  border-radius: 0;
  height: 100%;
  margin: 0px;
  background: url('../assets/search.png');
  background-position: center;
  background-size: 25px;
  background-repeat: no-repeat;
  object-fit: contain;
  height: 50px;
  width: 50px;
}

.searchfield button:focus{
  outline: none;
}

</style>