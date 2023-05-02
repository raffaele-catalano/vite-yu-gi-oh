<script>
export default {
    name: 'Header',
}
</script>

<template>
    <header class="d-flex align-items-center">
        <img class="me-3" src="logo.png" alt="logo">
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>

<style lang="scss" scoped>
    header {
        height: 80px;
        background-color: white;
        padding: 5px;

        img {
            height: 50px;
        }
    }
</style>