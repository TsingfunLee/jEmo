/**
 * Created by 李庆芳 on 2016/9/4.
 * https://github.com/TsingfunLee
 *
 * jQuery.jEmo.js v1.0.0
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
;(function ($, window, undefined) {

    'use strict';

    $.jEmo = function (options) {

        this.$button = $('#jEmo-emo');

        this.init = function (options) {

            this.options = $.extend(true, {}, $.jEmo.defaults, options);

            this.loadEvents();

        }

        this.loadEvents = function () {

            this.$button.on('click.jEmo', function (event) {
                var target = $(this),
                    doc = document,
                    container = doc.createElement('ul');
                    //emotion=$.getJSON(this.options[emotions]);
                //console.log(emotion)
                target.append(container);
                var html = '<li class="jEmo-happy"></li>' +
                    '<li class="jEmo-smile"></li>';
                container.innerHTML = html;
            });

        }

        this.init(options);

    };

    // the options
    $.jEmo.defaults = {
        //container: this.$button,
        target: $('#jEmo-textarea'),
        position: 'down',
        emotions: 'data/emotions.json'
    };

    //$.jEmo.init = function (options) {
    //
    //    this.options = $.extend(true, {}, $.jEmo.defaults, options);
    //
    //    this.loadEvents();
    //
    //}

    //$.jEmo.loadEvents = function () {
    //    this.$button.on('click.jEmo', function (event) {
    //        var target = $(this),
    //            doc = document,
    //            container = doc.createElement('ul');
    //        target.appendChild(container);
    //        var html = '<li class="jEmo-happy"></li>' +
    //            '<li class="jEmo-smile">e9e1</li>';
    //        container.write(html);
    //    });
    //}

    //$.jEmo.prototype = {
    //
    //    _init: function (options) {
    //
    //        this.options = $.extend(true, {}, $.jEmo.defaults, options);
    //
    //        this._loadEvents();
    //
    //    },
    //
    //    _loadEvents: function () {
    //
    //        this.$button.on('click.jEmo', function (event) {
    //            var target = $(this),
    //                doc = document,
    //                container = doc.createElement('ul');
    //            target.appendChild(container);
    //            var html = '<li class="jEmo-happy"></li>' +
    //                '<li class="jEmo-smile">e9e1</li>';
    //            container.write(html);
    //        });
    //
    //    }
    //
    //};

    var logError = function (message) {

        if (window.console) {

            window.console.error(message);

        }

    };

    $.fn.jEmo = function (options) {

        var instance = $.data(this, 'jEmo');

        if (typeof options === 'string') {

            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function () {

                if (!instance) {

                    logError("cannot call methods on jEmo prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;

                }

                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {

                    logError("no such method '" + options + "' for jEmo instance");
                    return;

                }

                instance[options].apply(instance, args);

            });

        }
        else {

            this.each(function () {

                if (instance) {

                    instance._init();

                }
                else {

                    instance = $.data(this, 'jEmo', new $.HoverDir(options, this));

                }

            });

        }

        return instance;

    };


})(jQuery, window);