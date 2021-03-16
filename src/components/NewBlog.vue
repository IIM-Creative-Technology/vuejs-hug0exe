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

        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
    </div>
    
        
</template>



<script>
export default {
name: 'newBlog',
    
    data(){
        return {
            errors:[],
            newTitle:'',
            newMetaTitle:'',
            newMetaDesc:'',
            newPost:''
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
            },

             checkForm: function (e) {
                if (this.title && this.metaTitle && this.description && this.contentPost ) {
                    return true;
                }

                this.errors = [];

                if (!this.title) {
                    this.errors.push('Title required.');
                }
                if (!this.metaTitle) {
                    this.errors.push('Meta Title required.');
                }
                 if (!this.description) {
                    this.errors.push('Description required.');
                }
                if (!this.contentPost) {
                    this.errors.push('Content Post required.');
                }

                e.preventDefault();
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