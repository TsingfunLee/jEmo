/**
 * Created by 李庆芳 on 2016/9/4.
 */
;(function ($, window, undefined) {

    'use strict';

    $.jEmo = function (options) {
        this.target = $.jEmo.defaults.target;
        this._init(options);
    }

    // the options
    $.jEmo.defaults = {
        container: document.getElementById('jEmo-emo'),
        target: document.getElementById('jEmo-textarea'),
        position: 'down',
        emotions:emotions.json
    };

    $.jEmo.prototype = {
        _init: function (options) {
            this.options = $.extend(true, {}, $.jEmo.defaults, options);
            this._loadEvents();
        },

        _loadEvents: function () {
            this.target.on('click.jEmo', function (event) {
                var target = $(this),
                    doc = document,
                    container = doc.createElement('ul');
                target.appendChild(container);

            });
        }
    }


})(jQuery, window);