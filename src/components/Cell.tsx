import { HTMLAttributes, useState, MutableRefObject } from 'react';
import cn from 'classnames';

type CellProps = HTMLAttributes<HTMLDivElement> & {
    brush: MutableRefObject<boolean>
}

export const Cell = ({ brush, ...rest }: CellProps) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div 
            className={cn('cell', { active })} 
            onClick={() => setActive(!active)}
            onMouseOver={() => {
                if(brush.current && !active) setActive(true)
            }}
            {...rest} 
        />
    )
};
