export default function ({ $axios, redirect }) {

    $axios.onRequest(config => {
        config.headers['Authorization'] = store.getters['auth/getToken']
    })

    $axios.onResponse(({ data }) => {
        const code = data.statusCode
        if (code === 401) {
          store.dispatch('auth/setToken')
        } 
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
    })
}

