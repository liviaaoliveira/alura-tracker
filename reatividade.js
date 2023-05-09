const projeto = {
  id: 1,
  descricao: "Alura Tracker",
};

const proxy = new Proxy(projeto, {
  get(objetoOriginal, chave, receptor) {
    console.log(`Alguem pediu a chave ${chave} do projeto`);
    return Reflect.get(objetoOriginal, chave, receptor);
  },
  set(objetoOriginal, chave, valor) {
    console.log(
      `Alguem alterou a chave ${chave} do projeto para o valor ${valor}`
    );
    objetoOriginal[chave] = valor;
  },
});
proxy.descricao = "Reatividade e mega bacana";

console.log(proxy.descricao);
