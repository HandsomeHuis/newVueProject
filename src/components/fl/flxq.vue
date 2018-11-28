<template>
	<h1>这是{{product}}</h1>
</template>
<script>
	export default{
		data(){
			return{
				product:''
			}
		},
		mounted(){
			if(this.$route.params.id){
				this.product=this.$route.params.id+this.$route.params.title;
				localStorage.setItem("id",this.$route.params.id)
				localStorage.setItem("title",this.$route.params.title)
			}
			else{
				this.product=localStorage.getItem("id")+localStorage.getItem("title")
			}
			
		}
	}
</script>

<style>
	
</style>