<template>
<div>
    <Comment v-for="comment in paginatedData" :key = "comment.id" :comment = "comment"/>
    <div class="pagination">
        <button v-on:click = "previousPage()" :disabled = "current===0">Previous</button>
        <button v-on:click = "nextPage()" :disabled = "current >= amountOfPages - 1">Next</button>
    </div>
</div>
</template>

<script>
import Comment from './Comment.vue'

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
        }
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
    }
    
    /*
       backwardTwo() {
            return this.current-2;
        },
        backwardOne() {
            return this.current-1;
        },
        forwardOne() {
            return this.current+1;
        },
        forwardTwo() {
            return this.current+2;
        },
        
         <a href="">{{ backwardTwo }}</a>
        <a href="">{{ backwardOne }}</a>
        
        <a href="">{{ forwardOne }}</a>
        <a href="">{{ forwardTwo }}</a>*/
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
.pagination {
    margin-bottom: 2vh;
    height: 5vh;
    width: 18vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color:rgba(168, 168, 168, 0);

    @media screen and (max-width:550px) {
        width: 55vw;    
    }

    @media screen and (min-width: 551px) and (max-width: 950px) {
        width: 55vw;
    }
}
button {
    width: 6vw;
    height: 4vh;
    border: none;
    border-radius: 10px;
    

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

    @media screen and (max-width:550px) {
        width: 20vw;    
    }

    @media screen and (min-width: 551px) and (max-width: 950px) {
        width: 17vw;
    }

     @media screen and (max-height: 1400px) and (min-height: 700px) {
        font-size: 1.5em;
    }
}
</style>