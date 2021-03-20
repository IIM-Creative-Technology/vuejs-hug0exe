<template>
<div>

    <div>
    <h1>{{this.post.title}} l'index est {{this.post.id}}</h1>
    {{this.post.metaTitle}}
    {{this.post.description}}
    {{this.post.contentPost}}

    
    </div>    
</div>
</template>


<script>

export default {

    name: "articles",
    data(){
        return{
            blogId:this.$route.params.Bid,
            allPost: this.$store.state.allItem,
            post: "",
        }
    },
    methods: {
        getPost(){
            this.post = this.allPost[this.blogId]
        },
    },

    beforeMount(){
        this.getPost()
    }
    
}
</script>


<style scoped>

</style>