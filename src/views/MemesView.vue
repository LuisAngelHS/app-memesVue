<template>
  <div class="row spaces">
    <div class="col-10">
      <h1 class="title">El Meme :D</h1>
      <memes-component></memes-component>
    </div>
  </div>
</template>
<script>
//importación de componentes a utilizar..
import MemesComponent from '@/components/MemesComponent.vue'
export default {
  name: 'MemesView',
  components: {
    MemesComponent
  }
}
</script>
<style scoped>
.title {
  font-family: "AvenirNext Bold", Helvetica, Arial, Verdana, Tahoma, sans-serif !important;
  font-size: 30px !important;
  text-align: center !important;
  color: purple; 
}
.spaces {
  justify-content: center !important;
  padding: 10px;
  margin-top: 17px;
}
</style>
