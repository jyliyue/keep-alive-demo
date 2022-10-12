import { useKeepAliverStore } from '@/store/modules/keepAliver'

export function setupKeepAliver(router) {
    router.beforeEach((to, from, next) => {
        if (to.meta.keepAlive) {
            console.log('keepAliver')
            const { add } = useKeepAliverStore()
            add(to.name)
        }
        next()
    })
}
