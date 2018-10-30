/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at https://polymer.github.io/LICENSE.txt
The complete set of authors may be found at https://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at https://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at https://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import { IronJsonpLibraryBehavior } from '@polymer/iron-jsonp-library/iron-jsonp-library.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

/*
Dynamically loads the legacy Google JavaScript API Loader (https://developers.google.com/loader/).

Fires `api-load` event when ready.
*/
Polymer({

  is: 'google-legacy-loader',

  _template: null,

  behaviors: [
    IronJsonpLibraryBehavior
  ],

  properties: {

    /** @private */
    libraryUrl: {
      type: String,
      value: 'https://www.google.com/jsapi?callback=%%callback%%'
    },

    /**
     * Fired when the API library is loaded and available.
     * @event js-api-load
     */
    /**
     * Name of event fired when library is loaded and available.
     */
    notifyEvent: {
      type: String,
      value: 'api-load'
    }
  },

  /**
   * Wrapper for `google` API namespace.
   */
  get api() {
    return google;
  }
});
