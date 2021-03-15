<template>
 <div>
    <h1>PAGE ADMIN</h1>
   
    <blogAdmin :allPost="allPost" @deleteBlog="deletePost" @save="save"></blogAdmin>
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
        },
        save(allPost) {
      this.allPost.title = this.$store.commit(allPost.title);
      //this.user.lastName = this.$refs['last_name'].value;
      this.isEditing = !this.isEditing;
    },
}}
</script>

