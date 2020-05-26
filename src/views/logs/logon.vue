<template>
<div>
  <div class="login" v-bind:title="message">登录日志</div>

  <div>
    <p v-for="item in items" :key='item.id'>{{item.message}}</p>
    <button @click="btnClick()">点击</button>
    <button @click="deleteClick()">删除</button>
  </div>
</div>
  
</template>
<script>
export default {
  data(){
    return{  
      message:"",
      items:[
        {message:'test one',id:'1'},
        {message:'test two',id:'2'},
        {message:'test three',id:'3'},
      ]
    }
  },
  mounted(){
    // const promise = new Promise((resolve,reject)=>{
    //   console.log(1)
    //   resolve()
    //   console.log(2)
    // })
    // promise.then(() => {
    //   console.log(3)
    // })
    // console.log(4)
    
  //   this.listArray()
  //  console.log([..."CONGZHI"],'uhi')

  // const promise = new Promise((resolve, reject) => {
  //   resolve('success1')
  //   reject('error')
  //   resolve('success2')
  //   })
  //   promise
  //   .then((res) => {
  //     console.log('res',res)
  //   console.log('then: ', res)
  //   })
  //   .catch((err) => {
  //   console.log('catch: ', err)
  //   })

  // 作用域   子作用域可以拿父作用域 父作用域不能拿子作用域
  // 提升 所有使用var声明的变量会提升到作用域
  // 函数也有提升 是整个提升
  // 赋值式创建函数 先声明
    // function fn(){
    //   var a =8
    //   console.log(a)
    //   function fun (){
    //     var b=10
    //     console.log(b)
    //   }
    //   return fun
    // }
    // fn()()

    // 递归 是循环函数
    // function fn(n){
    //   if(n == 1){
    //     return 1;
    //   }else{
    //     return n * fn(n-1);
    //   }
    // }
    // var f = fn(5)
    // console.log(f)

  this.reArr()
  },
  methods:{
    btnClick(){
      this.items.push({message:'nvfjnsjf'})
    },
    deleteClick(){
      this.items.splice(0,1)
    },
   reArr(){
     this.message = 'hhah' + new Date().toLocaleDateString()
    // let arr = new Array()
    // arr = "1534236469"
    // console.log(arr.toString().split('').reverse())
    }
}
}
</script>
<style lang="stylus" scoped>
.login
  cursor pointer

</style>
