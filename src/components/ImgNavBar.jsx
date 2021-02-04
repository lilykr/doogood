import React from 'react';

function ImgNavBar({isActive, Image, ImageActive, alt}) {
    return (
        <div>
            {isActive  ?
                <img  width="30%" src={ImageActive} alt={alt} />
                : <img  width="30%" src={Image} alt={alt} />
            }
        </div>
    )

}

export default ImgNavBar;



