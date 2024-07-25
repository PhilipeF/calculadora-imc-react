import { useState } from 'react';
import styles from './Perfil.module.css';
import ReactInputMask from 'react-input-mask';

import calcularImc from '../../utils/imcUtils';

const Form = () => {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [descricao, setDescricao] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const { imc, descricao } = calcularImc(peso, altura)
            setResultado(imc)
            setDescricao(descricao)
        } 
        catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="container">
            <h1 className={styles.titulo}>Calculadora IMC</h1>
            <form
                onSubmit={handleSubmit}
                className={styles.form}
            >
                <div>
                    <label>Peso: </label>
                    <input
                        type="number"
                        placeholder="Ex: 70"
                        onChange={(e) => setPeso(e.target.value)}
                        value={peso}
                    />
                </div>
                <div>
                    <label>Altura:</label>
                    <ReactInputMask
                        mask="9.99"
                        placeholder="Ex: 1.75"
                        onChange={(e) => setAltura(e.target.value)}
                        value={altura}
                    />
                </div>
                <button type='submit'>Calcular</button>
                {resultado && (
                    <div>
                        <span>IMC: {resultado}</span><br /><br />
                        <span> {descricao} </span>
                    </div>
                )}
            </form>
            <ul>
                <li>Menores que 18 — Peso abaixo do normal</li>
                <li>Entre 18,5 e 24,9 — Peso considerado na faixa saudável</li>
                <li>Entre 25 e 29,9 — Peso na faixa sobre peso </li>
                <li>Entre 30 e 39,9 — Peso na faixa da obesidade</li>
                <li>Maiores que 40 — Sobrepeso obesidade grau II</li>
            </ul>
        </div>
    )
}

export default Form;