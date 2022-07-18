<template>
<div>
    <Comment v-for="comment in data" :key = "comment.id" :comment = "comment"/>
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
            data: []
        }
    },

    mounted () {
        try{
            fetch('https://bigcountry-task.vercel.app/comments.json')
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.data = data;
                });
        }
        catch (e) {
            throw new Error(e.message)
        }
    }
    
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-around;
    background-color:rgba(168, 168, 168, 0.658);
}
</style>