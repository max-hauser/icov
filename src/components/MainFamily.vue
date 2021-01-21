<template>
  <div class="family">
    <div id="list-rendering">
          <table>
            <tr>
              <td>
                <div>
                  <img src="../assets/user.png" alt="partner">
                  {{targetPerson}} 
                  <a href="/steven" class="steven">bekijk</a>
                </div>               
              </td>
              <td>
                <div>
                  <img src="../assets/partner.png" alt="partner">
                  {{partner}}
                </div>
              </td>
            </tr>
            <tr>

        <td v-for="todo in children" v-bind:key="todo">
          <div>
            <img src="../assets/user.png" alt="child">
            {{ todo.naam }}
          </div>
        </td>
          </tr>  
          <tr>
            <td></td>  
            <td></td>
          </tr>  
        </table> 


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
let target = "";
let kids = "";
let partnerNaam = "";
if(localStorage.target != null){
 user = JSON.parse(localStorage.target);
 target = user._LABEL;
 kids = user._Family[0]["kinderen"];
 partnerNaam = user._Family[0]["partner"]["naam"];
}    
    return {
      children: kids,
      partner: partnerNaam,
      targetPerson: target
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

  td div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

table {
    width: 30vw;
}

tr:nth-child(2) td{
    padding: 5vh;
}  

tr:nth-child(1) td{
  padding-top: 2vh;
  padding-bottom: 1vh;
  border-bottom: 1px solid black;
}

tr td:first-child{
  border-right: 1px solid black;
}

tr:nth-child(3) td{
    padding: 5vh;
}  

.steven{
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  padding: 5px 20px;
  margin: 10px;
  text-decoration: none;
  transition: 0.3s;
}

.steven:hover{
  background-color: #000;
  color: #fff;
}
</style>
