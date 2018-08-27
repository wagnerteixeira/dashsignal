/*let dashSignal = {existem = [], inativosPagam : [], inativos: [], semResposta: [], falhasGuardian: []}




export default dashSignal;*/

import axios from 'axios'

export default (t) => {
    //console.log(t)
    //console.log(t.state);
   // console.log(t.setState);
    //t.setState({ ...t.state, inativosPagam : [ {teste : 'ttttsssssssss'}] });
   // console.log(t.state)
    /*state.inativosPagam.push({teste : 'testesss'})
    if (state.existem.length > 0){
        console.log("preenchido")
    }*
    
    return {state}*/
    axios.get('http://cri.cartsys.com.br/workflow/api/cliente/selecionarativoscns', {
        auth: {
            username: '3C83483BC1171E8E96C12219DDE7EC634B551DCB',
            password: '1ED0C3E253FD21D3447C117046BD29A5FCEDFC2D'
        }
    }).then((res) => {            
        t.setState({ ...t.state, existem : res.data });
    }).catch((e) => {
        console.log(e)
        t.setState({ ...t.state, existem : [ ] });
    });
}