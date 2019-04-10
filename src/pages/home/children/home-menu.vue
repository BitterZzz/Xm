<template>
    <div>
        <!-- 首页的菜单 -->
        <div class="home-menu">
            <!-- 横向列表 -->
            <ly-tab 
            v-if="menuList.length>1"
            v-show="showMenu===false"
            :value="value"
            @input="selectMenuItem"
            :items="menuList"
            :options="{activeColor: '#b4282d', lineWidth: 2}">

            </ly-tab>
        </div>
        <!--箭头-->
    <div class="arrow" >
        <span></span><!--给它做淡入淡出的效果-->
        <span @click="changeMenuAction" ><!--给箭头添加点击事件-->
            <van-icon name="arrow-down" :class="{active:showMenu}"></van-icon>
        </span>
    </div>
    <!--下拉菜单-->
    <transition enter-active-class="slideInDown" leave-active-class="slideOutUp" >
    <div v-if="showMenu">
   
   
           <h4 class="title">全部频道</h4>
            <ul  class="show-menu">
                <li class="menu-item" :class="{active:value===index}"
                v-for="(item,index) in menuList" :key="item.id"
                @click="selectMenuItem(index)">
                  <span> {{item.label}}</span>
                </li>
            </ul>
  
    </div>
    </transition>

</div>


</template>
<script>
import LyTab from 'ly-tab'
export default {
    name: 'home-menu',
    components:{
        [LyTab.LyTab.name]:LyTab.LyTab
    },
    data(){
        return{
            //显示下拉菜单为false
            showMenu:false
        }
    },
    props: {
        value: Number//这个是home的root.vue传过来的v-model="selectMenu"，
        //接收到传过来的index下标
    },
    computed: {
        ...mapState({
            // 获得菜单列表数据
            list: state=>state.home.menuList
        }),
        menuList(){
            return [{id: 0, label: '推荐'}, ...this.list];
        }
    },
    methods: {
        // 菜单选项的点击事件
        selectMenuItem(index){
            this.$emit('input', index);
            this.showMenu=false;
        },
        //切换菜单栏
        changeMenuAction(){
            this.showMenu =!this.showMenu
        }
    },
    created(){
        // 请求菜单列表
        this.$store.dispatch('home/getMenuAction');
    }
}
</script>

<style socped lang="scss">
.home-menu{
      width: 100%;
    height: 26px;
    position: absolute;
    left: 0;
    top: 44px;
    z-index: 5;
    background: #f2f2f2;
  
}
</style>