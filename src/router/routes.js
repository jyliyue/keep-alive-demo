const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index.vue'),
        meta: {
            title: '首页',
            keepAlive: false
        }
    },
    {
        path: '/list-one',
        name: 'list-one',
        component: () => import('@/views/list-one.vue'),
        meta: {
            title: '列表 1',
            keepAlive: true
        }
    },
    {
        path: '/list-two',
        name: 'list-two',
        component: () => import('@/views/list-two.vue'),
        meta: {
            title: '列表 2',
            keepAlive: true
        }
    }
]

export default routes
