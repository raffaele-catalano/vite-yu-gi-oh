<script>
import { store }    from '../data/store';

export default {
    name: 'Footer',
    data (){
        return {
            store
        }
    },
    methods: {
        nextPrev (value) {
            store.cardOffset += value;
            this.$emit('startSearch');
        }
    }
}
</script>

<template>
    <footer class="p-2">
        <div class="buttons-container d-flex justify-content-center my-2">
            <button class="btn btn-danger me-2" @click="nextPrev(-store.cardNum)" v-if="store.cardOffset">Prev</button>
            <button class="btn btn-danger"      @click="nextPrev( store.cardNum)">Next</button>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../scss/partial/variables" as *;
    
    footer {
        .buttons-container {
            background-color: $primary;
        }
    }
    button {
        border: 2px solid white;
    }
</style>