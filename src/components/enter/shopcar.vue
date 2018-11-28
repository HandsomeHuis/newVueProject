<template>
	<main id="gwc">
			<mt-header title="购物车">
		  		<router-link to="/fl" slot="left">
		    	<mt-button icon="back"></mt-button>
		  		</router-link>
		  		 <mt-button icon="more" slot="right" >首页</mt-button>
			</mt-header>
			<div class="content">
				<p>您的购物车还空着呢，</p>
				<p>美物这么多，快去看看吧～</p>
				<router-link to="/"><span class="btn">去逛逛</span></router-link>
			</div>
	</main>
</template>
<script type="text/javascript">
	export default{
		
	}
</script>
<style >
	#gwc .mint-header{
		background-color: #fff;
		color: #9a9a9a;   
		border-bottom: 1px solid rgba(51,51,51,.15);
		padding-top: 6%;
		padding-bottom: 6%;
		font-size: 1.2rem;
	}
	#gwc .mintui-more:before{
		display: none;
	}
	#gwc .content{
		width: 100%;
		background-color: #f4f4f4;
		padding-bottom: 165%;
	}
	#gwc .content p{
		text-align: center;
		font-size: 0.9rem;
		color: #969696;
	}
	#gwc .content p:nth-of-type(1){
		padding-top: 18%;
	}
	#gwc .content a{
		display: block;
		text-align: center;
		color: #ffffff;
		margin-top: 30px;
		
	}
	#gwc .content a span{
		width: 100%;
		background-color: #ff6666;
		padding:6px 20px;
		border-radius: 5px;
	}
</style>
