import $ from 'jquery'

const apiUrl = '/post/';

export default {
    trackItem: function(trackId, callback) {
        $.ajax({
            method: 'GET',

            url: apiUrl + trackId,

            success: function(data) {
                if(data.success) {
                    let operations = data.operations ? data.operations : [];
                    callback(null, operations);
                } else {
                    let error = {
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
                let error = {
                    success: false,
                    message: 'Service error'
                };
                callback(error);
            }
        });
    }
};
