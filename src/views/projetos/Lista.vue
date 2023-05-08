<template>
  <section>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <router-link :to="`/projetos/${projeto.id}`" class="button">
            <span class="icon is-small">
              <i class="fas fa-pencil-alt"></i>
            </span>
          </router-link>
          <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
            <span class="icon is-small">
              <i class="fas fa-trash"></i>
            </span>
          </button>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { OBTER_PROJETOS } from "@/store/tipo-acoes";
import { REMOVER_PROJETOS } from "@/store/tipo-acoes";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ListaProjetos",
  methods: {
    excluir(id: string) {
      this.store.dispatch(REMOVER_PROJETOS, id);
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(OBTER_PROJETOS);
    return {
      projetos: computed(() => store.state.projetos),
      store,
    };
  },
});
</script>
