<script>
export default {
    name: 'Card',
    props: {
        imgURL  : String,
        cardName: String,
        cardType: String
    }
}
</script>

<template>
    <div class="yugi-card mb-3 d-flex flex-column justify-content-between">
        <div class="card-image">
            <img :src="imgURL" :alt="cardName">
        </div>
        <div class="card-name mt-1 text-light">
            <p class="text-center fw-bold">{{cardName}}</p>
        </div>
        <div class="card-type">
            <p class="text-center fst-italic">{{cardType}}</p>
        </div>
    </div>  
</template>

<style lang="scss" scoped>
@use "../../scss/partial/variables" as *;
    .yugi-card {
        background-color: $primary;
        width: calc(100% / 5 - 10px);
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        
        .card-image {
            img {
                width: 100%;
                cursor: pointer;
            }
            img:hover {
                transform: scale(1.3);
                transition: .6s;
            }
        }

        .card-name {
            font-size: 1.1rem;
        }
    }
</style>