<template>
  <div class="asider_body">
    <div class="Internet">网络服务平台</div>
      <ul class="asider_ul">
          <!-- <li v-for="(items, index) in routes" :index='items.name' :key="index">
            <h2>{{items.meta.name}}</h2>
            <ul class="list">
              <li v-for="item in listArr" :key="item.id" :value="item.id">{{item.name}}</li>
            </ul>
          </li> -->
      </ul>
  </div>
</template>

<script>
import routes from '../../router/index.js'
export default {
  data(){
    return {
      // Routers: routes,
      listArr:[
        {id:1,name:'a2'},
        {id:2,name:'a3'},
        {id:3,name:'a4'},
        {id:4,name:'a5'},
      ]
    }
  },
    methods:{
      // var add  = function (n1:number, n2:number) => {
          // return n1 + n2
      // },
      // console.log(add(1,2))

      // function add(n1:number , n2:number): number {
      //   return n1 + n2
      // }
      // console.log(add(1,2))

//       var add = function(n1: number, n2:number): number {
            // return n1 + n2
// }
//   console.log(add(1,2))
// 
// 

      arr(){
        // let arr:bumber = [1,2,3]
        // let arr:Array<number> = [1,2,3]
        // let aa:Boolean = true

        // let arr: [string,number] = ['bb',18]

      console.log(routes,'routes')
      }
    },
    mounted(){
      this.arr()
    },

}
</script>

<style>
.asider_body{
  width:13%;
  height:100%;
}
.Internet{
  height:62px;
  background: #052648;
  color:#fff;
  font-weight:500;
  font-size:24px;
  text-align:center;
  line-height:62px;
}
.asider_ul h2{
  background: #000;
  /* background: #515a6e; */
  color:#fff;
  height:40px;
}
.asider_ul h2:hover{
  background: #515a6e;
}
.list li{
  background: #000;
  height:40px;
  color:#fff;
  line-height:40px;
}
.list li:hover{
  background: #515a6e;
}
</style>