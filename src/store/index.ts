import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { NOTIFICAR } from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";
import { EstadoDoProjeto, projeto } from "./modulos/projeto";
import { EstadoTarefa, tarefa } from "./modulos/projeto/tarefas";
export interface Estado {
  projeto: EstadoDoProjeto;
  notificacoes: INotificacao[];
  tarefa: EstadoTarefa;
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    tarefa: {
      tarefas: [],
    },
    projeto: {
      projetos: [],
    },
    notificacoes: [],
  },
  mutations: {
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id != novaNotificacao.id
        );
      }, 3000);
    },
    /* eslint-disable */
  },

  modules: {
    projeto,
    tarefa,
  },
});

function newFunction(novaNotificacao: INotificacao) {
  novaNotificacao.id = new Date().getTime();
}

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
function newDate() {
  throw new Error("Function not implemented.");
}
