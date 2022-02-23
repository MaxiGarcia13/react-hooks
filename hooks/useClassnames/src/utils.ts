import { Values } from './types';

export const buildClassName = <T>({ classNames, objectClassNames }: Values<T>) => {
  let classnames = classNames ? `${classNames}` : '';

  for (const className in objectClassNames) {
    const validation = objectClassNames[className];

    if (validation) {
      classnames += ` ${className}`;
    }
  }

  return classnames;
};
