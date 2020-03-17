<template>
<div class="contenter">
   <div class="body_Total">
        <Header class="el_header_sold"></Header>
        <Asider class="el_asider_texture"></Asider>
    </div>
</div>
</template>

<script>
import Header from '../layout/header_top'
import Asider from '../layout/body_asider'
export default {
    name:'Layout',
    components: {
        Header,
        Asider
    }
}
</script>

<style>
.contenter{
    margin:0;
    padding:0;
}
.body_Total{
    width:100%;
    height:100%;
}
    .el_header_sold{
        height:100%;
        background: #aaa;
        width:80%;
    }
    .el_asider_texture{
        width:20%;
        height:100%;
        background: #666;
    }
</style>