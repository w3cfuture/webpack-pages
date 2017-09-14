<template>
    <div class="header"><p>{{msg}}</p></div>
</template>

<script>
    import './index.scss';

    export default {
        data() {
            return {
                msg: '头部',
            };
        },
    };
</script>