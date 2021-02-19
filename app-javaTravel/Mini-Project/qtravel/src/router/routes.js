
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/login/login.vue') },
      { path: 'register', component: () => import('pages/register/register.vue') },
      { path: 'gallery', component: () => import('pages/gallery/gallery.vue') },
      { path: 'about', component: () => import('pages/about.vue') },
      { path: 'trip', component: () => import('pages/trip.vue') },
      { path: 'banten', component: () => import('pages/destinations/banten/banten.vue') },
      { path: 'jakarta', component: () => import('pages/destinations/jakarta/jakarta.vue') },
      { path: 'jabar', component: () => import('pages/destinations/jabar/jabar.vue') },
      { path: 'jogja', component: () => import('pages/destinations/jogja/jogja.vue') },
      { path: 'jateng', component: () => import('pages/destinations/jateng/jateng.vue') },
      { path: 'jatim', component: () => import('pages/destinations/jatim/jatim.vue') },
      { path: 'detail', component: () => import('pages/detail.vue') }
    ]
  },

  //admin
  {
    path: '/admin/',
    component: () => import('layouts/admin.vue'),
    children: [
      { path: 'transaksi', component: () => import('pages/role/admin/transaksi.vue') },
      { path: 'produk', component: () => import('pages/role/admin/produk.vue') },
      { path: 'customer', component: () => import('pages/role/admin/customer.vue') },
      { path: 'upload', component: () => import('pages/role/admin/uploadpdk.vue')  },
    ]
  },

  

  {
    //owner
    path: '/owner/',
    component: () => import('layouts/owner.vue'),
    children: [ 
      { path: 'transaksi', component: () => import('pages/role/owner/transaksi.vue') },
      { path: 'produk', component: () => import('pages/role/owner/produk.vue') },
      { path: 'customer', component: () => import('pages/role/owner/customer.vue') }
    ]
  },

  //customer
  {
    path: '/customer',
    component: () => import('layouts/customer.vue'),
    children: [
      { path: 'cust', component: () => import('pages/customer/cust.vue') },
      { path: 'gallery', component: () => import('pages/gallery/gallery.vue') },
      { path: 'about', component: () => import('pages/about.vue') },
      { path: 'trip', component: () => import('pages/customer/trip.vue') },
      { path: 'detail', component: () => import('pages/customer/detail.vue') },
      { path: 'cart', component: () => import('pages/customer/cart.vue') },
      { path: 'transaksi', component: () => import('pages/customer/transaksi.vue') }
    ]
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
