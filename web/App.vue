<template>
    <div id="app">
        <main-header></main-header>
        <div class="body-content">
            内容区域
            <router-view></router-view>
        </div>
    </div>
</template>
<style>
    body{
        background-color:#f5f5f5;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
