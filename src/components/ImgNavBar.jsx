import React, { useState } from 'react';

function ImgNavBar({isActive, onClick, Image, ImageActive, alt}) {

    return (
        <div>
            {isActive ?
                <img onClick={onClick} width="30%" src={ImageActive} alt={alt} />
                : <img onClick={onClick} width="30%" src={Image} alt={alt} />
            }
        </div>
    )

}

export default ImgNavBar;

