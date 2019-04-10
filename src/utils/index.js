import Scroll from '../components/Scroll'
import { Icon,Popup,Loading,Lazyload  } from 'vant';




export default {
    install(Vue){
        Vue.component(Scroll.name,Scroll)
        Vue.component(Icon.name,Icon);
        Vue.component(Popup.name,Popup);
        Vue.component(Loading.name,Loading)
        Vue.use(Lazyload);
    }
}