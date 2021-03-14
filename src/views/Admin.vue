<template>
 <div>
    <h1>PAGE ADMIN</h1>
   
    <blogAdmin :allPost="allPost" @deleteBlog="deletePost"></blogAdmin>
</div>
</template>

<script>

import BlogAdmin from '../components/BlogAdmin'

export default {
    name: 'admin',

    components: {
        BlogAdmin,
    },

    data(){
        return {
              allPost: this.$store.state.allItem,
        }
    },

    methods: {
        deletePost(check){
            const deleteId = this.allPost.indexOf(check);
            this.allPost.splice(deleteId,2);
        }
    }
}
</script>

<style scoped>

</style>