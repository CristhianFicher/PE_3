import NameHeader from "./name_header/NameHeader.module"
import LogoHeader from "./logo_header/LogoHeader.module"
import styles from './Header.module.css'
import foto from '../../images/Foto-fundo-teste.jpeg'

function Header(){
    return <header className={styles.mainHeader}>
    <div className={styles.topRow}>
                <LogoHeader />
                <NameHeader />
            </div>
    <img src={foto} alt="Foto com várias pessoas" className={styles.foto}/>
    </header>
}

export default Header