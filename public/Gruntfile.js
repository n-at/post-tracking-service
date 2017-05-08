module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-env');

    ///////////////////////////////////////////////////////////////////////////

    const cleanFiles = ['build'];

    const browserifyDevelopmentOptions = {
        debug: true,
        extensions: ['.js', '.jsx']
    };

    const browserifyProductionOptions = {
        debug: false,
        extensions: ['.js', '.jsx']
    };

    const browserifyFiles =  {
        'build/index.js': 'js/index.jsx'
    };

    const uglifyFiles = {
        'build/index.js': 'build/index.js'
    };

    const lessDevelopmentOptions = {
        compress: false
    };

    const lessProductionOptions = {
        compress: true
    };

    const lessFiles = {
        'build/index.css': 'less/index.less'
    };

    const watchFiles = [
        'js/**/*.js',
        'js/**/*.jsx',
        'less/**/*.less'
    ];

    ///////////////////////////////////////////////////////////////////////////

    grunt.initConfig({
        env: {
            development: {
                NODE_ENV: 'development'
            },
            production: {
                NODE_ENV: 'production'
            }
        },

        clean: {
            main: cleanFiles
        },

        browserify: {
            development: {
                files: browserifyFiles,
                options: browserifyDevelopmentOptions
            },
            production: {
                files: browserifyFiles,
                options: browserifyProductionOptions
            },
            options: {
                transform: [
                    ['babelify', { presets: ['react', 'latest'] }]
                ]
            }
        },

        uglify: {
            main: {
                files: uglifyFiles
            }
        },

        less: {
            development: {
                files: lessFiles,
                options: lessDevelopmentOptions
            },
            production: {
                files: lessFiles,
                options: lessProductionOptions
            }
        },

        watch: {
            main: {
                files: watchFiles,
                tasks: ['build-dev'],
            }
        }
    });

    ///////////////////////////////////////////////////////////////////////////

    grunt.registerTask('build', [
        'env:production',
        'clean:main',
        'browserify:production',
        'uglify:main',
        'less:production'
    ]);

    grunt.registerTask('build-dev', [
        'env:development',
        'clean:main',
        'browserify:development',
        'less:production'
    ]);

    grunt.registerTask('default', ['build']);
};
