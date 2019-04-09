
import { Icon,Popup,Loading,Lazyload  } from 'vant';




export default {
    install(Vue){
        Vue.component(Icon.name,Icon);
        Vue.component(Popup.name,Popup);
        Vue.component(Loading.name,Loading)
        Vue.use(Lazyload);
    }
}