
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', alias: 'home', component: () => import('pages/Home.vue') },
      { path: 'projects', component: () => import('pages/Projects.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'sponsors', component: () => import('pages/Sponsors.vue') },
      { path: 'blog', component: () => import('pages/Blog.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') }
    ]
    // path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    // children: [
    //   { path: '', component: () => import('pages/Index.vue') }
    // ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
