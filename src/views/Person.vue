<template>
  <div class="personPage">
    <aside>
  <SidebarProfile />
   <a href="" v-on:click="select" class="selected">
     <h3>Relaties</h3>
     <SidebarFamily />
    </a>
   <a href="" v-on:click="select">
     <h3>Financiën</h3>
     <SidebarFinance />
     </a>
   <a href="" v-on:click="select">
     <h3>Bezittingen</h3>
     <SidebarPossessions />
    </a>
   <a href="" v-on:click="select">
     <h3>Locaties</h3>
     <SidebarLocations />
    </a>
    </aside>

    <main>
      <section id="family" class="selectContent content"><h2>Family</h2><MainFamily /></section>
      <section id="finance" class="content"><h2>Finance</h2><MainFinance /></section>
      <section id="possessions" class="content"><h2>Possessions</h2><MainPossessions /></section>
      <section id="locations" class="content"><h2>Locations</h2><MainMap /></section>
    </main>
  </div>
</template>

<script>
  import SidebarFamily from '@/components/SidebarFamily.vue'
  import SidebarFinance from '@/components/SidebarFinance.vue'
  import SidebarPossessions from '@/components/SidebarPossessions.vue'
  import SidebarLocations from '@/components/SidebarLocations.vue'
  import SidebarProfile from '@/components/SidebarProfile.vue'
  import MainFamily from '@/components/MainFamily.vue'
  import MainFinance from '@/components/MainFinance.vue'
  import MainPossessions from '@/components/MainPossessions.vue'
  import MainMap from '@/components/MainMap.vue'

  export default {
    name: 'Home',
    components: {
      SidebarFamily,
      SidebarFinance,
      SidebarPossessions,
      SidebarLocations,
      SidebarProfile,
      MainFamily,
      MainFinance,
      MainPossessions,
      MainMap
    },
    methods: {
      select: function (event){
        event.preventDefault();
        if(event.target != 'a'){
          const link = event.target.closest("a");
          const tabs = document.querySelectorAll('aside a');
          const contents =  document.querySelectorAll('.content');
          contents.forEach((tab)=>{ tab.classList.remove('selectContent')});
          const selector = link.children[1].className;
          document.querySelector(`#${selector}`).classList.add('selectContent');
          tabs.forEach((tab)=>{ tab.classList.remove('selected')})          
          link.classList.add("selected");
        }else{
        const tabs = document.querySelectorAll('aside a');
        tabs.forEach((tab)=>{ tab.style.backgroundColor = "transparent";})
        }
      }
    }  
  }
</script>

<style scoped>
  .personPage{
    background-color: #ffffff;
    min-height: 100vh;
    width: 100vw;
    display: flex;
  }

  aside{
    background-color: black;
    width: 30vw;
    height: 100%;
    box-shadow: 0px 0px 50px #999;
  }

  main{
    width: 70vw;
    right: 0;
  }

  a{
    display: block;
    text-decoration: none;
    color: #fff;
    text-align: left;
  }

  a h3{
    padding-left: 2vw;
    font-size: 1.5em;
    margin: 0px;
    padding-top: 10px;
  }

  a.selected{
    background-color: lightblue;
    position: relative;
  }

  a.selected:after{
    content: '';
    position: absolute;
    right: -25px;
    top: calc(50% - 20px);
      width: 0;
      height: 0;
      border-top: 25px solid transparent;
      border-left: 25px solid lightblue;
      border-bottom: 25px solid transparent;
  }

  a:hover{
    background-color: lightblue;
  }

  .content{
    display: none;
  }


  .selectContent{
    display: flex;
  }

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}  
</style>
