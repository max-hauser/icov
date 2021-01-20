<template>
  <div class="companyPage">
    <main>
      <aside>
        <a href="#">terug</a>

        <h1>Bedrijfsgegevens</h1>
        <table>
          <tr>
            <td><img src="../assets/building.png" alt=""></td>
            <td>Bedrijfsnaam: SES</td>
          </tr>
          <tr>
            <td><img src="../assets/location.png" alt=""></td>
            <td>Afdres: Leiden</td>
          </tr> 
          <tr>
            <td><img src="../assets/user-white.png" alt=""></td>
            <td>CEO: Steven King</td>
          </tr>     
          <tr>
            <td><img src="../assets/agenda.png" alt=""></td>
            <td>KVK: 7339223</td>
          </tr> 
          <tr>
            <td><img src="../assets/event.png" alt=""></td>
            <td>Evenementenvergunning</td>
          </tr>                                        
        </table>
      </aside>

      <section>
        <div class="buttons">
        <button class="select" @click="showGereed">selecteer</button>
        <button class="gereed hide" @click="changeVue">gereed</button>
        <ul class="selectie">
          <li class="jan hide">Jan</li>
          <li class="pietje hide">Pietje</li>
          <li class="klaas hide">Klaas</li>
        </ul>
        </div>
        <Voorkeuren />
        <Icon name="company-zero"/>
      </section>

      <aside>
        <Legenda />
        <hr>
        <Filter />
      </aside>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Icon from '@/components/Icon.vue'
import Legenda from '@/components/CompanyLegenda.vue'
import Filter from '@/components/CompanyFilter.vue'


const maxAmount = 3;
let current = 0;

export default {
  name: 'Home',
  components: {
    Icon,
    Legenda,
    Filter,
  },
  methods: {
    steven: function() {
      console.log('test');
    },
    showGereed: function() {
      document.querySelector('.gereed').classList.toggle('hide');
      const circles = document.querySelectorAll('circle');
      circles.forEach((circle)=> {
        circle.addEventListener('click', function(event){
          if(current <= maxAmount){
            current++;
            if(current === 1){
              document.querySelector('.jan').classList.remove('hide')
              event.target.style.fill = "red";
            }else if(current === 2){
              document.querySelector('.pietje').classList.remove('hide')
              event.target.style.fill = "red";
            }else if(current === 3){
              document.querySelector('.klaas').classList.remove('hide')
              event.target.style.fill = "red";
            }
          }
        })
      })

    },
    changeVue: function() {
      const ul = document.querySelector('.selectie').children;
      let proceed = true;
      ul.forEach((element)=>{
        if(element.classList.contains('hide')){
          proceed = false;
        }
      })
      if(proceed == true){
        console.log('go to other vue')
        this.$router.push('/multiple');
      }
    }
  },
  mounted: function(){
    if(localStorage.refresh_company == undefined){
      if(location.href.includes("company")){
        localStorage.setItem("refresh_company", "no");
        location.reload();
      }
    }
  }   
}
</script>

<style scoped>

  .icons{
    width: 80%;
  }

  .companyPage{
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
  }

  main{
    display: flex;
  }

  aside{
    background-color: #000;
    width: 18vw;
    min-height: 100vh;
    color: #fff;
    padding: 1vw;
    text-align: left;
  }

  .buttons{
    position: absolute;
    top: 0;
    right: 5vw;
  }

  aside a{
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.3s;
  }

  aside a:hover{
    background-color: #fff;
    color: #000;
  }

  aside img{
    width: 24px;
  }

 ul.selectie {
    background-color: #fff;
    list-style-type: none;
    margin: 0;
    padding: 10px;
    text-align: left;
} 

  section{
    background-color: #fff;
    height: 100vh;
    width: 72vw;
    padding: 1vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  section svg{
    width: 75%;
  } 

.hide{
  visibility: hidden;
}

.st4[data-v-abc9f7ae].steven {fill: #EE5454;}
</style>
