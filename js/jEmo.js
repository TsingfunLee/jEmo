/**
 * Created by 李庆芳 on 2016/9/4.
 */
;(function ( $, window, undefined ) {
        'use strict';

    $.jEmo=function(options,element){
        this.$el = $( element );
        this._init( options );
    }
    // the options
    $.jEmo.defaults = {
        container: document.getElementById('jEmo-emo'),
        target: document.getElementById('jEmo-textarea'),
    };

} )( jQuery, window );