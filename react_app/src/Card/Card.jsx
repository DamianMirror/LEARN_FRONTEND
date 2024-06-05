import PizzaImg from '../assets/Pizza.jpg';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import classNames from 'classnames';


function Card(props){


    return(
        <div className={styles.card}>
            <img src={props.image} alt="pictue"></img>
            <div className={styles.card__info}>
                <h3 className={styles.pizzaName}>{props.name}</h3>
                <p className={styles.pizzaInfo}>{props.info}</p>
            </div>
            <div className={styles.sizes}>
                <div className={styles.buttonGroup}>
                    <button className={styles.button}>Маленька</button>
                    <button className={styles.button}>Середня</button>
                    <button className={styles.button}>Велика</button>
                </div>
                <button className={classNames(styles.button, styles.buttonBig)}>Найбільша</button>
            </div>
            
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
}


export default Card;