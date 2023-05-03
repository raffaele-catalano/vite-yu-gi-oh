<script>
import { store }  from '../../data/store';
export default {
    name: 'FilterCards',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center">
        <h5>Search Cards by Type</h5>
        <div class="form my-3 mx-2">
            <select v-model="store.optionType" class="form-select p-2" id="Select">
                <option v-for="(type) in store.cardsType" :key="type" :value="type" >{{ type }}</option>
            </select>
            </div>
        <button class="btn btn-dark m-3" @click="$emit('filterCardsType')">Search</button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>