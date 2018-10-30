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
Dynamically loads the Google Drive Realtime API, firing the `api-load` event when ready.

Any number of components can use `<google-realtime-api>` elements, and the library will only be loaded once.
*/
Polymer({

  is: 'google-realtime-api',

  _template: null,

  behaviors: [
    IronJsonpLibraryBehavior
  ],

  properties: {

    /** @private */
    libraryUrl:  {
      type: String,
      value: 'https://apis.google.com/js/drive-realtime.js?onload=%%callback%%'
    },

     /**
     * Fired when the API library is loaded and available.
     * @event api-load
     */
    /**
     * Name of event fired when library is loaded and available.
     */
    notifyEvent:  {
      type: String,
      value: 'api-load'
    }

  },

  /**
   * Returns `gapi.drive.realtime`
   */
  get api() {
    return window.gapi.drive.realtime;
  }

});
