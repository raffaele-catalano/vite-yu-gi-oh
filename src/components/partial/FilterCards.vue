<script>
export default {
    name: 'FilterCards',
}
</script>

<template>
    <div class="container">
        <div class="form m-3">
            <select class="form-select w-25 p-2" id="Select">
                <option selected>Scegli il tipo di Card</option>
                <option value="1">Mostro</option>
                <option value="2">Trappola</option>
                <option value="3">Magia</option>
            </select>
            <!-- <label for="floatingSelect">Works with selects</label> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>