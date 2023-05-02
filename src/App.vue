<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main   from './components/Main.vue';

export default {
    name: 'App',
    components: {
      Header,
      Main,
    },
    methods: {
      getApi(){
        axios.get(store.apiURL).then(result => {
        store.resultArray = result.data.data;
        })
      }
    },
    mounted (){
      this.getApi();
    }
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
  @use "./scss/main.scss" as *;
</style>
