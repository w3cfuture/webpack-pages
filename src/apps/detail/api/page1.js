// import { get, post } from '../../../utils/fecth';

export async function getApi(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    });
    // return get('http://localhost:3000?a=6');
    // return post('http://localhost:3000', {
    //     data: {
    //         a: 6,
    //     }
    // });
}
