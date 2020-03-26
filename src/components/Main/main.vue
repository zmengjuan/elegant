<template>
        <div class="Layout">
    <div>
        <HomeSider class="HomeSider" hide-trigger></HomeSider>
        <div>
            <HomeHeader class="HomeHeader"></HomeHeader>
            <HomeContent class="HomeContent"></HomeContent>
        </div>
    </div>
        </div>
</template>

<script>
import HomeHeader from '../layout/header_top'
import HomeSider from '../layout/body_asider'
import HomeContent from '../layout/body_content'
export default {
    components: {
        HomeHeader,
        HomeSider,
        HomeContent
    }
}
</script>

<style>
    .Layout{
        margin:0;
        width:100%;
        height:100%;
    }
    .HomeSider{
        width:13%;
        position: fixed;
        top:0;
        left:0;
        bottom:0;
        height:100%;
        background: #000;
    }
    .HomeHeader{
        position:fixed;
        top:0;
        height:15%;
        left:13%;
        right:0;
    }
    .HomeContent{
        position:fixed;
        top:15%;
        left:13%;
        right:0;
        bottom:0;
        overflow: auto;
    }
</style>