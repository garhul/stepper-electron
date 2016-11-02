(function () {
    'use strict';

    angular.module('app').service('commService', ['$q', commService]);

    function commService($q) {
        return {
            connect: connect,
            send: send,
            receive: receive,
            close: close,
            destroy: destroy
        };

        function send(buffer) {

        }

        function connect(port, baudrate, flags) {

        }

        function receive() {

        }
        function destroy() {

        }

        function close() {

        }
    }
})();
