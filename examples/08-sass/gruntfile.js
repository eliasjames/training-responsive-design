module.exports = function(grunt) {
  grunt.loadNpmTasks( 'grunt-sass' );

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
