export const setores = [];

export function cadastrar(setor) {
    setores.push(setor);
}

export function listar() {
    return setores;
}

export function buscarPorIndice(indice) {
    return setores[indice];
}

export function atualizar(indice, setor) {
    setores[indice] = setor;
}

export function excluir(indice) {
    setores.splice(indice, 1);
}