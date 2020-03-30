<template>
  <div id="app">
    <!-- <add-blogs></add-blogs> -->
    <!-- <show-blogs></show-blogs> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlogs from "./components/AddBlogs";
import ShowBlogs from "./components/ShowBlogs";
import BlogHeader from "./components/BlogHeader";

export default {
  name: "app",
  components: {
    AddBlogs,
    ShowBlogs,
    BlogHeader
  }
};
</script>

<style>
</style>
