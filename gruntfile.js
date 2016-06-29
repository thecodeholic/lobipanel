module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        less : {
            development: {
                files: {
                    'css/<%= pkg.name %>.css': ['less/<%= pkg.name %>.less']
                }
            }
        },
        
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'css',
                        src: '<%= pkg.name %>.css',
                        dest: 'dist/css',
                        ext: '.min.css'
                    }
                ]
            }
        },
        
        copy: {
            js: {
                files: [
                    {
                        expand: true,
                        cwd: 'js',
                        src: '*.js',
                        dest: 'dist/js'
                    }
                ]
            },
            css: {
                files: [
                    {
                        expand: true,
                        cwd: 'css',
                        src: '*.css',
                        dest: 'dist/css'
                    }
                ]
            }
        },
        
        uglify: {
            options: {
                mangle: false
            },
            js : {
                files: [
                    {
                        expand: true,
                        cwd: 'js',
                        src: '*.js',
                        dest: 'dist/js',
                        ext: '.min.js'
                    }
                ]
            }
        },
        
        watch: {
            scriptsDev: {
                files: ['js/*.js'],
                tasks: ['copy:js']
            },
            cssDev: {
                files: 'less/*.less',
                tasks: ['less', 'copy:css']
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['copy:js', 'uglify']
            },
            css: {
                files: 'less/*.less',
                tasks: ['less', 'cssmin', 'copy:css']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('dev', ['less', 'copy', 'watch:scriptsDev', 'watch:cssDev']);
    grunt.registerTask('default', ['less', 'cssmin', 'copy', 'uglify', 'watch']);
};