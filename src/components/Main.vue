<script>
import Card         from './partial/Card.vue';
import FilterCards  from './partial/FilterCards.vue';
import { store }    from '../data/store';

export default {
    name: 'Main',
    components: {
        Card,
        FilterCards,
    },
    data (){
        return {
            store,
        }
    },
    methods: {
        filterTypes() {
            this.$emit('startFilterCards');
        },
        reset (){
            store.optionType = null;
            this.$emit('reset')
        }
    }
}
</script>

<template>
    <main class="p-2">

        <FilterCards @filterCardsType="filterTypes" @resetCards="reset" />
        
        <div class="container p-4">
            <div class="top-dark-bar d-flex align-items-center">
                <h5 class="text-light p-2">
                    {{ store.cardsArray.length }} Cards Founded
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
            box-shadow: 0 0 15px rgba($color: #000000, $alpha: 0.5);
            border-radius: 5px;
            .top-dark-bar {
                height: 70px;
                background-color: black;
                border-radius: 5px 5px 0 0;
            }
            
            .cards-container {
                justify-content: space-between;
            }
        }
    }
</style>