<template>
    <div>
        <common-header></common-header>
        <div>{{msg}}</div>
        <button @click='test'>去page1页面</button>
        <common-footer></common-footer>
    </div>
</template>

<script>
    import router from '../router';
    import CommonHeader from '../../../components/CommonHeader';
    import CommonFooter from '../../../components/CommonFooter';

    export default {
        data() {
            return {
                msg: 'page2'
            };
        },
        components: {
            CommonHeader,
            CommonFooter,
        },
        methods: {
            test() {
                router.push({ name: '/', params: { userId: 123 } });
            }
        },
    };
</script>