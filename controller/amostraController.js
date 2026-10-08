import { Amostra } from '../model/Amostra.js';
import * as repository from '../repository/amostraRepository.js';

export function cadastrarAmostra(req, res) {
    const { codigo, material, origem, resultado } = req.body;
    
    const novaAmostra = new Amostra(codigo, material, origem, resultado);
    
    repository.cadastrar(novaAmostra);
    res.status(201).json({ mensagem: 'Amostra cadastrada com sucesso!', dados: novaAmostra });
}

export function listarAmostras(req, res) {
    const amostras = repository.listar();
    res.status(200).json(amostras);
}

export function buscarAmostra(req, res) {
    const { indice } = req.params;
    const amostra = repository.buscarPorIndice(Number(indice));
    
    if (!amostra) {
        return res.status(404).json({ erro: 'Amostra não encontrada.' });
    }
    
    res.status(200).json(amostra);
}

export function excluirAmostra(req, res) {
    const { indice } = req.params;
    const amostraExists = repository.buscarPorIndice(Number(indice));
    
    if (!amostraExists) {
        return res.status(404).json({ erro: 'Amostra não encontrada para exclusão.' });
    }
    
    repository.excluir(Number(indice));
    res.status(200).json({ mensagem: 'Amostra excluída com sucesso!' });
}
