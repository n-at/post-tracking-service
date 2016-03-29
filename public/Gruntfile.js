module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        browserify: {
            main: {
                files: {
                    'build/index.js': 'js/index.js'
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
                files: {
                    'build/index.min.js': 'build/index.js'
                }
            }
        },

        less: {
            main: {
                files: {
                    'build/index.css': 'less/index.less'
                }
            },
            options: {
                compress: true
            }
        },

        watch: {
            scripts: {
                files: 'js/**/*.js',
                tasks: ['browserify:main']
            },
            styles: {
                files: 'less/**/*.less',
                tasks: ['less:main']
            }
        }
    });

    grunt.registerTask('default', ['browserify:main', 'uglify:main', 'less:main']);
};
