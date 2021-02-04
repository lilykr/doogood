import React from 'react';

function ImgNavBar({isActive, onClick, Image, ImageActive, alt, url}) {

    return (
        <div>
            {isActive ?
                <img onClick={() => onClick(url)} width="30%" src={ImageActive} alt={alt} />
                : <img onClick={() => onClick(url)} width="30%" src={Image} alt={alt} />
            }
        </div>
    )

}

export default ImgNavBar;

