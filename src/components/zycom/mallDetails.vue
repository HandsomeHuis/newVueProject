<template>
	
	<div id="newD" :class="{js:flag==1}">
		<div class="content-1">
			<img :src="src"/>
			<p>{{title}}</p>
			<h3>￥{{price}}~￥{{parseInt(price)+parseInt(100*Math.random())}}</h3>
			<div class="content-1-1">
				<span>售量：{{parseInt(1000*Math.random())+22}}</span>
				<span>收藏{{sc}}人</span>
				<span>72小时内发货</span>
				<span>广东省揭阳市</span>
			</div>
			<div class="content-1-2">
				<router-link to="/shopcar">
					<span></span>
					<i id="cart">0</i>
				</router-link>	
			</div>
			<p class="gn"></p>
			<div class="content-2" @click="change(1)">
				<span>
					<img src="../../assets/images/gz.png"/>
					延误必赔
				</span>
				<span>
					<img src="../../assets/images/gz.png"/>
					退货补运费
				</span>
				<span>
					<img src="../../assets/images/gz.png"/>
					7天无理由退货
				</span>
				<span>
					<img src="../../assets/images/dayu.png"/>
				</span>
			</div>
			<p class="gn1"></p>
		</div>
		<div class="servedetails" :class="{gb:flag==1} ">
			<h3>服务说明</h3>
			<ol>
				<li>
					<img src="../../assets/images/gz.png"/>
					<span>延误必赔</span>
				</li>
				<li>
					<img src="../../assets/images/gz.png"/>
					退货补运费
				</li>
				<li>
					<img src="../../assets/images/gz.png"/>
					7天无理由退货
				</li>
				<li>
					<img src="../../assets/images/gz.png"/>
					72小时发货
				</li>
				
			</ol>
			<p class="btn" @click="fh()">完成</p>
		</div>
		<ul class="bottom">
			<li>
			<router-link to="/">
				<span></span>
				<p>客服</p>
			</router-link>
			</li>
			<li>
				<router-link to="/">
				<span></span>
				<p>店铺</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
				<span></span>
				<p>收藏</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
				<p>加入购物车</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
				<p>购买</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				src:"",
				title:"",
				sc:"",
				price:"",
				flag:""
			}
		},
		methods:{
			change(n){
				this.flag=n
			},
			fh(){
				this.flag=""
			}
		},
		mounted(){
			if(this.$route.params.src){
				this.src=this.$route.params.src
				this.title=this.$route.params.title
				this.sc=this.$route.params.sc
				this.price=this.$route.params.price
				localStorage.setItem("src",this.$route.params.src)
				localStorage.setItem("title",this.$route.params.title)
				localStorage.setItem("sc",this.$route.params.sc)
				localStorage.setItem("price",this.$route.params.price)
			}
			else{
				this.src=localStorage.getItem("src")
				this.title=localStorage.getItem("title")
				this.sc=localStorage.getItem("sc")
				this.price=localStorage.getItem("price")
			}
		}
	}
</script>

<style socped="">
	#newD{
		width:100%;
		padding-bottom:200%;
	}
	.js{
		background:rgba(0,0,0,0.6);
		z-index:999;

	}
	#newD .content-1{
		width:100%;	
	}
	#newD .content-1 img{
		width:100%;
	}
	#newD .content-1 p{
		margin-top:10px;
		font-size:1rem;
		padding:2%;
		color: #424242;
	}
	#newD .content-1 h3{
		color: #f69;
		font-weight:normal;
		font-size:1.4rem;
	}
	#newD .content-1-1{
		width:100%;
		display:flex;
		color: #999;
	}
	#newD .content-1-1 span{
		display:block;
		flex:1;
		text-align:center;
		font-size:0.9rem;
	}
	#newD .content-1-2{
		width:100%;
	}
	#newD .content-1-2 a{
		position:fixed;
		right:10px;
		bottom:120px;
		display:block;
	}
	#newD .content-1-2  a span {
		display:inline-block;
		width:3rem;
		height:3rem;
		background:url("../../assets/images/jltp2.png") no-repeat 0 0;
		background-size:2.5rem;
	}
	#newD .content-1-2 a #cart{
		position:absolute;
		display:inline-block;
		background-color: #f36;
    	color: #fff;
    	border-radius: 50%;
    	width:1rem;
    	height:1rem;
    	text-align:center;
    	line-height:1rem;
    	font-size:0.7rem;
    	top:14%;
    	right:12px;
	}
	#newD p.gn{
		width:100%;
		height:2px;
		background: #f2f5f8;
		padding:0%;
	}
	#newD p.gn1{
		width:100%;
		height:4px;
		background: #f2f5f8;
		padding:0%;
	}
	#newD .content-2{
		width:100%;
		padding-top:4%;
		padding-bottom:4%;
		box-sizing:border-box;
	}
	#newD .content-2 img{
		width:0.8rem;
		
	}
	#newD .content-2 span{
		color: #666;
		vertical-align: middle;
	}
	#newD .content-2 span:nth-of-type(4) img{
		width:0.5rem;
	}
	#newD .servedetails{
		width:100%;
		color:#333;
		position:fixed;
		bottom:-500px;
		left:0px;
		z-index:301;
		background:#fff;
	}
	#newD .servedetails h3{
		font-weight:normal;
		text-align:center;
		border-bottom: 1px solid #f2f5f8;
		padding-top:2%;
		padding-bottom:2%;
	}
	#newD .servedetails ol{
		width:80%;
		margin:0px auto;
	}
	#newD .servedetails ol li{
		margin-top:10px;
		margin-bottom:10px;
		padding-top:5%;
		padding-bottom:5%;
		border-sizing:border-box;
	}
	#newD .servedetails ol img{
		width:0.8rem;
	}
	#newD .servedetails p{
		width:100%;
		padding:3%;
		box-sizing:border-box;
		text-align:center;
		color:#fff;
		margin-top:20px;
		background-color: #f69;
	}
	#newD .gb{
		bottom:0px;
	}
	#newD ul{
		background:#fff;
		position:fixed;
		bottom:0px;
		left:0px;
		width:100%;
		z-index:300;
		padding-top:2%;
		padding-bottom:2%;
	}
	#newD ul li{
		float:left;
		text-align:center;

	}
	#newD ul li:nth-of-type(1){
		width:14%;
	}
	#newD ul li:nth-of-type(2){
		width:14%;
	}
	#newD ul li:nth-of-type(3){
		width:14%;
	}
	#newD ul li:nth-of-type(4){
		width:28%;
    	
	}
	#newD ul li:nth-of-type(5){
		width:28%;
	}
	#newD li a span{
		display:inline-block;
		width:1.3rem;
		height:1.5rem;
		
	}
	#newD li:nth-of-type(1) a span{
		background:url("../../assets/images/jltp1.png") no-repeat 0 0;
		background-size:1.2rem;
		background-position:0 -2.6rem;
	}
	#newD li:nth-of-type(2) a span{
		background:url("../../assets/images/jltp1.png") no-repeat 0 0;
		background-size:1.2rem;
		background-position:0 -5.0rem;
	}
	#newD li:nth-of-type(3) a span{
		background:url("../../assets/images/jltp1.png") no-repeat 0 0;
		background-size:1.2rem;
		background-position:0 0.4rem;
	}
	#newD li p{
		color:#999;
	}
	#newD li:nth-of-type(4) p{
		display:inline-block;
		width:100%;
		text-align:center;
		line-height:3.3rem;
		color: #333;
		background: #ffe817;
		font-size:1.2rem;
	}
	#newD li:nth-of-type(5) p{
		display:inline-block;
		width:100%;
		text-align:center;
		line-height:3.3rem;
		color: #fff;
    	background: #f69;
    	font-size:1.2rem;
	}
</style>