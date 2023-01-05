import React from 'react';

const MyModal = (props) => {
    const {children, visible, setVisible} = props

    let rootClasses = "my_modal" + " "
    if (visible) {
        rootClasses += 'active'
    }

    return (
        <div className={rootClasses} onClick={() => setVisible(false)}>
            <div className='my_modal__content' onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
