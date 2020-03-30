import ShowBlogs from './components/ShowBlogs.vue'
import AddBlogs from './components/AddBlogs.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'

export default [{
    path: '/',
    component: ShowBlogs
  },
  {
    path: '/add',
    component: AddBlogs
  },
  {
    path: '/blog/:id',
    component: SingleBlog
  },
  {
    path: '/edit/:id',
    component: EditBlog
  },
]
