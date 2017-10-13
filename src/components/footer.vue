<template>
    <div>
        <div class="footer">
            <sociality class="center"></sociality>
            <span>Copyright &copy; 2017 For Wedding All reserved</span>
        </div>
    </div>
</template>

<script>
    import Sociality from '../components/sociality'
    export default{
        components:{
            Sociality
        }
    }
</script>

<style scoped>
    .footer{
        line-height: 10rem;
        position: relative;
    }
    .footer>.center{
        width: 12rem;
        height: 100%;
        display: inline-block; 
        vertical-align: middle;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    .footer>span{
        vertical-align: middle;
        font-size: 1.2rem;
        font-weight: 200;
        float: right;
    }
</style>