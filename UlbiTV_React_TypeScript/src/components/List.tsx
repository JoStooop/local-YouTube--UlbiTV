import React, {FC} from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

// const List: FC<ListProps> = ({items, children}) => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default List;

export default function List<T>(props: ListProps<T>) {
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}
