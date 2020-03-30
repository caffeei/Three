<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">{{category}}</li>
    </ul>
    <button @click="deleteBlog()">删除</button>
    <router-link :to="'/edit/'+id">
      <button>编辑</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("https://vuedemo-5256a.firebaseio.com/posts/" + this.id + ".json")
      .then(function(data) {
        console.log(data);
        return data.json();
        // this.blog = data.body;
      })
      .then(function(data) {
        this.blog = data;
      });
  },
  methods: {
    deleteBlog() {
      this.$http
        .delete(
          "https://vuedemo-5256a.firebaseio.com/posts/" + this.id + ".json"
        )
        .then(response => {
          this.$router.push({ path: "/" });
        });
    }
  }
};
</script>
<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>