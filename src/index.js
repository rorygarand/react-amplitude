/**
 * React Amplitude Analytics
 *
 * @package react-amplitude
 * @author  Rory Garand <rory@mettleup.com>
 */
import isFunction from 'lodash.isfunction';
import isNil from 'lodash.isnil';
import isPlainObject from 'lodash.isplainobject';
import isString from 'lodash.isstring';
import isNull from 'lodash.isnull';
import {error, log, warn} from './utils/console';

const _debug = false;

const Amplitude = {
  /**
   * Initialize amplitude
   * @param apiKey {String} required
   * @param userId {String} optional
   * @param config {Object} optional
   * @param cb {Function} optional
   */
  init: function (apiKey, userId, config, cb) {
    if (!isString(apiKey)) {
      warn('[init] apiKey is required');
      return;
    }
    if(!isNil(userId) && !isString(userId)) {
      warn('[init] userId should be a string');
    }
    if(!isNil(config) && !isPlainObject(config)) {
      warn('[init] config should be an object');
    }
    if(!isNil(cb) && !isFunction(cb)) {
      warn('[init] callback should be a function');
    }

    (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script");r.type="text/javascript";
    r.async=true;r.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-4.1.0-min.gz.js";
    r.onload=function(){e.amplitude.runQueuedFunctions()};var i=t.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(r,i);function s(e,t){e.prototype[t]=function(){this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
    return this}}var o=function(){this._q=[];return this};var a=["add","append","clearAll","prepend","set","setOnce","unset"];
    for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[];return this;
    };var p=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];
    for(var l=0;l<p.length;l++){s(c,p[l])}n.Revenue=c;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId"];
    function v(e){function t(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
    }}for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){e=(!e||e.length===0?"$default_instance":e).toLowerCase();
    if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]};e.amplitude=n;
    })(window,document);

    amplitude.getInstance().init(apiKey, userId, config);
  },

  /**
   * amplitude:
   * Returns the original Amplitude object.
   */
  amplitude: function () {
    if (arguments.length > 0) {
      amplitude.apply(this, arguments);
      if (_debug) {
        log('called amplitude(\'arguments\');');
        log('with arguments: ' + JSON.stringify([].slice.apply(arguments)));
      }
      return;
    }

    return amplitude;
  },

  /**
   * Clear user properties
   * (careful, this is irreversible!)
   */
  clearUserProperties: function () {
    amplitude.getInstance().clearUserProperties()
  },

  /**
   * Returns current session id
   */
  getSessionId: function() {
    return amplitude.getInstance().getSessionId();
  },

  /**
   * Applies user property operations
   * @param idObj {Object} required
   * @param cb {Function} optional
   */
  identify: function(idObj, cb) {
    if(!idObj) {
      error('[identify] identify_obj is required.');
      return;
    }
    if(!isNil(idObj) && !isPlainObject(idObj)) {
      error('[identify] identify_obj should be an object.');
      return;
    }

    amplitude.getInstance().identify(idObj, cb);
  },

  /**
   * Returns if a new session was created at init
   */
  isNewSession: function() {
    return amplitude.getInstance().isNewSession();
  },

  /**
   * Event tracking
   * @param eventType {String} required
   * @param eventProperties {Object} optional
   * @param cb {Function} optional
   */
  logEvent: function (eventType, eventProperties, cb) {
    if(!eventType) {
      error('[logEvent] eventType is required.');
      return;
    }
    if(!isString(eventType)) {
      warn('[logEvent] eventType should be a string.');
    }
    if(!isPlainObject(eventProperties)) {
      warn('[logEvent] eventProperties should be an object.')
    }
    if(!isFunction(cb)) {
      warn('[logEvent] callback should be a function.');
    }

    amplitude.getInstance().logEvent(eventType, eventProperties);
  },

  /**
   * Event tracking w/ timestamp
   * @param eventType {String} required
   * @param eventProperties {Object} optional
   * @param timestamp {Number} optional
   * @param cb {Function} optional
   */
  logEventWithTimestamp: function (eventType, eventProperties, timestamp, cb) {
    if(isNil(eventType)) {
      error('[logEvent] eventType is required.');
      return;
    }
    if(!isNil(eventType) && !isString(eventType)) {
      warn('[logEvent] eventType should be a string.');
    }
    if(!isNil(eventProperties) && !isPlainObject(eventProperties)) {
      warn('[logEvent] eventProperties should be an object.')
    }
    if(!isNil(timestamp) && !isNumber(timestamp)) {
      warn('[logEvent] timestamp should be a number.');
    }
    if(!isNil(cb) && !isFunction(cb)) {
      warn('[logEvent] callback should be a function.');
    }
  },

  /**
   * Resets the user id
   */
  resetUserId: function () {
    amplitude.getInstance().setUserId(null);
    amplitude.getInstance().regenerateDeviceId();
  },

  /**
   * Set user id
   * @param userId {String} or null required
   */
  setUserId: function (userId) {
    if(!isString(userId) && !isNull(userId)) {
      warn('[setUserId] userId must be a string or null.');
    }

    amplitude.getInstance().setUserId(userId);
  },

  /**
   * Sets user properties:
   *
   * @userProps userProps {Object} required
   */
  setUserProperties: function (userProps) {
    if(!userProps) {
      warn('userProps are required');
      return;
    }

    amplitude.getInstance().setUserProperties(userProps);
  },

  // DEPRECATED
  event: function (a, b, c) {
    warn('[event] has been deprecated. Please use [logEvent].');
    logEvent(a, b, c);
  },
  initialize: function (a, b, c, d) {
    warn('[initialize] has been deprecated. Please use [init].');
    init(a, b, c, d);
  }
};

export default Amplitude;
