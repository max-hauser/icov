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
        <Icon name="auto"/>
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


export default {
  name: 'Home',
  components: {
    Icon,
    Legenda,
    Filter
  },
  methods: {
    steven: function() {
      console.log('test');
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

  section{
    background-color: #fff;
    height: 100vh;
    width: 72vw;
    padding: 2vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section svg{
    width: 75%;
  } 

.hide{
  visibility: hidden;
}

.st4[data-v-abc9f7ae].steven {fill: #EE5454;}
</style>
