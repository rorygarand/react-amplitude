import Console from './index.js';

describe('console', () => {
  it('should log errors', () => {
    const message = 'error message';
    const spy = jest.spyOn(Console, 'error');
    Console.error(message);
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should log messages', () => {
    const message = 'log message';
    const spy = jest.spyOn(Console, 'log');
    Console.log(message);
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should log warnings', () => {
    const message = 'warning message';
    const spy = jest.spyOn(Console, 'warn');
    Console.warn(message);
    expect(spy).toHaveBeenCalledWith(message);
  });
});
