import { Setor } from '../model/Setor.js';
import * as repository from '../repository/setorRepository.js';

export function cadastrarSetor(req, res) {
    const { nome, sigla, responsavel, ramal } = req.body;

    const novoSetor = new Setor(nome, sigla, responsavel, ramal);
    
    repository.cadastrar(novoSetor);
    res.status(201).json(novoSetor);
}

export function listarSetores(req, res) {
    const setores = repository.listar();
    res.status(200).json(setores);
}

export function buscarSetor(req, res) {
    const { indice } = req.params;
    const setor = repository.buscarPorIndice(Number(indice));
    
    if (!setor) {
        return res.status(404).json({ erro: 'Setor não encontrado.' });
    }
    
    res.status(200).json(setor);
}

export function atualizarSetor(req, res) {
    const { indice } = req.params;
    const setor = repository.buscarPorIndice(Number(indice));

    if (!setor) {
        return res.status(404).json({ erro: 'Setor não encontrado.' });
    }

    Object.assign(setor, req.body);
    res.status(200).json(setor);
}

export function excluirSetor(req, res) {
    const { indice } = req.params;
    const setorExists = repository.buscarPorIndice(Number(indice));
    
    if (!setorExists) {
        return res.status(404).json({ erro: 'Setor não encontrado para exclusão.' });
    }
    
    repository.excluir(Number(indice));
    res.status(200).json({ mensagem: 'Setor excluído com sucesso!' });
}