import axios from 'axios'

const url = 'http://cri.cartsys.com.br/dashboardsignal.dev/api'

export const doVerificaSignalAtivo = () => axios.post(`${url}/verificarsignalativo`, [
    {"Host":"cri.cartsys.com.br","Port":40081},
    {"Host":"cri.cartsys.com.br","Port":40083},
])

export const doGetNaoConectadosGeral = () => axios.get(`${url}/naoconectadosgeral`)

export const doGetNaoConectadosPagos = () => axios.get(`${url}/naoconectadospagos`)

export const doGetFalhasGuardian = (data) => axios.get(`${url}/falhasguardian/${data}`)

export const doGetFalhasRetorno = (data) => axios.get(`${url}/falhasretorno/${data}`)
