# useClassnames

## How install?

```
    npm i @maxigarcia/useclassnames

    # or

    yarn add @maxigarcia/useclassnames
```

## How to use it?

```
import { useState } from 'react';
import useClassnames from '@maxigarcia/useclassnames';
import Checkbox from '../Checkbox';

const ClassNamesHook = () => {
    const [color, setColor] = useState('red');
    const handleSetColor = (ev) => setColor(ev.target.value);

    const classNames = useClassnames(
        {
            classNames: 'awasome-class-name',
            objectClassNames: {
                [color]: color,
            },
        },
        [color]
    );

    return (
        <div className={classNames}>
            <h1 className='title'>Use class names it is cool.</h1>
            <div className='form'>
                <span>Change my class name</span>
                <Checkbox label='Red' value='red' checked={color === 'red'} onChange={handleSetColor} />
                <Checkbox label='Blue' value='blue' checked={color === 'blue'} onChange={handleSetColor} />
            </div>
        </div>
    );
};

export default ClassNamesHook;
```

## Paramas

| Param                     | values                                             |
| ------------------------- | -------------------------------------------------- |
| `values.classNames`       | string or undefined                                |
| `values.objectClassNames` | Object<string, boolean> `example {"my-clas":true}` |
| `dependencies`            | Array of dependencies                              |
