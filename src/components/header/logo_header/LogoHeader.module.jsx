import styles from './LogoHeader.module.css'
import logo from '../../../images/Logo.jpeg'

// Eu acredito ser melhor editar o arquivo Logo que enviaram para criar um somente com a parte de imagem, sem texto. Cortar em círculo.

function LogoHeader(){
    return <img src={logo} alt="Logo" className={styles.logoHeader} />
}

export default LogoHeader