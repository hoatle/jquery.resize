/*
 * Copyright (C) hoatle, the origin author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The jQuery resize plugin, version v0.1.0
 *
 * https://github.com/hoatle/jquery.resize
 *
 * Usage:
 *
 * $el.resize(options, duration, easing, finishCallback);
 *
 * For example:
 *
 * $el.resize({
 *   dir: 't',
 *   tSize: 200
 * }, 1000, function() {
 *   //finish calledback
 * });
 *
 * options:
 * - dir: t, r, b, l, tr, rb, bl, lt, rl, tb, trbl.
 * - tSize, rSize, bSize, lSize.
 *
 *
 * @author hoatle
 */
(function ($, undefined) {

  var defaultOptions = {

  };

  var defaultSpeed = 'normal';

  var resize = function (options, speed, easing, finishCallback) {
    if (arguments.length == 3) {
      if ($.isFunction(arguments[2])) {
        finishCallback = arguments[2];
        easing = null;
      }
    }
    options = $.extend(defaultOptions, options);
    speed ? speed : speed = defaultSpeed;


    var lSize = options.lSize || 0;
    lSize = parseFloat(lSize);

    var rSize = options.rSize || 0;
    rSize = parseFloat(rSize);

    var tSize = options.tSize || 0;
    tSize = parseFloat(tSize);

    var bSize = options.bSize || 0;
    bSize = parseFloat(bSize);

    var currentLeft = parseFloat(this.css('left'));
    var currentWidth = parseFloat(this.css('width'));
    var currentTop = parseFloat(this.css('top'));
    var currentHeight = parseFloat(this.css('height'));

    var newLeft, newWidth, newTop, newHeight;


    switch (options.dir) {
      case 't':
      {
        newTop = currentTop - tSize;
        newHeight = currentHeight + tSize;
        this.animate({
          top: newTop + 'px',
          height: newHeight + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'r':
      {
        newWidth = currentWidth + rSize;
        this.animate({
          width: newWidth + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'b':
      {
        newHeight = currentHeight + bSize;
        this.animate({
          height: newHeight + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'l':
      {
        newLeft = currentLeft - lSize;
        newWidth = currentWidth + lSize;
        this.animate({
          width: newWidth + 'px',
          left: newLeft + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'tr':
      {
        newTop = currentTop - tSize;
        newHeight = currentHeight + tSize;
        newWidth = currentWidth + rSize;
        this.animate({
          top: newTop + 'px',
          height: newHeight + 'px',
          width: newWidth + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'rb':
      {
        newHeight = currentHeight + bSize;
        newWidth = currentWidth + rSize;
        this.animate({
          width: newWidth + 'px',
          height: newHeight + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'bl':
      {
        newLeft = currentLeft - lSize;
        newWidth = currentWidth + lSize;
        newHeight = currentHeight + bSize;
        this.animate({
          left: newLeft + 'px',
          width: newWidth + 'px',
          height: newHeight + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'lt':
      {
        newTop = currentTop - tSize;
        newHeight = currentHeight + tSize;
        newLeft = currentLeft - lSize;
        newWidth = currentWidth + lSize;
        this.animate({
          top: newTop + 'px',
          left: newLeft + 'px',
          width: newWidth + 'px',
          height: newHeight + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'tb':
      {
        newTop = currentTop - tSize;
        newHeight = currentHeight + tSize + bSize;
        this.animate({
          top: newTop + 'px',
          height: newHeight + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'rl':
      {
        newLeft = currentLeft - lSize;
        newWidth = currentWidth + lSize + rSize;
        this.animate({
          left: newLeft + 'px',
          width: newWidth + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      case 'trbl':
      {
        newTop = currentTop - tSize;
        newHeight = currentHeight + tSize + bSize;
        newLeft = currentLeft - lSize;
        newWidth = currentWidth + lSize + rSize;
        this.animate({
          top: newTop + 'px',
          left: newLeft + 'px',
          width: newWidth + 'px',
          height: newHeight + 'px'
        }, speed, easing, finishCallback);
        break;
      }

      default:
      {
        //no match, do nothing, alert?
        if (console) {
          console.log('no match direction: *' + options.dir + '*');
        }
      }
    }
    return this;
  }

  $.fn.resize = resize;

})(jQuery);