import React, {ReactChild, useState} from 'react';

// interface CardProps {
//     width?: string; // ? - ставится если мы хотим сделать их необязательными
//     height: string;
//     children?: React.ReactChild | React.ReactNode
// }
//
// const Card = ({width, height, children}: CardProps) => {
//     return (
//         <div style={{width, height, border: '2px solid gray'}}>
//             {children}
//         </div>
//     );
// };
//
// export default Card;


export enum CardVariant {
    outlined = "outlined",
    primary = "primary",
}

interface CardProps {
    width?: string; // ? - ставится если мы хотим сделать их необязательными
    height: string;
    variant: CardVariant;
    onClick: (num: number) => void;
    children?: React.ReactChild | React.ReactNode;
}

const Card: React.FC<CardProps> =
    ({
         width,
         height,
         variant,
         onClick,
         children,
     }) => {

        const [state, setState] = useState(0)

        return (
            <div style={{
                width, height,
                border: variant === CardVariant.outlined ? '2px solid gray' : 'none',
                background: variant === CardVariant.primary ? "lightgray" : '',
            }}
                 onClick={() => onClick(state)}>
                {children}
            </div>
        );
    };

export default Card;
