import { getApi } from '../api/pages';

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
            commit({
                type: 'increment',
                amount,
            });
        },
    },
};
