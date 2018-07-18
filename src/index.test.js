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

test('logEvent test called arguments', () => {
    const initMethod = jest.fn();
    const logEvent = jest.fn();

    window.amplitude = {
        getInstance: () => ({
            init: initMethod,
            logEvent: logEvent,
        }),

    };

    const options = {};
    const callback = () => {};
    Amplitude.initialize('key', 'uId', options, callback);

    const eventProperties = {};
    const callbackEvent = () => {}
    Amplitude.event('event', eventProperties, callbackEvent)
    expect(logEvent).toHaveBeenCalledWith('event', eventProperties, callbackEvent);

});

test('Deprecated methods must call new methods', () => {
    const initMethod = jest.fn();
    const logEvent = jest.fn();

    window.amplitude = {
        getInstance: () => ({
            init: initMethod,
            logEvent: logEvent,
        }),

    };

    const options = {};
    const callback = () => {};
    Amplitude.initialize('key', 'uId', options, callback);

    const eventProperties = {};
    const callbackEvent = () => {}
    Amplitude.event('event', eventProperties, callbackEvent)
    expect(logEvent).toHaveBeenCalledWith('event', eventProperties, callbackEvent);

});