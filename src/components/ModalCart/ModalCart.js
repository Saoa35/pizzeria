import React from 'react';
import Portal from '../Portal/Portal';

const ModalCart = ({ onClose }) => {

    return(
        <Portal>
            <div className='modal modal-cart' onClick={onClose}></div>
            <div className='modal-dialog'>
                    <div className='modal-header'>
                        <h3 className='modal-title'>Корзина</h3>
                        <button onClick={onClose} className='close'>&times;</button>
                    </div>
                    <div className='modal-body'>
                        <div className='food-row'>
                            <span className='food-name'>Ролл Угорь стандарт</span>
                            <strong className='food-price'>250$</strong>
                            <div className='food-counter'>
                                <button className='counter-button'>-</button>
                                <span className='counter'>1</span>
                                <button className='counter-button'>+</button>
                            </div>
                        </div>
                        <div className='food-row'>
                            <span className='food-name'>Ролл Угорь стандарт</span>
                            <strong className='food-price'>250$</strong>
                            <div className='food-counter'>
                                <button className='counter-button'>-</button>
                                <span className='counter'>1</span>
                                <button className='counter-button'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <span className='modal-pricetag'>1250$</span>
                        <div className='footer-buttons'>
                            <button className='button button-primary'>Оформить заказ</button>
                            <button className='button clear-cart'>Отмена</button>
                        </div>
                    </div>
                </div>
        </Portal>
    )
}

export default ModalCart;