export interface ICache<T> {
  get(key: string): T | undefined;

  getAll(): T[];

  has(key: string): boolean;

  set(key: string, value: T): void;

  setMany(values: Record<string, T>): void;

  delete(key: string): void;

  deleteMany(keys: string[]): void;

  clear(): void;
}
