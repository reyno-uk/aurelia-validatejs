define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-validatejs');
        aurelia.start().then(function (a) {
            a.setRoot('app');
            System.config({
                paths: {
                    "*": "dist/*"
                }
            });
        });
    }
    exports.configure = configure;
});
