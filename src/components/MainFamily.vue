<template>
  <div class="family">
    <div id="list-rendering">
          <table>
            <tr>
              <td>
                <div>
                  <img src="../assets/user.png" alt="partner">
                  {{targetPerson}} 
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
const user = JSON.parse(localStorage.target);
const target = user._LABEL;
const kids = user._Family[0]["kinderen"];
const partnerNaam = user._Family[0]["partner"]["naam"];

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
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
</style>
