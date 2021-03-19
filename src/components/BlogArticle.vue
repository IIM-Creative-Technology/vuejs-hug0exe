<template>
<div class="article" v-for="post in allPost" :key="post">
    <div v-if="articleId == post.id"></div>
    <h1>{{post.title}} l'index est {{post.id}}</h1></div>    
</template>


<script>

export default {

    name: "articles",
    data(){
        return{
            blogId:this.$route.params.Bid,
            allPost: this.$store.state.allItem,
            
        }
    },
    
}
</script>


<style scoped>

</style>