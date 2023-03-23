<template>
  <div class="grid justify-content-center">
    <div class="col-12 sm:col-10 md:col-10 lg:col-10 xl:col-10">
      <div class="card flex align-items-center justify-content-center">
        <Card style="width: 90em; box-shadow: 0px 3px 8px 5px darkred;">
          <template #content>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Meme"/>
            </span>
            <DataTable class="rangosTable" v-model:filters="filters" :value="memesCatalogo" stripedRows  paginator :rows="3" dataKey="id"
              :loading="loading" :globalFilterFields="['name', 'height', 'width', 'url']" tableStyle="min-width: 50rem">
              <template #empty>
                <div style="text-align: center;">
                  Elemento no encontrado. 
                </div>
              </template>
              <Column field="name" header="Nombre" style="width: 30rem; color:black">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
              </Column>
              <Column field="width" header="Ancho" style="width: 10rem; color:black"/>
              <Column field="height" header="Alto" style="width: 10rem; color:black"/>
              <Column header="Imagen" style="width: 20rem">
                <template #body="{ data }">
                  <Image :src="data.url" alt="Image" width="70" height="35" class="p-image-preview-container" preview />          
                </template>
              </Column>
            </DataTable>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
//importación de componentes a utilizar..
import { mapActions, mapState, mapMutations } from 'vuex'
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Image from 'primevue/image'
import Card from 'primevue/card';

export default {
  name: 'MemesComponent',
  components: {DataTable, Column, InputText, Image, Card},
  data: () => ({
    filters: null,
  }),

  computed: {
    ...mapState('memesModule', ['memesCatalogo'])
  },
  created() {
        this.initFilters();
    },
  async mounted () {
    await this.obtenerMemes();
  },

  methods: {
    ...mapActions('memesModule', ['obtenerMemes']),
    ...mapMutations('memesModule', ['SetMemes']),

    initFilters() {
        this.filters = {
          global: { value: null, matchMode: FilterMatchMode.CONTAINS },
          name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
          height: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        };
    },
  }
}
</script>
<style>
.rangosTable{
  margin-top: 15px;
}

</style>
