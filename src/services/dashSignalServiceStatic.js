import ativosCns from './ativosCns';
import ativosPagaCns from './ativosPagaCns';
import ativos from './ativos';
import falhasGuardian from './falhasGuardian';
import semResposta from './semResposta';

class DashSignal {
    async getData() {
        let dashSignal = { todosClientes: [], inativosPagam: [], inativos: [], semResposta: [], falhasGuardian: [] }

        ativosPagaCns.data.forEach(element => {
            if (ativos.data.filter(value => value === element.Cns).length === 0) {
                dashSignal.inativosPagam.push({ Nome: element.Nome, Cidade: element.Cidade, Uf: element.Uf })
            }
        });

        ativosCns.data.forEach(element => {
            if (ativos.data.filter(value => value === element.Cns).length === 0) {
                dashSignal.inativos.push({ Nome: element.Nome, Cidade: element.Cidade, Uf: element.Uf })
            }
        });

        dashSignal.todosClientes = Array.from(new Set(ativosCns.data.concat(ativosPagaCns)));

        falhasGuardian.data.forEach(element => {
            var cliente = dashSignal.todosClientes.filter(value => value.Cns === element)[0];
            if (cliente !== undefined) {
                dashSignal.falhasGuardian.push({ Nome: cliente.Nome, Cidade: cliente.Cidade, Uf: cliente.Uf })
            }
            else {
                dashSignal.falhasGuardian.push({ Nome: element, Cidade: '', Uf: '' })
            }
        });

        semResposta.data.forEach(element => {
            var cliente = dashSignal.todosClientes.filter(value => value.Cns === element.toUpperCase())[0];
            if (cliente !== undefined) {
                dashSignal.semResposta.push({ Nome: cliente.Nome, Cidade: cliente.Cidade, Uf: cliente.Uf })
            }
            else {
                dashSignal.semResposta.push({ Nome: element, Cidade: '', Uf: '' })
            }
        });

        return dashSignal;
    }
}

export default DashSignal;
