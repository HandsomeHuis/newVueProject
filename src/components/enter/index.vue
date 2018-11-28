<template>
	<main id="zgh">
		<div class="head">
			<router-link to="/index">
				<img src="../../assets/images/head1.png" alt="" />
			</router-link>
			
			<div class="find">
				<input type="text" placeholder="套装" @focus="change()" />
				<img src="../../assets/images/find.png" alt="" width=""/>
			</div>
				<span class="chat">
					<img :src="src" alt="" v-if="dz==1"/>
					<span @click="hy()" v-else>取消</span>
				</span>	
			<div class="hide" v-if="dz==1">
				
			</div>	
			<div class="show" v-else>
				<img src="../../assets/images/fire.png" alt="" />
				<h3>热门搜索</h3>
				<ul>
					<li v-for="(v,i) in msg"><router-link to="/">{{v}}</router-link></li>
				</ul>
			</div>
			
		</div>
      	<mt-swipe :auto="2000">
		  <mt-swipe-item>
		  	<img src="../../assets/images/banner01.jpg" alt="" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/banner02.jpg" alt="" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/banner03.jpg" alt="" />
		  </mt-swipe-item>
		   <mt-swipe-item>
		  	<img src="../../assets/images/banner04.jpg" alt="" />
		  </mt-swipe-item>
		</mt-swipe>		
		<div class="index-route01">
			<ul>
				<li>
					<router-link to="/sdqq">
						<img src="../../assets/images/index-router1.png" alt="" />
						<p>十点抢券</p>
					</router-link>
				</li>
				<li>
					<router-link to="/hwtm">
					<img src="../../assets/images/index-router2.png" alt="" />
					<p>好物特卖</p>
					</router-link>
				</li>
				<li>
					<router-link to="/ngfl">
					<img src="../../assets/images/index-router3.png" alt="" />
					<p>内购福利</p>
					</router-link>
				</li>
				<li>
					<router-link to="cqsx">
					<img src="../../assets/images/index-router4.png" alt="" />
					<p>初秋上线</p>
					</router-link>
				</li>
			</ul>	
		</div>
		<div class="index-route02">
			<router-link to='/route02xstm'><img src="../../assets/images/index-router-xstm.jpg" alt="" /></router-link>
		</div>
		<div class="index-route03">
			<ul>
					<li><router-link to="/rfi"></router-link></li>
					<li><router-link to="/rse"></router-link></li>
					<li><router-link to="/rth"></router-link></li>
					<li><router-link to="/rfo"></router-link></li>
					<li><router-link to="/rfif"></router-link></li>
					<li><router-link to="/rsix"></router-link></li>
					<li><router-link to="/rsev"></router-link></li>
					<li><router-link to="/reig"></router-link></li>			
			</ul>
			<img src="../../assets/images/index-router-3.jpg" alt="" />
			<div class="more">
				<p>查看更多&gt;</p>
			</div>	
	
			
		</div>
		<p class="ts"></p>
		<div class="index-route04">
			<ul>
				<li>流行</li>
				<li>新款</li>
				<li>精选</li>
			</ul>
			<ol>
				<li v-for="(v,i) in jj">
					<router-link :to="{name:'aa',params:{src:v.src,price:v.price,sc:v.sc,title:v.title}}">
						<img :src="v.src" alt="" />

						<p>{{v.title}}</p>
						<div class="bottom">
							<span class="left">{{parseFloat(v.price).toFixed(2)}}</span>
							<img src="../../assets/images/star.png" alt="" />
							<span class="right">{{v.sc}}</span>	
						</div>
					</router-link>
				</li>
			</ol>
		</div>
		<aside>
			<img src="../../assets/images/ftop.png" alt=""  class="fts"/>
		</aside>
	
	</main>

</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				src:'src/assets/images/talk.png',
				dz:1,
				msg:[],
				jj:[]
			}
		},
		methods:{
			change(){
				this.dz=this.dz+1
			},
			hy(){
				this.dz=this.dz-1
			}
		},
		mounted(){
			this.$http.get('./data/search.json')
			 .then((response)=> {
			    this.msg=response.data.list
			  })
			this.$http.get('./data/indexmall.json')
			.then((response)=>{
				this.jj=response.data.mallDetails
				
			})
			$(window).scroll(function(event){
				if($(window).scrollTop()>2*$(window).height()){
					$('#zgh aside').css("display","block")
				}
				else{
					$('#zgh aside').css("display","none")
				}
				
			})
			$('#zgh aside').click(function(event){
				$('html,body').animate({'scrollTop':0},500)
			})
		}
	}
</script>

<style>
	#zgh aside{
		position: fixed;
		display: inline-block;
		bottom: 70px;
		right: 0px;
		z-index: 50;
		float: right;
		display: none;
		text-align: center;
	}
	#zgh .fts{
		
		width: 50%;
	}
	#zgh .head{
		width:100%;
		height: 45px;
		padding-top: 5%;
	}
	#zgh a {
		float: left;
		width: 13%;
		text-align: center;
	}
	#zgh a img{
		width:60%;
	}
	#zgh .head input{
		outline: none;
		padding-left: 30px;
		padding-top: 5px;
		padding-bottom: 5px;
		height: 100%;
		border:none;
		background-color: #f4f4f4;
		font-size:16px;
		border-radius: 10px;
		width:100%;
	}
	#zgh .head .find{
		float: left;
		position: relative;
		width: 67%;
		margin:0px auto;
	}
	#zgh .head .find img{
		position: absolute;
		top:25%;
		left: 8px;
		width:5%;
		
	}
	#zgh .head .chat{
		float: right;
		width:10%;
		text-align: center;
		height: 45px;
		padding: 5px;
	}
	#zgh .head .chat img{
		float: left;
		width: 45%;
		margin-left: 5px;
	}
	#zgh .head .chat span{
		float: left;
		color: #898989;
		font-size: 0.7rem;
	}
	#zgh .show{
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 130;
		top:50px;
		background-color: #FFFFFF;
		left: 0px;
		padding-top: 8%;
		padding-left: 2%;
		
	}
	#zgh .show img{
		width:4%;
		float: left;
	}
	#zgh .show h3{
		color: #666666;
		font-weight: normal;
		font-size: 0.9rem;
		margin-bottom: 20px;
		padding-left: 5%;
		padding-top:1%;
	}
	#zgh .show ul li{
		float: left;
		width: 22%;
		margin-bottom: 8px;
		background-color: #f4f4f4;
		margin-right: 10px;
		text-align: center;
		border-radius: 5px;
	}
	#zgh .show ul li:nth-of-type(4n){
		margin-right: 0px;
	}
	#zgh .show li a{
		display: inline-block;
		width: 100%;
		color: #adadad;
		padding: 3px 8px;
		font-size: 0.7rem;	
		
	}
	#zgh .mint-swipe{
		width: 100%;
	}
   	#zgh .mint-swipe-items-wrap{
		padding-bottom:65%;
		height:0px;
		width:100%;
	}
	#zgh img{
	 	width:100%;
	}
    #zgh .mint-swipe-indicator.is-active{
		background:#d43e2e;
	}
    #zgh .mint-swipe-indicator{
		background: #ffffff;
	}
	#zgh .index-route01 ul{
		display: flex;
		width: 100%;
	}
	#zgh .index-route01 ul li{
		flex: 1;
	}
	#zgh .index-route01 img{
		width: 80%;
		text-align: center;
	}
	#zgh .index-route01 p{
		color: #7d7d7d;
		font-family: "微软雅黑";
		padding-top: 5%;
		font-size: 0.9rem;
		text-align: center;
		white-space: nowrap;
	}
	#zgh .index-route01 a{
		text-decoration: none;
		display: block;
		width: 100%;
	}
	#zgh .index-route02{
		margin-top: 10px;
		width: 100%;
		padding-bottom:60%;
	}
	#zgh .index-route02 a{
		display: block;
		width: 100%;
	}
	#zgh .index-route02 img{
		width: 100%;
	}
	#zgh .index-route03{
		width:100%;
		position: relative;
		padding-top:15%;
		padding-bottom:12%;
		
	}
	#zgh .index-route03 ul {
		width: 100%;
		padding-bottom:50%;
		
	}
	#zgh .index-route03 ul li{
		float:left;
		width: 23%;
		margin-right: 7px;
		margin-bottom: 10px;
		z-index:90;
	}
	#zgh .index-route03 ul li:nth-of-type(4n){
		
		margin-right: 0px;
	
	}
	#zgh .index-route03 li a{
		width: 100%;
		padding-bottom: 100%;
		cursor:pointer;
		
	}
	#zgh .index-route03 img{
		width: 100%;
		position: absolute;
		top:0px;
		left:0px;
		z-index:-1;
	}
	#zgh .index-route03 .more p{
		text-align:center;
		color:#ff2f66;
		font-size:1rem;
		margin-top: 10px;
		padding-top: 50px;
	}
	#zgh .ts{
		height: 20px;
		background-color: #eeeeee;
		width: 100%;
	}
	#zgh .index-route04{
		width: 100%;
	}
	#zgh .index-route04 ul{
		display: flex;
		width: 100%;
	}
	#zgh .index-route04 ul li{
		flex: 1;
		text-align: center;
		color: #919191;
		font-size: 1.3rem;
		padding-top: 5%;
		padding-bottom: 5%;
	}
	#zgh .index-route04 ol li{
		float: left;
		width: 50%;
	}
	#zgh .index-route04 ol a{
		width: 100%;
	
	}
	#zgh .index-route04 ol p{
		width: 100%;
   	 	white-space: nowrap;
    	text-overflow: ellipsis;
    	text-align: center;
    	overflow: hidden;
   	 	color: #666;
   	 	font-size: 0.9rem;
   	 	padding: 5px 0px;
	}
	#zgh .index-route04 ol img{
		width: 88%;
	}
	#zgh .index-route04 ol .bottom{
		width: 50%;
		margin:0px auto;
		margin-bottom: 5px;
	}
	#zgh .index-route04 .bottom .left{
		float: left;
		color: #ff2f66;
	}
	#zgh .index-route04 .bottom .right{
		float: right;
		color: #666666;
	}
	#zgh .index-route04 .bottom img{
		text-align: center;
		width: 13%;
	}
</style>