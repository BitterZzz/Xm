<template>
<!--底部栏-->
    <nav class="tabs border-top">
        <li class="tab">
            <router-link to='/home'>
             <i class="tab-a"></i>
            <span>首页</span>
            </router-link>

        </li>
        <li class="tab">
        <router-link to='/classify'>
             <i class="tab-b"></i>
            <span>分类</span>
        </router-link>
    </li>
    <li class="tab">
        <router-link to='/cart'>
             <i class="tab-c"></i>
            <span>购物车</span>
        </router-link>
    </li>
    <li class="tab">
        <router-link to='/mine'>
             <i class="tab-d"></i>
            <span>我的</span>
        </router-link>
    </li>   
    </nav>



</template>
<script>
export default {
    name:'app-tabs'
}
</script>

<style lang="scss" scoped>
.tabs{
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
    display: flex;
    .tab{
        flex:1;
        a{
            display: block;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            i{
                display: block;
                background-size:20px;
                width: 20px;
                height: 20px;
                margin: 0 auto;
                margin-top: 4px;
                margin-bottom: 4px;
            }
            span{
                display: block;
                font-size: 12px;
                color: #999;
                text-align: center;
            }
            &.router-link-active span{
               
                    color:#ff6700;
                
            }
        }
    }  
    .tab:nth-of-type(1){
    a .tab-a{
        background-image:url(/images/sy.png)
    }
     a.router-link-active i{
         background-image:url(/images/syc.png)
      }
    }
    .tab:nth-of-type(2){
    a .tab-b{
         background-image:url(/images/fl.png)
        }
    a.router-link-active i{
         background-image:url(/images/flc.png)
      }
    }
    .tab:nth-of-type(3){
    a .tab-c{
         background-image:url(/images/gwc.png)
    }
    a.router-link-active i{
         background-image:url(/images/gwcc.png)
      }
    }
     .tab:nth-of-type(4){
    a .tab-d{
         background-image:url(/images/mine.png)
        }
          a.router-link-active i{
         background-image:url(/images/minc.png)
      }
     }


}

</style>