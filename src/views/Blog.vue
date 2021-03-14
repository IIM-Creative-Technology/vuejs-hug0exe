<template>
 <div>
    <h1>PAGE TOUT LES BLOGS</h1>
   
    <blog-list :post="post"></blog-list>
</div>
</template>

<script>
import BlogList from '../components/BlogList.vue'
export default {
  components: { BlogList },
    
}
</script>

<style scoped>

</style>