import React, {FC} from 'react';
import iconSprite from 'src/assets/images/sprite.svg'

type IconType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon:FC<IconType> = ({iconId, width,height, viewBox}) => {
    return (
        <svg width={width || '16'} height={height || '16'} viewBox={viewBox || '0 0 16 16'}  fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${iconId}`}/>

        </svg>
    );
};

