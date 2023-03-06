import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPost from '../views/AddPost.vue'
import Watch from '../views/Watch.vue'
import Contact from '../views/Contact.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'
import SignUp from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/watch',
    name: 'watch',
    component: Watch,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});


export default router
