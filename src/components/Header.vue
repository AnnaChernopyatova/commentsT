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

    @media screen and (max-height: 1400px) {
        height: 11vh;
    }
}

h1 {
    padding-left: 4vw;
    font-size: 3em;
    margin: 0%;
}
</style>