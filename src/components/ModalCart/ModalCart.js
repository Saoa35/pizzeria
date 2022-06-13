import React from 'react';
import Portal from '../Portal/Portal';

const ModalCart = () => {

    return(
        <Portal>
            <div class='modal modal-cart'>
                <div class='modal-dialog'>
                    <div class='modal-header'>
                        <h3 class='modal-title'>Корзина</h3>
                        <button id='modal-cart-close-btn' class='close'>&times;</button>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default ModalCart;