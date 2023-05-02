<script>
import Card         from './partial/Card.vue';
import FilterCards  from './partial/FilterCards.vue';
import { store }    from '../data/store';

export default {
    name: 'Main',
    components: {
        Card,
        FilterCards
    },
    data (){
        return {
            store,
        }
    }
}
</script>

<template>
    <main class="p-2">

        <FilterCards />
        
        <div class="container p-4">
            <div class="top-dark-bar d-flex align-items-center">
                <h5 class="text-light p-2">
                    Found {{ store.cardsArray.length }} Cards
                </h5>
            </div>
            <div class="cards-container d-flex flex-wrap">

                <Card 
                v-for="card in store.cardsArray"
                :key="card.id"
                :imgURL="card.card_images[0].image_url"
                :cardName="card.name"
                :cardType="card.type"
                />

            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../scss/partial/variables" as *;

    main {
        background-color: $primary;

        .container:not(:first-child) {
            background-color: white;
            .top-dark-bar {
                height: 70px;
                background-color: black;
            }

            .cards-container {
                justify-content: space-between;
            }
        }
    }
</style>