<template>
    <div class="footer"><p>{{msg}}</p><img src="../../images/P_000.jpg"><span>5555</span></div>
</template>

<script>
    import './index.scss';
    
    export default {
        data() {
            return {
                msg: '底部',
            };
        },
    };
</script>
<style>
    span{
        color:#f0f;
    }
</style>