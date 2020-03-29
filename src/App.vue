<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">++</button>
    <button @click="sub">--</button>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <img slot="item-icon" src="./assets/img/tabbar/home.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/wx.jpg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cat" active-color="red">
        <img slot="item-icon" src="./assets/img/tabbar/type.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/wx.jpg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" active-color="red">
        <img slot="item-icon" src="./assets/img/tabbar/car.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/wx.jpg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/home" active-color="red">
        <img slot="item-icon" src="./assets/img/tabbar/my.jpg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/wx.jpg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
    import TabBar from './components/tabbar/TabBar'
    import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: 'App',
    components:{
      TabBar,
      TabBarItem

    },
    methods:{
      add(){
          this.$store.commit('madd')
      },
      sub(){
          this.$store.commit('msub')
        }
    }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
