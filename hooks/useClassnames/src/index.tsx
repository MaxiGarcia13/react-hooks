import { buildClassName } from './utils';
import { Values } from './types';

const useClassnames = <T,>(values: Values<T>): string => buildClassName(values);

export default useClassnames;
