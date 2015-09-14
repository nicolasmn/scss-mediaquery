module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('bootcamp');

  // Grunt Tasks
  grunt.initConfig({

    // Sass
    sass: {
      test: {
        options: {
          style: 'expanded',
          loadPath: './node_modules/bootcamp/dist',
          sourcemap: 'none'
        },
        files: [{
          src: 'tests/tests.scss',
          dest: 'tests/results.css'
        }]
      }
    },

    // Bootcamp
    bootcamp: {
      test: {
        files: {
          src: ['tests/results.css']
        }
      }
    },

    // Watch
    watch: {
      dist: {
        files: ['{*/,}*.scss'],
        tasks: ['sass', 'bootcamp']
      }
    }
  });

  // Tasks
  grunt.registerTask('test',    ['sass', 'bootcamp']);
  grunt.registerTask('default', ['test']);
};
