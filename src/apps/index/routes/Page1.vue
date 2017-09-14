<template>
    <div>
        <common-header></common-header>
        <div>{{msg}}</div>
        <router-link to="/page2">Go to page</router-link><br/>
        <a href="detail.html">Go to detail</a>
        <common-footer></common-footer>
        <div>{{count}}</div>
        <button @click="increment({num:10})" >点击</button>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import CommonHeader from '../../../components/CommonHeader';
    import CommonFooter from '../../../components/CommonFooter';

    export default {
        data() {
            return {
                msg: 'page1',
            };
        },
        components: {
            CommonHeader,
            CommonFooter,
        },
        computed: {
            ...mapState('page1', {
                count: state => state.count,
            }),
        },
        methods: {
            ...mapActions('page1', [
                'increment',
            ]),
        },
        mounted() {
            console.log(this);
        },
    };
</script>