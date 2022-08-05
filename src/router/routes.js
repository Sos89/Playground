

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/profile', component: () => import('pages/MyProfile.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/view', component: () => import('pages/LoginView.vue') },
      { path: '/code', component: () => import('pages/LoginCode.vue') },
      { path: '/validation', component: () => import('pages/LoginValid.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes