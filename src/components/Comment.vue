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
    grid-template-columns: 55px 1fr 15%;
    grid-template-rows: 35% 1fr;
    width: 60vw;
    height: fit-content;
    background-color: #fff;
    border-radius: 15px;

    @media screen and (max-height: 1000px) {
        padding: 10px;
    }

    @media screen and (max-height: 1400px) and (min-height: 1000px) {
        grid-template-rows: 25% 1fr;
    }

    @media screen and (min-width: 801px) and (max-width: 1300px) {
        padding: 10px;
        width: 75vw;
        grid-template-columns: 60px 1fr 18%;
        grid-template-rows: 20% 1fr;
    }

    @media screen and (min-width: 801px) and (max-width: 1000px) {
        grid-template-columns: 60px 1fr 23%;
    }

    @media screen and (min-width: 551px) and (max-width: 800px) {
        width: 85vw;
        grid-template-columns: 50px 1fr 25%;
    }

    @media screen and (max-width: 550px) {
        width: 90vw;
        grid-template-columns: 50px 1fr 30%;
        grid-template-rows: 15% 1fr;
    }

    img {
        margin-top: 10px;
        object-fit: cover;
        height: 50px;
        width: 50px;
        border-radius: 100% 100% 100% 100%;

        @media screen and (min-width: 1051px) and (max-width: 1300px) {
            height: 45px;
            width: 45px;
        }

         @media screen and (max-width: 1050px) {
            margin-top: 3px;
            height: 40px;
            width: 40px;
        }

        @media screen and (max-width: 400px) {
            height: 35px;
            width: 35px;
        }

       
    }

    h3 {
        grid-area: 1 / 2 / 2 / 3;
        margin-top: 1%;
        font-size: 1.1em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media screen and (max-width: 900px) and (min-width: 401px) {
        font-size: 1em;
        }

        @media screen and (max-width: 400px) {
            font-size: 0.9em;
        }
    }

    span {
        margin-top: 3vh;
        grid-area: 1 / 2 / 2 / 3;
        color: gray;
        font-size: 0.8em;
        font-weight: bold;

        @media screen and (max-width: 900px) and (min-width: 801px) {
            font-size: 0.73em;
            margin-top: 3vh;
        }

        @media screen and (max-width: 800px) {
            font-size: 0.73em;
            margin-top: 3vh;
        }

        @media screen and (max-width: 300px) {
            font-size: 0.6em;
        }
    }

    .date {
        margin-top: 1.2vh;
        color: gray;
        font-size: 0.8em;
        font-weight: bold;

        @media screen and (max-width: 1100px) {
            margin: 0%;
            font-size: 0.73em;
        }
        @media screen and (max-width: 300px) {
            font-size: 0.6em;
        }
    }
    p {
        margin: 0%;
        margin-top: 1.5%;
        grid-area: 2 / 1 / 3 / 4;
        

        @media screen and (max-width: 500px) {
            font-size: 0.95em;
        }

        @media screen and (max-width: 400px) {
            margin-top: 4%;
        }

        @media screen and (max-width: 300px) {
            font-size: 0.7em;
        }
    }
}
</style>