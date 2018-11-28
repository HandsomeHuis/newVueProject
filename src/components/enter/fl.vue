<template>
	<main>
		<div class="head">
			<router-link to="/index">
				<img src="../../assets/images/head1.png" alt="" />
			</router-link>
			
			<div class="find">
				<input type="text" placeholder="套装"/>
				<img src="../../assets/images/find.png" alt="" width=""/>
			</div>
				<span class="chat">
					<img src="../../assets/images/talk.png" alt="" />
				</span>	
		</div>
		<div class="content">
			<h3>{{msg}}</h3>
			<ul>
				<li v-for="(v,i) in list">
					<router-link :to="{name:'gg',params:{id:v.id,title:v.title}}"><img :src="v.src1" alt="" /></router-link>
					<p>{{v.title}}</p>
				</li>
			</ul>
		</div>
	</main>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				list:[{
					src1:require("../../assets/images/fl01.jpg"),
					title:"初冬新品",
					id:1
					
				},
				{
					src1:require("../../assets/images/fl02.jpg"),
					title:"鞋子",
					id:2
				},
				{
					src1:require("../../assets/images/fl03.jpg"),
					title:"裤子",
					id:3
				},
				{
					src1:require("../../assets/images/fl04.jpg"),
					title:"裙子",
					id:4
				},
				{
					src1:require("../../assets/images/fl05.jpg"),
					title:"温暖毛衣",
					id:5
				},
				{
					src1:require("../../assets/images/fl06.jpg"),
					title:"气质风衣",
					id:6
				},
				{
					src1:require("../../assets/images/fl07.jpg"),
					title:"卫衣",
					id:7
				},
				{
					src1:require("../../assets/images/fl08.jpg"),
					title:"配饰",
					id:8
				},
				{
					src1:require("../../assets/images/fl09.jpg"),
					title:"棉服",
					id:9
				},
				{
					src1:require("../../assets/images/fl10.jpg"),
					title:"流行套装",
					id:10
				},
				{
					src1:require("../../assets/images/fl11.jpg"),
					title:"时髦外套",id:11
				},
				{
					src1:require("../../assets/images/fl12.jpg"),
					title:"美妆个护",id:12
				},
				{
					src1:require("../../assets/images/fl13.jpg"),
					title:"男友",id:13
				},
				{
					src1:require("../../assets/images/fl14.jpg"),
					title:"内衣",id:14
				},
				{
					src1:require("../../assets/images/fl15.jpg"),
					title:"包包",id:15
				},
				{
					src1:require("../../assets/images/fl16.jpg"),
					title:"童装",id:16
				},
				],msg:"本周流行"
			}
		}
	}
</script>
<style type="text/css" scoped="">
	.head{
		width:100%;
		padding:8px;
		height: 45px;
	}
	a {
		float: left;
		width: 13%;
		text-align: center;
	}
	a img{
		width:60%;
	}
	.head input{
		
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
	.head .find{
		float: left;
		position: relative;
		width: 67%;
		margin:0px auto;
	}
	.head .find img{
		position: absolute;
		top:25%;
		left: 8px;
		width:5%;
		
	}
	.head .chat{
		float: right;
		width:10%;
		text-align: center;
		height: 45px;
		padding: 5px;
	}
	.head .chat img{
		float: left;
		width: 45%;
	}
	.content h3{
		font-weight: normal;
		color: #333;
		font-size: 1.2rem;
		padding-bottom: 2px;
		padding-left: 18px;
	}
	.content ul{
		overflow: hidden;
		border-top: 1px solid #eee;
	}
	.content ul li{
		float: left;
		width: 24.7%;
		border-right: none;
		border-bottom: 1px solid #eee;
		border-right: 1px solid #eee;
	}
	.content li a{
		width:100%;
		display: block;
		text-align: center;
		
	}
	.content li a img{
		width: 85%;
		
	}
	.content li p{
		width: 100%;
		font-size: 0.8rem;
		text-align: center;
		color: #666666;
		padding-bottom: 10px;
		padding-top: 10px;
	}
</style>