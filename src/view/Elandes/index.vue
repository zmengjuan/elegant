<template>
  <div>
      <button :class= "[ c ?'color':'colors']" @click="onclick()">{{codeText}}</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      codeText:'点击',
      c:true,
    }
  },
  methods: {
    onclick(){
      this.c = !this.c
      if(this.c == true){
        this.codeText='点击'
      }else if(this.c == false){
        this.codeText='登录'
      }
    },
  },
}
</script>

<style>
.color{
  width:300px;
  height:40px;
  background-color:pink;
}
.colors{
   width:300px;
  height:40px;
  background-color:blue;
}
</style>