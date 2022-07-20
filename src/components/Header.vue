<template>
    <div>
        <h1 v-if="header">Comments</h1>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['header']
}
</script>

<style scoped lang="scss">
div {
    padding-top: 3vh;
    box-sizing: border-box;
    height: 13vh;
    background-color: darkslategrey;
    color: #fff;

    @media screen and (max-width: 300px) {
        height: 11vh;
    }

    @media screen and (max-width: 500px) and (min-width: 301px) {
        height: 10vh;
    }

    @media screen and (max-width: 850px) and (min-width: 501px) {
        height: 9.5vh;
    }
}

h1 {
    padding-left: 4vw;
    font-size: 3em;
    margin: 0%;

    @media screen and (max-width: 1300px) and (min-width: 1101px) {
        font-size: 2.5em;
    }

    @media screen and (max-width: 1100px) and (min-width: 851px) {
        font-size: 2.3em;
    }

    @media screen and (max-width: 8500px) and (min-width: 701px) {
        font-size: 2.5em;
    }

    @media screen and (max-width: 700px) and (min-width: 451px) {
        font-size: 2.1em;
    }

    @media screen and (max-width: 450px) {
        font-size: 1.7em;
    }
}
</style>