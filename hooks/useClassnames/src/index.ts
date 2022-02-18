import { useMemo } from 'react';

type ObjectClassNames<T> = Record<string, T>;

type Values<T> = {
  classNames?: string;
  objectClassNames?: ObjectClassNames<T>;
};

const useClassnames = <T>({ classNames, objectClassNames }: Values<T>, dependencies?: Array<T>): string => {
  const classnames = useMemo<string>(() => {
    let classnames = classNames ? `${classNames}` : '';

    for (const className in objectClassNames) {
      const validation = objectClassNames[className];

      if (validation) {
        classnames += ` ${className}`;
      }
    }

    return classnames;
  }, dependencies);

  return classnames;
};

export default useClassnames;
