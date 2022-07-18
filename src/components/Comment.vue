<template>
    <div class="comment">
        <img :src="comment.author.avatar" alt="avatar img" />
        <h3>{{ comment.author.name }}</h3>
        <span>{{ comment.author.company }}</span>
        <div class="date">
            {{ date }}
        </div>
        <p>
            {{ comment.body }}
        </p>
    </div>
</template>

<script>
import { format } from 'date-fns'

export default {
    name: 'Comment',
    props: ['comment'],

    computed: {
        date() {
            return format(new Date(this.comment.created_at), "dd MMMM yyyy', at' HH:mm")
        }
    }
}
</script>

<style scoped lang="scss">
.comment {
    margin: 2vh;
    padding: 15px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 65px 1fr 12%;
    grid-template-rows: 1fr 2fr;
    align-items: start;
    width: 70vw;
    height: 18vh;
    background-color: #fff;
    border-radius: 15px;

    img {
        height: 50px;
        width: 50px;
        border-radius: 100% 100% 100% 100%;
    }

    h3 {
        grid-area: 1 / 2 / 2 / 3;
        margin: 0%;
        margin-top: 0.5%;
        font-size: 1.1em;
    }

    span {
        margin-top: 3vh;
        grid-area: 1 / 2 / 2 / 3;
        color: gray;
        font-size: 0.8em;
        font-weight: bold;
    }

    .date {
        margin-top: 1.2vh;
        color: gray;
        font-size: 0.8em;
        font-weight: bold;
    }

    p {
        margin-top: 1%;
        grid-area: 2 / 1 / 3 / 4;
    }
}
</style>