<template>
<div>
    <textarea placeholder="Here you can write a new comment..." v-model="comment"></textarea>
    <div class="comment">
        <button v-on:click = "addComment()" class="submit">Submit</button>
        <p v-if="showWarning">Text must be minimum 3 words and maximum 1000 symbols</p>
    </div>
    <Comment v-for="comment in paginatedData" :key = "comment.id" :comment = "comment"/>
    <div class="pagination">
        <button v-on:click = "previousPage()" :disabled = "current===0">Previous</button>
        <button v-on:click = "nextPage()" :disabled = "current >= amountOfPages - 1">Next</button>
    </div>
</div>
</template>

<script>
import Comment from './Comment.vue'
import router from '../router';

export default {
    name: 'CommentsBlock',
    components: {
        Comment
    },
    

    data() {
        return{
            current: 1,
            size: 20,
            usersData: [],
            comment: '',
            showWarning: false
        }
    },

    mounted() {
        try{
            fetch('https://bigcountry-task.vercel.app/comments.json')
            .then((response) => response.json())
            .then(data => {
                this.usersData = JSON.parse(JSON.stringify(data));
                });
        }
        catch (e) {
            throw new Error(e.message)
        }
       
        if ("page" in router.currentRoute.query) {
            this.current = Number(router.currentRoute.query.page);
        }
    },

    methods: {
        nextPage() {
            if (this.current < this.size) {
                this.current += 1;
            }
        },
        previousPage() {
            if (this.current > 1) {
                this.current -= 1;
            }
        },
        addComment() {
            if (RegExp(/^(\b\S+\b\s?){3,}$/).test(this.comment) && this.comment.length <= 1000) {
                this.usersData.push({
                    "id": this.usersData.length,
                    "body": this.comment,
                    "created_at": new Date(),
                    "author": {
                        "id": 16,
                        "name": "John Doe",
                        "avatar": "http://placeimg.com/640/480/business",
                        "company": "BigCountry"
                    }
                });
                this.comment = '';
            } else {
                this.showWarning = true;
            }
        },
    },

    computed: {
        amountOfPages() {
            if (Array.isArray(this.usersData)) {
                return Math.ceil(this.usersData.length/this.size);
            } else return 1;
        },
     
        paginatedData() {
            const start = this.current * this.size;
            const end = start + this.size;
            if (Array.isArray(this.usersData)) {
                return this.usersData.slice(start, end);
            } else return this.usersData;
        }
    },

    watch: {
        current() {
            router.currentRoute.query.page = this.current;
        }
    }
}
</script>

<style scoped lang="scss">
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-around;
    background-color:rgba(168, 168, 168, 0.658);
}

textarea {
    margin-top: 1.5%;
    padding: 5px;
    width: 60vw;
    height: 14vh;
    border: 5px solid rgba(12, 56, 43, 0.5);
    border-radius: 20px;
    box-sizing: border-box;
    font-size: 1.2em;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    &:focus {
        border: 5px solid rgba(12, 56, 43, 0.5);
    }

    &:active {
        border: 5px solid rgba(12, 56, 43, 0.5);
    }

    @media screen and (min-width: 801px) and (max-width: 1300px) {
        width: 75vw;
    }

    @media screen and (min-width: 551px) and (max-width: 800px) {
        width: 85vw;
    }

    @media screen and (max-width: 550px) {
        width: 90vw;
    }

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

.comment {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 57vw;
    height: 6vh;
    background-color: transparent;

    @media screen and (min-width: 801px) and (max-width: 1300px) {
        width: 75vw;
    }

    @media screen and (min-width: 551px) and (max-width: 800px) {
        width: 85vw;
    }

    @media screen and (max-width: 550px) {
        width: 90vw;
    }
}

p {
    margin-left: 8%;
    color: red;
    font-size: 1.1em;

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
.pagination {
    margin-bottom: 2vh;
    height: 5vh;
    width: 18vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color:rgba(168, 168, 168, 0);

    @media screen and (max-width: 1050px) {
        width: 55vw;
    }
}
button {
    width: 6vw;
    height: 5vh;
    border: none;
    border-radius: 10px;
    font-size: 1.1em;
    background-color: darkslategrey;
    color: white;
    

    &:hover {
        cursor: pointer;
        
        &:disabled {
            cursor: default;
        }
    }

    &:active {
        border: 2px solid rgba(128, 128, 128, 0.61);

        &:disabled {
            border: none;
        }
    }

    @media screen and (max-width:700px) {
        width: 20vw;    
    }

    @media screen and (min-width: 701px) and (max-width: 1050px) {
        width: 14vw;
    }

    @media screen and (max-width: 900px) and (min-width: 401px) {
        font-size: 1em;
    }

    @media screen and (max-width: 400px) {
        font-size: 0.9em;
        width: 23vw;
    }

    @media screen and (max-height: 700px) {
        height: 6vh;
    }
}

.submit {
    margin-top: 2vh;
}
</style>