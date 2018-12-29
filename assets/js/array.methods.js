window.GLOBAL = GLOBAL = {};

window.GLOBAL.Module1 = (function (w, j) {

    function init(data) {
        console.log("Initialize Module1");
        console.log(privateMethod(data))
        fetch('/assets/data.json', {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response=>{
            console.log("response",response.json());
            // console.log("response",response.json());
        })
    }

    function filter(arr) {
        privateMethod(arr);
    }

    function privateMethod(arr) {
        console.log("privateMethod ", arr);
    }

    return {
        init,
        filter,
        w,
        j
    }
})(window, jQuery);