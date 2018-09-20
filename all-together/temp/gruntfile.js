module.exports = function( grunt ) {
  grunt.loadNpmTasks( 'grunt-jslint' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-sass' );

  grunt.initConfig({
    jslint: {
      src: [ 'src/*.js' ]
    },
    watch: {
      scripts: {
        files: [ 'src/*.js' ],
        tasks: [ 'jslint' ]
      },
      sass: {
        files: [ 'sassy-styles.scss' ],
        tasks: [ 'sass' ]
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'main.css': 'sassy-styles.scss'
        },
				options: {
					loadPath: ['node_modules/foundation-sites/scss']
				}
      }
    }
  });

  grunt.registerTask( 'run-sass', ['sass'] );
  grunt.registerTask( 'run-linter', ['jslint'] );
  grunt.registerTask( 'run-watcher', ['watch'] );
  grunt.registerTask( 'default', [ 
    'run-linter', 
    'run-watcher' 
  ]);

}
