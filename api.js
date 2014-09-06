// textをspanが込み

(function(w, $, Vue) {
    'use strict';

    w.app = new Vue({
        el: '#demo',
        data: {
            time: 0,
            typeTextArray: "",
            startTime: null,
            timer: null,
            isWatchTyping: false,
        },
        ready: function () {
            this.init();
        },
        methods: {
            init: function () {
                // inputを空白にして空白
                $(".type-input").val("").focus();

                // タイピング用のDOM作成
                this.typeTextArray = "treasure2014".split("");

            },
            onKeyType: function () {
                // 打ち初めに計測
                if (!this.isWatchTyping) {
                    // dataを取得
                    var now = new Date();
                    this.startTime = now.getTime();

                    // 時間の計測開始
                    this.timeCount();
                    this.isWatchTyping = !this.isWatchTyping ? true : false; 
                }

                // タイピングロジック
                var $t = $(".type-char:not(.completed)").first();

                if ($t.text() === $(".type-input").val().slice(-1)) {
                    $t.addClass("completed");
                } 

                // タイピング終了条件
                if ($(".type-char:not(.completed)").length == 0 ) {
                    clearInterval(this.timer);
                }
            },
            timeCount: function () {
                var that = this;

                this.timer = setInterval(function () {
                    var now = new Date();

                    that.time = (now.getTime() - that.startTime)/1000;
                }, 1);
            },
            reset: function () {
                
                clearInterval(this.timer);  // タイマーを終了
                this.time = 0;              // タイマーのテキストを更新
                this.isWatchTyping = false; // タイマーが移動しているのを終了 
                $(".type-input").val("");   // inputのクリア
                $(".type-char").removeClass("completed"); 
            }
        },
    });
})(window, jQuery, Vue);
