import React from 'react';

function ImgNavBar({isActive, onClick, Image, ImageActive, alt}) {
    return (
        <div>
            {isActive === alt ?
                <img onClick={() => onClick(alt)} width="30%" src={ImageActive} alt={alt} />
                : <img onClick={() => onClick(alt)} width="30%" src={Image} alt={alt} />
            }
        </div>
    )

}

export default ImgNavBar;

