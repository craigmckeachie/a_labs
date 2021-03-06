import { TruncateStringPipe } from './truncate-string.pipe';

describe('TruncateStringPipe', () => {
  const pipe = new TruncateStringPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('truncates string at given length', () => {
    expect(pipe.transform('abc', 2)).toEqual('ab...');
  });

  it('returns same string if length equals the length', () => {
    expect(pipe.transform('ab', 2)).toEqual('ab');
  });
});
