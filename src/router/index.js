import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout default',
      component: () => import('../layouts/LayoutDefault.vue'),
      children: [
        {
          path: '/',
          name: 'yup',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/global_validators',
          name: 'global_validators',
          component: () => import('../views/GlobalValidatorsView.vue')
        }
      ]
    }
  ]
});

export default router;
