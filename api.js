// textをspanが込み

(function(w, $, Vue) {
    'use strict';

    w.app = new Vue({
        el: '#demo',
        data: {
            message: 0,
            typeTextArray: "",
            startTime: null,
            timer: null,
            isWatchTyping: false,
        },
        ready: function () {
            this.start();
            this.makeTypeText();
        },
        methods: {
            start: function () {
                // dataを取得
                var now = new Date();
                this.startTime = now.getTime();
                
                // inputを空白にして空白
                $(".type-input").val("").focus();
            },
            timeCount: function () {
                var that = this;

                this.timer = setInterval(function () {
                    var now = new Date();

                    that.message = (now.getTime() - that.startTime)/1000;
                }, 1);

            },
            // タイピング用のDOM作成
            makeTypeText: function () {
                this.typeTextArray = "treasure2014".split("");
            }, 
            onKeyType: function () {
                // エンター押したときにリセット


                // 打ち初めに計測
                if (!this.isWatchTyping) {
                    this.timeCount();
                    this.isWatchTyping = !this.isWatchTyping ? true : false; 
                }


                var $t = $(".type-char:not(.completed)").first();

                if ($t.text() === $(".type-input").val().slice(-1)) {
                    $t.addClass("completed");
                } 

                if ($(".type-char:not(.completed)").length == 0 ) {
                    clearInterval(this.timer);
                }
            }
        },
    });
})(window, jQuery, Vue);
