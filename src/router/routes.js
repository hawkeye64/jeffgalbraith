
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', alias: 'home', component: () => import('pages/Home.vue') },
      { path: 'projects', component: () => import('pages/Projects.vue') },
      { path: 'sponsors', component: () => import('pages/Sponsors.vue') },
      { path: 'blog', component: () => import('pages/Blog.vue') }
    ]
  },

  // Always leave this as last one
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
