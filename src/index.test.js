import Amplitude from './index.js';

let clearUserProperties;
let getSessionId;
let identify;
let init;
let isNewSession;
let logEvent;
let logEventWithTimestamp;
let resetUserId;
let setOptOut;
let setUserId;
let setUserProperties;

describe('Amplitude', () => {
    beforeEach(() => {
        clearUserProperties = jest.fn();
        getSessionId = jest.fn();
        identify = jest.fn();
        init = jest.fn();
        isNewSession = jest.fn();
        logEvent = jest.fn();
        logEventWithTimestamp = jest.fn();
        resetUserId = jest.fn();
        setOptOut = jest.fn();
        setUserId = jest.fn();
        setUserProperties = jest.fn();

        window.amplitude = {
            getInstance: () => ({
                clearUserProperties,
                getSessionId,
                identify,
                init,
                isNewSession,
                logEvent,
                logEventWithTimestamp,
                resetUserId,
                setOptOut,
                setUserId,
                setUserProperties
            })
        };
    });

    it('should call init with args', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);
        expect(init).toHaveBeenCalledWith('key', 'uId', options, callback);
    });

    it('it should call logEvent with args', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);

        const eventProperties = {};
        const callbackEvent = () => {}
        Amplitude.logEvent('event', eventProperties, callbackEvent)
        expect(logEvent).toHaveBeenCalledWith('event', eventProperties, callbackEvent);
    });

    it('deprecated methods should call new methods', () => {
        const options = {};
        const callback = () => {};
        Amplitude.initialize('key', 'uId', options, callback);

        const eventProperties = {};
        const callbackEvent = () => {}
        Amplitude.event('event', eventProperties, callbackEvent)
        expect(logEvent).toHaveBeenCalledWith('event', eventProperties, callbackEvent);
    });
});