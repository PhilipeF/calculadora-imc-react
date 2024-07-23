import styles from './Perfil.module.css';

const Form = () => {
    return (
        <div className="container">
            <h1 className={styles.titulo}>Cálculo IMC</h1>
            <form>
                <div>
                    <label>Altura:</label>
                    <input type="number" placeholder="Entre com o valor da altura" />
                </div>
                <div>
                    <label>Peso:</label>
                    <input type="number" placeholder="Entre com o valor do peso" />
                </div>
            </form>
        </div>
    )
}

export default Form;