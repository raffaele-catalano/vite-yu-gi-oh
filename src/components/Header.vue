<script>
export default {
    name: 'Header',
    props: {
        title: String,
    }
}
</script>

<template>
    <header class="d-flex align-items-center">
        <img class="me-3" src="logo.png" alt="logo">
        <h1>{{title}}</h1>
    </header>
</template>

<style lang="scss" scoped>
@use "../scss/partial/variables" as *;

    header {
        height: 80px;
        background-color: white;
        padding: 5px;

        img {
            height: 50px;
        }
    }
</style>