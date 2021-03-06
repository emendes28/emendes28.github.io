module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 320,
            height: 240,
            quality: 7
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/projects/',
          dest: 'images_src/'
        }]
      }
    },

    /* Clear out the img directory if it exists */
    clean: {
      dev: {
        src: ['images_src'],
      },
    },

    /* Generate the img directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images_src']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};