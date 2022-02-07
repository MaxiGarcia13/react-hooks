import { useMemo } from 'react';

type ObjectClassNames = Record<string, any>;

type Values = {
  classNames?: string;
  objectClassNames?: ObjectClassNames;
};

/**
 *
 * It allow to handle class names to use it in some component
 * @param { Object } Values
 * @param { string } Values.classNames
 * @param {Object<string, any>} Values.objectClassNames
 * @param {Array<any>} dependencies
 * @returns string
 * @example
 *  // Change value when the variable was change.
 *  useClassnames({classNames: "my-class", objectClassNames: {iam-conditional-class: myVariable}}, [myVariable])
 *  useClassnames({objectClassNames: {im-conditional-class: myVariable}}, [myVariable])
 *
 * // keep the value even if the component is re-rendered
 *  useClassnames({classNames: "my-class", objectClassNames: {im-conditional-class: myVariable}})
 */
const useClassnames = ({ classNames, objectClassNames }: Values, dependencies?: Array<any>): string => {
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
