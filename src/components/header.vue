<template>
    <div>
        <nav class="nav">
            <div class="logo"><img src="../assets/logo.png" alt="logo"></div>
            <div class="title">For&nbsp;wedding</div>
            <ul ref="index" @mouseout="hidNav" @mouseover="showNav">
                <li @mouseover="showNav" >首页</li>
                <li>策划</li>
                <li>图片</li>
                <li>视频</li>
                <li>购买</li>
                <li>关于我们</li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        methods:{
            showNav(){
                this.$refs.index.style.visibility="visible";
            },
            hidNav(){
                this.$refs.index.style.visibility="hidden";
            }
        }
    }
</script>