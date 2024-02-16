import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
     <footer className={styles.footer}>
        <h3 className={styles.contact_list}>Call center</h3>
        <p className={styles.contact_list}>Phone: (11)984425157</p>
        <p className={styles.contact_list}>Email: cost_cotc@hotmail.com</p>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook/>
            </li>
            <li>
                <FaInstagram/>
            </li>
            <li>
                <FaLinkedin/>
            </li>
        </ul>
        <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2021
        </p>
     </footer>
    )
}

export default Footer