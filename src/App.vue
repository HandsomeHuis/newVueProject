<template>
  <div id="app">
    <ul>
      <li @click="change(1)">
      	<router-link to="/index">
        <img src="./assets/images/router1.png"  alt="" />
     	 	<img src="./assets/images/router01.png"  alt=""  />
      	<p>主页</p></router-link>
      </li>
      <li @click="change(2)" >
      	<router-link to="/fl"><img src="./assets/images/router2.png" alt="" />
      	<img src="./assets/images/router02.png" alt="" />
      	<p>分类</p></router-link></li>
			<li @click="change(3)"><router-link to="/shopcar"><img src="./assets/images/router3.png" alt="" />
			<img src="./assets/images/router03.png" alt="" />
			<p>购物车</p></router-link></li>
			<li @click="change(4)">
				<router-link to="/login">
					<img src="./assets/images/router4.png" alt=""/>
					<img src="./assets/images/router04.png" alt="" />
					<p>我</p>
				</router-link>
			</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
     	msg:"0",
      flag:1
    }
  },
  methods:{
    change(n){
        this.flag=n;
    }
  }
}
</script>

<style scoped>
	 .router-link-active {
      color:#ff2f66;
    }
    img:nth-of-type(1){
      display:none;
    }
    img:nth-of-type(2){
        display:inline-block;
    }
    .router-link-active img:nth-of-type(1){
        display:inline-block;
    }
    .router-link-active img:nth-of-type(2){
        display:none;
     }
   ul{
    	background-color: #fff;
      position: fixed;
      bottom: 0px;
      left: 0px;
      display: flex;
      width: 100%;
      z-index:100;
      padding-top: 3%;
      padding-bottom: 1%;
   }
   ul li{
   		flex: 1;
   		text-align: center;
   }
   a{
      text-decoration: none;
      color: #999999;
      display: block;
     
   }
   p{
   	 font-size: 0.25rem;
   }
  img{
  		width: 22%;
  }
   
</style>
