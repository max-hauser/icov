<template>
  <div class="dumbbellplot">

    <img src="../assets/possession.png">

  </div>  
</template>

<script>

import * as d3 from 'd3'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted: function () {

    console.log(d3);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dumbbellplot img {
    width: 80%;
    margin-top: 25vh;
}
</style>
