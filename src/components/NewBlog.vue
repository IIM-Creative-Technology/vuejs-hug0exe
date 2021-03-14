<template>
    <div id="newBlog">
        <div class="inputs">
            <label for="newTitle">Titre de la page</label>
            <input type="text" v-model="newTitle">
        </div>
        
        <div class="inputs">
            <label for="newMetaTitle">Meta Title</label>
            <input type="text" v-model="newMetaTitle">
        </div>
        
        <div class="inputs">
            <label for="newMetaDesc">Meta Description</label>
            <input type="text" v-model="newMetaDesc">
        </div>
        <div class="inputs">
            <label for="newPost">Corps du post</label>
            <textarea v-model="newPost"></textarea>
        </div>

        <button @click="addPost()">Créer la page</button>
    </div>
    
        
</template>



<script>
export default {
name: 'newBlog',
    
    data(){
        return {
            newTitle:'',
            newMetaTitle:'',
            newMetaDesc:'',
            newPost:'',
        }
    },
    
    methods: {
            addPost() {
                let post = {
                    title: this.newTitle,
                    metaTitle: this.newMetaTitle,
                    description: this.newMetaDesc,
                    contentPost: this.newPost,
                }
                this.$store.commit('addPost',post);
                this.$router.push('/blog');
            }
        }
    }
</script>
    
    
<style scoped>
#newBlog{
    
    width: 30%;
    height: 75%;
    display: flex;
    flex-direction: column;
}
label{
    text-align: left;
}
.inputs{
    margin: 5% 0 5% 20%;
    text-align: left;
    display: flex;
    justify-content: space-between;
}
button{
    width: 40%;
}

</style>