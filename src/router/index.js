import { createRouter, createWebHashHistory } from 'vue-router'
import { setupKeepAliver } from './guards/setupKeepAliver'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

setupKeepAliver(router)

export default router
