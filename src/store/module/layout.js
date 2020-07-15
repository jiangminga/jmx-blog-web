export default {
    state: {
        //属性
        leftMenu: []
    },
    getters: {
        getLeftMenu: state => state.leftMenu
    },
    mutations: {
        //set方法
        setLeftMenu(state, leftMenu) {
            state.leftMenu = leftMenu
        }
    }
}