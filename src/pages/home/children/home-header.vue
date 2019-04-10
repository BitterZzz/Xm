<template>
<!-- 首页的头部 -->
    <header class="home-header">
         <img class="logo" src="../../../assets/logo.png"/>
        <span class="search">
            <van-icon name="search"/>
            搜索商品名称
        </span>
        <span class="login"><van-icon name="manager-o"/></span>
    </header>



</template>
<script>
export default{
    name:'home-header',
    
}

</script>


<style scoped lang="scss">
.home-header{
    width: 100%;
    height: 44px;
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
    z-index: 6;
    background: #f2f2f2;
     .logo{
        height:20px;
        margin-right: 2px;
        margin-top: 4px;
    
    }
     .search{
        flex: 1;
        height: 30px;
        font-size: 15px;
        color: #666;
        background:#fff;
       
        border-radius: 4px;
        line-height: 30px;
        margin-left: 20px;
        margin-right: 10px;
        .van-icon-search{
            position: relative;
            top:5px;
           margin-left: 5px;
            font-size:20px;

        }
    }
    .login{
      .van-icon-manager-o{
          font-size: 23px;
          margin-top: 3px;
      }
    }
}

</style>