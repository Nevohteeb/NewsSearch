module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/custom.js',
        dest: 'js/custom.min.js'
      }
    }, // Uglify ends
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'expanded'
        },
        files: { // Dictionary of files
          'css/custom.css': 'sass/custom.scss', // 'destination': 'source'
        }
      }
    }, // Sass ends
    watch: {
      scripts: {
        files: ['js/custom.js', 'sass/custom.scss', 'index.html', 'gruntfile.js'],
        tasks: ['uglify', 'sass', 'jshint'],
        options: {
          spawn: false,
        },
      },
    },
    // watch ends
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/custom.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/custom.css']
      }
    },
    // css lint finishes
    jshint: {
      all: ['Gruntfile.js', 'js/custom.js']
    },
    htmllint: {
      options: {},
      src: [
        'index.html'
      ],
    },
    // html lint finishes
  }); // init Config Ends

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-htmllint');


  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch', 'htmllint']);
  grunt.registerTask('prod', ['uglify']);
  grunt.registerTask('cssvalidate', ['csslint', 'jshint']);
  grunt.registerTask('jslint', ['jshint']);

};
