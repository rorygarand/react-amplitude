import Amplitude from './index.js';

test('Init method must be called with args', () => {

    const initMethod = jest.fn();

    window.amplitude = {
        getInstance: () => ({
            init: initMethod
        }),
    };

    const options = {};
    const callback = () => {};
    Amplitude.init('key', 'uId', options, callback);
    expect(initMethod).toHaveBeenCalledWith('key', 'uId', options, callback);
});
