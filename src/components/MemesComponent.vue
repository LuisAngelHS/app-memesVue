<template>
<div class="row mt-4 ml-5">
  <div class="col-sm-12 col-md-4 col-lg-4">
    <input class="form-control" v-model="filtros" @keyup="valor()" placeholder="Buscar Meme">
  </div>
</div>
  <div class="row">
  <div class="col-sm-12 col-md-3 col-lg-3 rangosTable ml-7 mt-5" v-for="(item, index) in filtrosCatalogos" :key="index">
  <div class="row text-fuente">
    <div class="col-md-4">
      {{index+1}}
      <img :src="item.url" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <small class="text-subtitulo"> <strong>Ancho:</strong>{{item.width}}</small><br>
        <small class="text-subtitulo"> <strong>Alto:</strong>{{item.height}}</small>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
//importación de componentes a utilizar..
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'MemesComponent',
  data: () => ({
    filtros: undefined,
    filtrosCatalogos:[]
  }),

  computed: {
    ...mapState('memesModule', ['memesCatalogo'])
  },

  async mounted () {
    await this.obtenerMemes();
    this.filtrosCatalogos = this.memesCatalogo;
  },

  methods: {
    ...mapActions('memesModule', ['obtenerMemes']),
    ...mapMutations('memesModule', ['SetMemes']),

    //Metodo de busqueda name, height y id..
    valor(){
      if(this.filtros !== undefined){
        let resultado = this.memesCatalogo.filter(item => item.name == this.filtros ||
                        item.height == this.filtros || item.id == this.filtros);
        if(resultado.length > 0){
          this.filtrosCatalogos = resultado;
        } else {
          this.filtrosCatalogos = this.memesCatalogo;
        }
      }
    }
  }
}
</script>
<style>
.rangosTable{
  background: orange;
  box-shadow: 0px 3px 8px 5px rgb(29, 118, 153);
}

.text-fuente {
  font-family: AvenirNext Bold;
  font-size: 15px;
  color: white;
  margin-top: 5px;
}
.text-subtitulo {
  font-size: 14px;
  color: rgb(46, 38, 161);
}
</style>
