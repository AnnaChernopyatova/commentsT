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
    grid-template-columns: 55px 1fr 12%;
    grid-template-rows: 35% 1fr;
    width: 70vw;
    height: fit-content;
    background-color: #fff;
    border-radius: 15px;

    @media screen and (max-height: 1000px) {
        height: 25vh;
        padding: 10px;
    }

    @media screen and (max-width: 550px) {
        padding: 10px;
        width: 85vw;
        grid-template-columns: 60px 1fr 30%;
        grid-template-rows: 20% 1fr;
    }

    @media screen and (min-width: 551px) and (max-width: 900px) {
        grid-template-columns: 60px 1fr 45%;
    }

    @media screen and (max-height: 1400px) and (min-height: 1000px) {
        grid-template-columns: 55px 1fr 30%;
        grid-template-rows: 25% 1fr;
    }

    img {
        height: 50px;
        width: 50px;
        border-radius: 100% 100% 100% 100%;

        @media screen  and (max-height: 700px) and (max-width: 550px) {
        height: 35px;
        width: 35px;
        }
    }

    h3 {
        grid-area: 1 / 2 / 2 / 3;
        position: relative;
        top: -20%;
        margin: 0%;
        font-size: 1.1em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media screen and (max-height: 1400px) and (min-height: 700px) {
        font-size: 1.4em;
        }
    }

    span {
        margin-top: 3vh;
        grid-area: 1 / 2 / 2 / 3;
        color: gray;
        font-size: 0.8em;
        font-weight: bold;

        @media screen and (max-height: 1400px) and (min-height: 700px) {
            margin-top: 2.5vh;
            font-size: 1em;
        }
    }

    .date {
        margin-top: 1.2vh;
        color: gray;
        font-size: 0.8em;
        font-weight: bold;

        @media screen and (max-width:550px) {
            margin: 0;
        }

        @media screen and (max-height: 1400px) and (min-height: 700px) {
            font-size: 1em;
            margin: 0%;
        }
    }

    p {
        margin-top: 1%;
        grid-area: 2 / 1 / 3 / 4;

        @media screen and (max-width:550px) {
            margin-top: 5%;
        }

        @media screen and (max-height: 700px) {
            font-size: 0.8em;
        }

        @media screen and (max-height: 1101px) and (min-height: 701px) {
            font-size: 1.2em;
        }

        @media screen and (max-height: 1400px) and (min-height: 1100px) {
            font-size: 1.4em;
        }
    }
}
</style>