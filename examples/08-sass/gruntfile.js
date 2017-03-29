module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); 

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'main.css': 'sassy-styles.scss'
        }
      }
    }
  });

  grunt.registerTask('default', ['sass']);
};
