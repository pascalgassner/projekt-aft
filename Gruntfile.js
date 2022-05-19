module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/css/main.css': 'assets/scss/main.scss'
                }
            }
        },
        image: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/img',
                    src: ['*.jpg'],
                    dest: 'public/img'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
               },
                files: {                                   
                    'public/index.min.html': 'assets/index.html'
               }
           }
        }
    });

    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'htmlmin', 'image']);
};