import { BasicCache } from '../../src/basic';

describe('BasicCache', () => {
  let cache: BasicCache<string>;

  beforeEach(() => {
    cache = new BasicCache<string>();
  });

  test('should set and get a value', () => {
    cache.set('key1', 'value1');

    expect(cache.get('key1')).toBe('value1');
  });

  test('should return undefined for a non-existent key', () => {
    expect(cache.get('nonExistentKey')).toBeUndefined();
  });

  test('should check if a key exists', () => {
    cache.set('key1', 'value1');

    expect(cache.has('key1')).toBe(true);
    expect(cache.has('key2')).toBe(false);
  });

  test('should delete a key', () => {
    cache.set('key1', 'value1');
    cache.delete('key1');

    expect(cache.has('key1')).toBe(false);
  });

  test('should clear all keys', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.clear();

    expect(cache.getAll()).toEqual([]);
  });

  test('should set multiple values', () => {
    cache.setMany({ key1: 'value1', key2: 'value2' });

    expect(cache.get('key1')).toBe('value1');
    expect(cache.get('key2')).toBe('value2');
  });

  test('should delete multiple keys', () => {
    cache.setMany({ key1: 'value1', key2: 'value2', key3: 'value3' });
    cache.deleteMany(['key1', 'key3']);

    expect(cache.has('key1')).toBe(false);
    expect(cache.has('key3')).toBe(false);
    expect(cache.has('key2')).toBe(true);
  });

  test('should retrieve all values', () => {
    cache.setMany({ key1: 'value1', key2: 'value2' });

    expect(cache.getAll()).toEqual(['value1', 'value2']);
  });
});