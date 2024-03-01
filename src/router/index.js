import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Scuola',
    component: () => import('../views/ScuolaView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/certification',
    name: 'Certification',
    component: () => import('../views/CertificationView.vue')
  },
  {
    path: '/citizenship',
    name: 'Citizenship',
    component: () => import('../views/CitizenshipView.vue')
  },
  {
    path: '/qcer',
    name: 'Qcer',
    component: () => import('../views/QcerView.vue')
  },
  {
    path: '/advice',
    name: 'Advice',
    component: () => import('../views/AdviceView.vue')
  },
  {
    path: '/levels',
    name: 'Levels',
    component: () => import('../views/LevelsView.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/CoursesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router