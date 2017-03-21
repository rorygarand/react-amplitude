/**
 * React Amplitude Analytics
 *
 * @package react-amplitude
 * @author  Rory Garand <rory@mettleup.com>
 */

import {log, warn} from './utils/console';

var _debug = false;

const Amplitude = {
  initialize: function (amplitudeTrackingCode) {
    if (!amplitudeTrackingCode) {
      warn('amplitudeTrackingCode is required in initialize()');
      return;
    }

    (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script");r.type="text/javascript";
    r.async=true;r.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-3.0.1-min.gz.js";
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

    amplitude.getInstance().init(amplitudeTrackingCode);
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
   * event:
   * Event tracking
   * @param eventName {String} required
   * @param eventProperties {Object} optional
   */
  event: function (eventName, eventProperties) {
    if(!eventName) {
      warn('event name is required');
      return;
    }

    amplitude.getInstance().logEvent(eventName, eventProperties);
  },

  /**
   * resetUserId:
   * 
   */
  resetUserId: function () {
    amplitude.getInstance().setUserId(null);
    amplitude.getInstance().regenerateDeviceId();
  },

  /**
   * setUserId:
   * 
   * @param userID {String} required
   */
  setUserId: function (userID) {
    if(!userID) {
      warn('userID is required');
      return;
    }

    amplitude.getInstance().setUserId(userID);
  }
};

export default Amplitude;