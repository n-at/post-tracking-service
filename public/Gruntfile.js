module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    var browserifyFiles = {
        'build/index.js': 'index.js'
    };
    var uglifyFiles = {
        'build/index.min.js': 'build/index.js'
    };

    grunt.initConfig({
        browserify: {
            main: {
                files: browserifyFiles
            },
            watch: {
                files: browserifyFiles,
                options: {
                    watch: true,
                    keepAlive: true
                }
            },
            options: {
                transform: [
                    ['babelify', { presets: 'react' }]
                ]
            }
        },
        uglify: {
            main: {
                files: uglifyFiles
            }
        }
    });

    grunt.registerTask('default', ['browserify:main', 'uglify:main']);
    grunt.registerTask('watch', ['browserify:watch']);
};
