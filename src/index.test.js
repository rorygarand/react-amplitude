import Amplitude from './index.js';

let clearUserProperties;
let getSessionId;
let identify;
let init;
let isNewSession;
let logEvent;
let logEventWithTimestamp;
let regenerateDeviceId;
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
        regenerateDeviceId = jest.fn();
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
                regenerateDeviceId,
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

    it('should call clearUserProperties', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);
        
        Amplitude.clearUserProperties();
        expect(clearUserProperties).toHaveBeenCalled();
    });

    it('should call getSessionId', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);
        
        Amplitude.getSessionId();
        expect(getSessionId).toHaveBeenCalled();
    });

    it('should call identify with args', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);

        const idObj = {};
        const callbackId = () => {};
        Amplitude.identify(idObj, callbackId);
        expect(identify).toHaveBeenCalledWith(idObj, callbackId);
    });

    it('should call isNewSession', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);
        
        Amplitude.isNewSession();
        expect(isNewSession).toHaveBeenCalled();
    });

    it('it should call logEvent with args', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);

        const eventProperties = {};
        const callbackEvent = () => {};
        Amplitude.logEvent('event', eventProperties, callbackEvent);
        expect(logEvent).toHaveBeenCalledWith('event', eventProperties, callbackEvent);
    });

    it('it should call logEventWithTimestamp with args', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);

        const eventProperties = {};
        const timestamp = 0;
        const callbackEvent = () => {};
        Amplitude.logEventWithTimestamp('event', eventProperties, timestamp, callbackEvent);
        expect(logEventWithTimestamp).toHaveBeenCalledWith('event', eventProperties, timestamp, callbackEvent);
    });

    it('should call resetUserId', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);
        
        Amplitude.resetUserId();
        expect(regenerateDeviceId).toHaveBeenCalled();
        expect(setUserId).toHaveBeenCalled();
    });

    it('it should call setUserProperties with args', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);

        const userProperties = {};
        Amplitude.setUserProperties(userProperties);
        expect(setUserProperties).toHaveBeenCalledWith(userProperties);
    });

    it('it should call setOptOut with args', () => {
        const options = {};
        const callback = () => {};
        Amplitude.init('key', 'uId', options, callback);

        let enable = true;
        Amplitude.setOptOut(enable);
        expect(setOptOut).toHaveBeenCalledWith(enable);

        enable = false;
        Amplitude.setOptOut(enable);
        expect(setOptOut).toHaveBeenCalledWith(enable);
    });

    it('deprecated methods should call new methods', () => {
        const options = {};
        const callback = () => {};
        Amplitude.initialize('key', 'uId', options, callback);

        const eventProperties = {};
        const callbackEvent = () => {};
        Amplitude.event('event', eventProperties, callbackEvent);
        expect(logEvent).toHaveBeenCalledWith('event', eventProperties, callbackEvent);
    });
});