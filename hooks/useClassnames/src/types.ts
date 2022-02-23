export type ObjectClassNames<T> = Record<string, T>;

export type Values<T> = {
  classNames?: string;
  objectClassNames?: ObjectClassNames<T>;
};
