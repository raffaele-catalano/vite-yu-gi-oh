<script>
import axios      from 'axios';
import { store }  from './data/store';
import Header     from './components/Header.vue';
import Main       from './components/Main.vue';
import Footer     from './components/Footer.vue';
import Loader     from './components/partial/Loader.vue';

export default {
    name: 'App',
    components: {
      Header,
      Main,
      Footer,
      Loader
    },
    data(){
      return{
        store
      }
    },
    methods: {
      getApi(){
        store.isLoading = true;
        axios.get(store.apiURL, {
          params: {
            num     : store.cardNum,
            offset  : store.cardOffset,
            type    : store.optionType
          }
        }).then(result => {
        store.cardsArray  = result.data.data;
        store.isLoading   = false
        })
      },
      getAllCardsTypes(){
        axios.get(store.apiURL).then(result => {
          const cards = result.data.data;
          cards.forEach(card => {
              if (!store.cardsType.includes(card.type)) {
                store.cardsType.push(card.type)
              }
          });
          console.log(store.cardsType);
        })
      }
    },
    mounted (){
      this.getApi();
      this.getAllCardsTypes()
    }
}
</script>

<template>
  <Header title="Yu-Gi-Oh Api" />
  <Loader v-if="store.isLoading" />
  <div class="container-after-loading" v-else>
    <Main   @startFilterCards="getApi" />
    <Footer @startSearch="getApi" />
  </div>
</template>

<style lang="scss">
  @use "./scss/main.scss" as *;

  .container-after-loading{
    background-color: $primary;
  }
</style>
