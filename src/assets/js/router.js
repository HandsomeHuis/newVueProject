import vueRouter from 'vue-router'
import index from '../../components/enter/index.vue'
import fl from '../../components/enter/fl.vue'
import shopcar from '../../components/enter/shopcar.vue'
import mine from '../../components/enter/mine.vue'
import login from '../../components/login.vue'
import ngfl from '../../components/zycom/ngfl.vue'
import sdqq from '../../components/zycom/sdqq.vue'
import cqsx from '../../components/zycom/cqsx.vue'
import hwtm from '../../components/zycom/hwtm.vue'		
import route02xstm from '../../components/zycom/route02-xstm.vue'
import rfi from '../../components/zycom/rfi.vue'
import reginster from '../../components/reginster.vue'
import flxq from "../../components/fl/flxq.vue"
import mallDetails from '../../components/zycom/mallDetails.vue'
export default new vueRouter({
	routes:[
		{
			path:'/index',
			component:index
		},{
			path:'/fl',
			component:fl
		},
		{
			path:`/shopcar`,
			component:shopcar
		},{
			path:`/login`,
			component:login
		},{
			path:`/hwtm`,
			component:hwtm
		},{
			path:`/cqsx`,
			component:cqsx
		},{
			path:`/ngfl`,
			component:ngfl
		},{
			path:`/sdqq`,
			component:sdqq
		},{
			path:`/route02xstm`,
			component:route02xstm
		},{
			path:`/rfi`,
			component:rfi
		},{
			path:`/reginster`,
			component:reginster
		},{
			path:`/flxq`,
			component:flxq,
			name:"gg"
		},
		{
			path:`/mallDetails`,
			name:"aa",
			component:mallDetails,
		},
		{
			path:`/`,
			redirect:"/index"
		}


	]
})
