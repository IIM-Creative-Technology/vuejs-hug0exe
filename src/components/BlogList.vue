<template>
    <div>
        <div class="post" v-for="post in allPost" :key="post">
            <ul>
                <li>{{post.description}}</li>
            </ul>
        </div>
    </div>
</template>


 

<script>
export default {
    name: 'blogList',

    data(){
        return{
            allPost: this.$store.state.allItem,
        }
    },

    props : {
        post: {
            type: String
        },
        allItem : {
            type : Array
        },
    }
}
</script>

<style scoped>

.post{
border: 1px solid black;
margin: 20px 150px 0 150px; 
}

.post ul li{
    list-style: none;
}

</style>