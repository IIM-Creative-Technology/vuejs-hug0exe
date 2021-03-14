<template>
    <div>
        <div class="post" v-for="post in allItem" :key="post">
            <ul>
                <li>{{post.newTitle}}</li>
            </ul>
        </div>
    </div>
</template>


 

<script>
export default {
    name: 'blogList',


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

</style>