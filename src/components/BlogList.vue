<template>
    <div>
        <div class="post" v-for="post in allPost" :key="post">
            <ul>
                <li> <h2 @click="goToBlog(post.id)">{{post.title}} </h2></li>
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
    },

    methods:{
        goToBlog(blogId){
            let articleId=blogId
            this.$router.push({name:'article',params:{Bid:articleId}})
        }
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