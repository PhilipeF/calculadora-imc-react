import { useState } from 'react';
import styles from './Perfil.module.css';
import ReactInputMask from 'react-input-mask-next';

const Form = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [descricao, setDescricao] = useState('')

    const calcularImc = (e) => {
        e.preventDefault();

        if (!peso || !altura) {
            alert('Por favor, insira valores validos para peso e altura');
            return
        }

        const alturaNumero = parseFloat(altura.replace(',', '.'));
        const pesoNumero = parseFloat(peso);

        const imc = pesoNumero / (alturaNumero ** 2)
        setResultado(imc.toFixed(2))

        if (imc < 18.5) {
            setDescricao('Peso abaixo do normal');
        } else if (imc >= 18.5 && imc <= 24.9) {
            setDescricao('Peso considerado na faixa saudável');
        } else if (imc >= 25 && imc <= 29.9) {
            setDescricao('Peso na faixa sobre peso');
        } else if (imc >= 30 && imc <= 39.9) {
            setDescricao('Peso na faixa da obesidade');
        } else {
            setDescricao('Peso na faixa da obesidade grau 3');
        }
    }

    return (
        <div className="container">
            <h1 className={styles.titulo}>Cálculadora IMC</h1>
            <form
                onSubmit={calcularImc}
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
                        type="text"
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