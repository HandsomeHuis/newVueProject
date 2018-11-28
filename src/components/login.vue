<template>
	<div id="login-head">
		<mt-header title="登录" fixed>
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<router-link to="/" slot="right">
				<mt-button
				icon="more">忘记密码</mt-button>
			</router-link>
		</mt-header>
		<div class="login-content">
			<p>美丽说账号</p>
			<input type="text" placeholder="输入用户名/邮箱/手机">
			<p>输入密码</p>
			<input type="text" placeholder="输入密码">
			<div class="fbtn">
				<span class="btn">登录</span>
			</div>
			<div class="qt">
				<router-link to="/">免密登录</router-link>
				<router-link to="/reginster">注册账号</router-link>
			</div>
			<div class="qqtp">
				<router-link to="/"><img src="../assets/images/qqload.png" alt="" class="qqload"/></router-link>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	#login-head .mint-header{
		background-color:#fafafa;
		color:#5e5e5e;
		border-bottom:1px solid #c9c7c8;
		font-size:1.1rem;
		padding-top:6%;
		padding-bottom:6%;
	}
	#login-head .mintui-more:before{
		display:none;
	}
	#login-head .login-content{
		width:100%;
		padding-top:20%;	
	}
	#login-head .login-content p:nth-last-of-type(1){
		text-align:center;
		font-size: 0.9rem;
		color:#5e5e5e;
		padding-top: 8%;
	}
	#login-head .login-content p:nth-last-of-type(2){
		text-align:center;
		font-size: 0.9rem;
		color:#5e5e5e;
		padding-top:4%;
		padding-bottom: 4%;
	}
	#login-head .login-content input{
		width:100%;
		border:none;
		outline: none;
		border-bottom: 2px solid #ededed;
		line-height: 1.6rem;
		display: block;
		text-align: center;
		font-size: 1.8rem;
		padding-bottom: 0.2rem;
		padding-top: 0.2rem;
		opacity: 0.4;
	}
	#login-head .login-content .fbtn{
		width: 100%;
		text-align: center;
		padding-left: 7px;
		padding-right: 5px;
	}
	#login-head .login-content .btn{
		display:block;
		width:96%;
		line-height: 3rem;
		background-color: #ff4650;
		cursor: pointer;
		color: #fff;
		margin-top: 20px;
		border-radius:5px ;
	}
	#login-head .login-content .qt{
		width: 100%;
		padding-top: 5%;
		padding-bottom: 5%;
		overflow: hidden;
		padding-left: 6px;
		
	}
	#login-head .login-content .qt a{
		font-size: 0.9rem;
	}
	#login-head .login-content .qt a:nth-of-type(1){
		float: left;
	}
	#login-head .login-content .qt a:nth-of-type(2){
		float: right;
		margin-right: 15px;
		color: #ff4650;
	}
	#login-head .login-content .qqtp{
		width: 100%;
		padding-top: 10%;
		
	}
	#login-head .login-content .qqtp a{
		display: block;
		width: 100%;
		text-align: center;
	}
	#login-head .login-content .qqload{
		width: 40%;
	}
</style>