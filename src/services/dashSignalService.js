import axios from 'axios'


class DashSignal {
    async getData() {
        //                    ok                   ok                ok               ok                ok
        let dashSignal = {todosClientes : [],  inativosPagam : [], inativos: [], semResposta: [], falhasGuardian: [], ultimaAtualizacao: '', signalAtivo : false}

        
        const pVerificarSignalAtivo = axios.post('http://cri.cartsys.com.br/dashboardsignal.dev/api/verificarsignalativo', [
            {"Host":"35.173.159.93","Port":40081},
            {"Host":"35.173.159.93","Port":40083},
        ])
       
        const [verificarSignalAtivo] = await Promise.all([pVerificarSignalAtivo]);

        dashSignal.signalAtivo = verificarSignalAtivo ? verificarSignalAtivo.data : false;

        if (dashSignal.signalAtivo){    
            const pAtivosCns = axios.get('http://cri.cartsys.com.br/workflow/api/cliente/selecionarativoscns', {
                auth: {
                    username: '3C83483BC1171E8E96C12219DDE7EC634B551DCB',
                    password: '1ED0C3E253FD21D3447C117046BD29A5FCEDFC2D'
                }
            });

            const pAtivosPagaCns = axios.get('http://cri.cartsys.com.br/workflow/api/cliente/selecionarativospagacricns', {
                auth: {
                    username: '3C83483BC1171E8E96C12219DDE7EC634B551DCB',
                    password: '1ED0C3E253FD21D3447C117046BD29A5FCEDFC2D'
                }
            });

            const pAtivos = axios.get('http://cri.cartsys.com.br/monitor/api/conexao/selecionarativos', {
                auth: {
                    username: '3C83483BC1171E8E96C12219DDE7EC634B551DCB',
                    password: '287EFA6EFC66C98E9F937EAB3377A45409AEB8A5'
                }
            });

            var d = new Date();

            var dateString = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate() ;       
            
            dashSignal.ultimaAtualizacao = ("0" + (d.getDate())).slice(-2) + "/" +  ("0" + ((d.getMonth()+1))).slice(-2) + "/" + d.getFullYear() + " " +   ("0" + (d.getHours())).slice(-2) + ':' + ("0" + (d.getMinutes())).slice(-2);
            
            
            const pFalhasGuardian = axios.get(`http://cri.cartsys.com.br/monitor/api/logguardian/selecionarpordata/${dateString}`, {
                auth: {
                    username: '3C83483BC1171E8E96C12219DDE7EC634B551DCB',
                    password: '287EFA6EFC66C98E9F937EAB3377A45409AEB8A5'
                }
            });

            const pSemResposta = axios.get(`http://cri.cartsys.com.br/monitor/api/recebimento/selecionarsemdataresposta/${dateString}`, {
                auth: {
                    username: '3C83483BC1171E8E96C12219DDE7EC634B551DCB',
                    password: '287EFA6EFC66C98E9F937EAB3377A45409AEB8A5'
                }
            });

            //const [res2, AtivosPagaCns, AtivosCns] = await Promise.all([t, pAtivosPagaCns, pAtivosCns]);
            const [ativosCns, ativosPagaCns, ativos, falhasGuardian, semResposta] = await Promise.all([pAtivosCns, pAtivosPagaCns, pAtivos, pFalhasGuardian, pSemResposta]);                         

            ativosPagaCns.data.forEach(element => {            
                if (ativos.data.filter(value => value === element.Cns).length === 0){
                    dashSignal.inativosPagam.push({Nome : element.Nome, Cidade : element.Cidade, Uf : element.Uf})
                }
            });

            ativosCns.data.forEach(element => {                        
                if (ativos.data.filter(value => value === element.Cns).length === 0){              
                    dashSignal.inativos.push({Nome : element.Nome, Cidade : element.Cidade, Uf : element.Uf})                
                }
            });

            //dashSignal.todosClientes = Array.from(new Set(ativosCns.data.concat(ativosPagaCns)));  

            ativosCns.data.forEach(element => {
                dashSignal.todosClientes.push(element);
            })

            ativosPagaCns.data.forEach(element => {            
                dashSignal.todosClientes.push(element)
            })

            falhasGuardian.data.forEach(element => {
                var cliente = dashSignal.todosClientes.filter(value => value.Cns === element)[0];
                if (cliente  !== undefined){              
                    dashSignal.falhasGuardian.push({Nome : cliente.Nome, Cidade : cliente.Cidade, Uf : cliente.Uf})                
                }
                else {
                    dashSignal.falhasGuardian.push({Nome : element, Cidade : '', Uf : ''})                
                }
            });

            semResposta.data.forEach(element => {
                var cliente = dashSignal.todosClientes.filter(value => value.Cns === element.toUpperCase())[0];
                if (cliente  !== undefined){              
                    dashSignal.semResposta.push({Nome : cliente.Nome, Cidade : cliente.Cidade, Uf : cliente.Uf})                
                }
                else {
                    dashSignal.semResposta.push({Nome : element, Cidade : '', Uf : ''})                
                }
            });
        }

        return dashSignal;

    }
}



export default DashSignal;
