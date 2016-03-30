var $ = require('jquery');

var apiUrl = '/post-test/';

module.exports.trackItem = function(trackId, callback) {
    $.ajax({
        method: 'GET',

        url: apiUrl + trackId,

        success: function(data) {
            if(data.success) {
                var operations = data.operations ? data.operations : [];
                callback(null, operations);
            } else {
                var error = {
                    success: false,
                    message: 'Internal error'
                };

                if(data.message) {
                    error.message = data.message;
                }

                callback(error);
            }
        },

        error: function() {
            var error = {
                success: false,
                message: 'Service error'
            };
            callback(error);
        }
    });
};
