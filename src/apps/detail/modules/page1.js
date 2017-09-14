import { getApi } from '../api/page1';

export default {
    namespaced: true,
    state: {
        count: 2,
    },
    getters: {

    },
    mutations: {
        increment(state, payload) {
            // 变更状态
            state.count += payload.amount;
        },
    },
    actions: {
        async increment({ commit }, payload) {
            const { num } = payload;
            console.log(num);
            const amount = await getApi(num);
            console.log(amount);
            commit({
                type: 'increment',
                amount,
            });
        },
    },
};
