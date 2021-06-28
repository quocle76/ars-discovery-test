export default function ({ $axios, redirect, store }) {

    $axios.onRequest(config => {
        const token = store.getters['user/getToken'];
        if (token) {
            config.headers['token'] = `${store.getters['user/getToken']}`;
        }
    })

    $axios.onResponse(({ data }) => {
        const code = data.statusCode
        if (code === 401) {
          store.dispatch('user/setToken')
        } 
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            // redirect('/400')
        }
    })

    $axios.interceptors.response.use((response) => {
        return response;
    }, function (error) {
        return Promise.reject(error.response);
    });
}

