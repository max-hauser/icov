<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    LoginForm
  }
}
</script>


<style scoped>
  .home{
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>