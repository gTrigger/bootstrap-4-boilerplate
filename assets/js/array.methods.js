window.GLOBAL = {};

window.GLOBAL.Module1 = (function (w, j) {

    function filter(arr) {
        privateMethod(arr);
    }

    function privateMethod(arr) {
        console.log("Test logic ", arr);
    }
    return {
        filter,
        w,
        j
    }
})(window, jQuery);