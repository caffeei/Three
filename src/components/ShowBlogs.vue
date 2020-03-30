<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="search" />
    <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.index">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title|to-uppercase}}</h2>
      </router-link>
      <article>{{blog.content|short}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("https://vuedemo-5256a.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
        // this.blogs = data.body.slice(0, 10);
        // console.log(this.blogs);
      })
      .then(function(data) {
        var blogsArray = [];
        for (let key in data) {
          console.log(key);
          console.log(data[key]);
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
        console.log(this.blogs);
      });
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    //   "to-uppercase":function(value){
    //       return value.toUpperCase();
    //   },
    ToUppercase(value) {
      return value.toUpperCase();
    },
    short(value) {
      return value.slice(0, 100) + "...";
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
