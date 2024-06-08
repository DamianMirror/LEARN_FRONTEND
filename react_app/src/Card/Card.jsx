import PizzaImg from '../assets/Pizza.jpg';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import classNames from 'classnames';
import React, {useState} from 'react';


function Card(props){

    const [pressClass, setPressClass] = useState("wayBig");

    const updatePressClass = (buttonName) => {
        setPressClass(buttonName);
    }

    return(
        <div className={styles.card}>
            <img src={props.image} alt="pictue"></img>
            <div className={styles.card__info}>
                <h3 className={styles.pizzaName}>{props.name}</h3>
                <p className={styles.pizzaInfo}>{props.info}</p>
            </div>
            <div className={styles.sizes}>
                <div className={styles.buttonGroup}>
                    <button className={classNames(styles.button, {[styles.active]: pressClass === 'small'})}
                    onClick={() => updatePressClass('small')}>Маленька</button>
                    <button className={classNames(styles.button, {[styles.active]: pressClass === 'medium'})}
                    onClick={() => updatePressClass('medium')}>Середня</button>
                    <button className={classNames(styles.button, {[styles.active]: pressClass === 'big'})}
                    onClick={() => updatePressClass('big')}>Велика</button>
                </div>
                <button className={classNames(styles.button, styles.buttonBig,{[styles.active]: pressClass === 'wayBig'})}
                onClick={() => updatePressClass('wayBig')}>Найбільша</button>
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