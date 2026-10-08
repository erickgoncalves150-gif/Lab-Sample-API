import express from 'express';
import { 
    cadastrarAmostra, 
    listarAmostras, 
    buscarAmostra, 
    atualizarAmostra,
    excluirAmostra
} from '../controller/amostraController.js';

const router = express.Router();

router.post('/', cadastrarAmostra);
router.get('/', listarAmostras);
router.get('/:indice', buscarAmostra);
router.patch('/:indice', atualizarAmostra);
router.delete('/:indice', excluirAmostra);

export default router;