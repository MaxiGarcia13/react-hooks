import { useMemo } from 'react';

type ObjectClassNames = Record<string, boolean>;

interface Values {
  classNames?: string;
  objectClassNames?: ObjectClassNames;
}

const useClassnames = ({ classNames, objectClassNames }: Values, dependencies?: any[]): string => {
  const classnames = useMemo(() => {
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
