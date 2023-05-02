<script>
import Card   from './Card.vue';

export default {
    name: 'Main',
    components: {
        Card
    }
}
</script>

<template>
    <main class="p-2">
        <div class="container p-4">
            <div class="top-dark-bar d-flex align-items-center">
                <h5 class="text-light p-2">
                    Found...
                </h5>
            </div>
            <div class="cards-container d-flex flex-wrap">

                <Card />

            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../scss/partial/variables" as *;

    main {
        background-color: $primary;

        .container {
            background-color: white;
            .top-dark-bar {
                height: 70px;
                background-color: black;
            }

            .cards-container {
                background-color: lime;
                justify-content: space-between;
            }
        }
    }
</style>