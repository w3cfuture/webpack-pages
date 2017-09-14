export async function getApi(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    });
}
