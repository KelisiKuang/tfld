$(document).ready(function() {

    // **************************************************************** //
    //                                                                  //
    //  ____            _            _     ____  _             _        //
    // |  _ \ _ __ ___ | |_ ___  ___| |_  |  _ \| |_   _  __ _(_)_ __   //
    // | |_) | '__/ _ \| __/ _ \/ __| __| | |_) | | | | |/ _` | | '_ \  //
    // |  __/| | | (_) | ||  __/ (__| |_  |  __/| | |_| | (_| | | | | | //
    // |_|   |_|  \___/ \__\___|\___|\__| |_|   |_|\__,_|\__, |_|_| |_| //
    //                                                   |___/          //
    //                                                                  //
    // **************************************************************** //

    ! function() {
        "use strict";
        const i = {
                isOpen: !1,
                orientation: void 0
            },
            e = (i, e) => {
                window.dispatchEvent(new CustomEvent("devtoolschange", {
                    detail: {
                        isOpen: i,
                        orientation: e
                    }
                }))
            },
            n = ({
                emitEvents: n = !0
            } = {}) => {
                const o = window.outerWidth - window.innerWidth > 170,
                    t = window.outerHeight - window.innerHeight > 170,
                    d = o ? "vertical" : "horizontal";
                t && o || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || o || t) ? (i.isOpen && n && e(!1, void 0), i.isOpen = !1, i.orientation = void 0) : (i.isOpen && i.orientation === d || !n || e(!0, d), i.isOpen = !0, i.orientation = d)
            };
        n({
            emitEvents: !1
        }), setInterval(n, 500), "undefined" != typeof module && module.exports ? module.exports = i : window.devtools = i
    }();

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        /* Protect website from open dev tool to copy */
        if (window.devtools.isOpen) {
            location.href = "https://www.google.com/";
        }

        window.addEventListener('devtoolschange', event => {
            location.href = "https://www.google.com/";
        });
    }

    /* Block save buttons */
    $(document).bind('keydown keypress', 'ctrl+s', function() {
        return false;
    });

    /* Block clicks on site */
    document.onmousedown = disableClick;
    var disableClick = function(event) {
        if (event.button == 2) {
            alert(status);
            return false;
        }
    }

    /* Block any key pressed */
    $.fn.onEnterKey = function(callback) {
        $(this).keypress(function(event) {
            var code = event.keyCode ? event.keyCode : event.which;
            if (code == 13) {
                callback();
                return false;
            }
        });
    }

    /* Block right mouse click */
    $(function() {
        $(this).bind("contextmenu", function(e) {
            e.preventDefault();
        });
    });

});