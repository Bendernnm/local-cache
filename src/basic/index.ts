import { ICache } from '../common/cache.interface';

export class BasicCache<T> implements ICache<T> {
  private storage: Map<string, T> = new Map();

  constructor() {
  }

  get(key: string): T | undefined {
    return this.storage.get(key);
  }

  getAll(): T[] {
    return Array.from(this.storage.values());
  }

  has(key: string): boolean {
    return this.storage.has(key);
  }

  set(key: string, value: T): void {
    this.storage.set(key, value);
  }

  setMany(values: Record<string, T>): void {
    for (const [key, value] of Object.entries(values)) {
      this.storage.set(key, value);
    }
  }

  delete(key: string): void {
    this.storage.delete(key);
  }

  deleteMany(keys: string[]): void {
    for (const key of keys) {
      this.storage.delete(key);
    }
  }

  clear(): void {
    this.storage.clear();
  }

  size(): number {
    return this.storage.size;
  }
}
