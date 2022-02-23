import { useMemo } from 'react';
import { buildClassName } from './utils';
import { Values } from './types';

const useMemoClassnames = <T,>(values: Values<T>, dependencies?: Array<T>): string => {
  const classnames = useMemo<string>(() => buildClassName(values), dependencies);

  return classnames;
};

export default useMemoClassnames;
