import React from 'react';

const SomeComponent = React.memo(({increment}) => {
    console.log('SomeComponent')

    return (
        <div>
            {/*{list.map(item => <div key={item}>{item}</div>)}*/}
            <button onClick={increment}>CLICK</button>
        </div>
    );
});

export {SomeComponent};
