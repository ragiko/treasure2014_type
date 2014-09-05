(function(w, $, Vue) {
    'use strict';

    w.app = new Vue({
        el: '#demo',
        data: {
            message: 0,
            startTime: null,
        },
        ready: function () {
            this.start();
            this.timeCount();
        },
        methods: {
            start: function () {
                var now = new Date();
                this.startTime = now.getTime();
            },
            timeCount: function () {
                setInterval(function () {
                    var now = new Date();
                    
                    w.app.$data.message = now.getTime() - w.app.$data.startTime;
                }, 1);
            },
            test: function () {
                // $(".type-input").text();

            }
        },
    });
})(window, jQuery, Vue);
