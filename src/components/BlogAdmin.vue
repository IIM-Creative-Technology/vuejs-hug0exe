<template>
    <div>

        <div class="post" v-for="post in allPost" :key="post">
            <ul>
                <!--<li>{{post.description}}</li>-->
                <input type="text" ref="postTitle" :value="post.title" :disabled="!isEditing"
           :class="{view: !isEditing}">
            </ul>
            <div class="buttons">
                <!-- <button class="edit" :key="post" @click="editPost(post)">Editer</button> -->
                 <button @click="isEditing = !isEditing" v-if="!isEditing">Edit</button>
                  <button @click="save" v-else-if="isEditing">Save</button>
  
                <button v-if="isEditing" @click="isEditing = false">Cancel</button>
                <button class="delete" :key="post" @click="deletePost(allPost)">Supprimer</button>
            </div>
        </div>

    </div>
</template>


 

<script>
export default {
    name: 'blogAdmin',

    

    data(){
        
        

        return{
            allPost: this.$store.state.allItem,
            isEditing: false,
            
        }
    },

    props : {
        post: {
            type: String
        },
        allItem : {
            type : Array
        },

        

        
    },

    methods: {
        deletePost(check){
            this.$emit('deleteBlog', check);
        },
        
        save(check){
            this.$emit('save',check)
        }
    },
    }

</script>

<style scoped>


.post{
    border: 1px solid black;
    margin: 20px 150px 0 150px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post ul li{
    list-style: none;
}

button{
    margin-right: 20px;
    border: none;
    padding: 5px 10px;
    font-size: 15px; 
    outline: none;
}
.edit{
    background-color: rgb(255, 255, 140);
}
.delete{
    background-color: rgb(255, 85, 85);
}





</style>