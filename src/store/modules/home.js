import api from '../../ajax/api'
import fetch from '../../ajax/fetch'

const state ={
    //首页的菜单
    menuList:[]
}

const mutations={
    //赋值首页菜单
    setMenu(state,param){
        state.menuList=param
    }
}
//请求首页的菜单
const actions ={
    async getMenuAction(){
        let result = await fetch.get(api.HOME_MENU_API);
        console.log(result)
    }
}

    export default {
        namespaced:true,
        state,
        mutations,
        actions

}