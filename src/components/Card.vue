<script>
export default {
    name: 'Card',
}
</script>

<template>
    <div class="yugi-card">
        <div class="card-image">
            <img src="https://images.ygoprodeck.com/images/cards/64163367.jpg" alt="">
        </div>
        <div class="card-name">
            <h5 class="text-center">Nome</h5>
        </div>
        <div class="card-type">
            <p class="text-center">Tipo</p>
        </div>
    </div>  
</template>

<style lang="scss" scoped>
@use "../scss/partial/variables" as *;
    .yugi-card {
        background-color: $primary;
        width: calc(100% / 5 - 10px);

        .card-image {
            img {
                width: 100%;
            }
        }
    }
</style>