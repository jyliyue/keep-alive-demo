/**
 * @description: 样品控制
 */

export const useDemoStore = defineStore('demo', {
    persist: true, // 是否开启数据持久化
    state: () => ({
        data: {
            test: 'damo'
        }
    }),
    getters: {},
    actions: {
        set(data) {
            this.data = data
        }
    }
})
