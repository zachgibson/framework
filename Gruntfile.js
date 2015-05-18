module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Sass to CSS
    sass: {
      app: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: '/Volumes/WWWShare/html/site/site/wp-content/themes/nwseo-site',
          ext: '.css'
        }]
      },
      options: {
        sourceComments: true,
        sourceMap: true,
        outputStyle: 'nested',
        imagePath: "../",
      }
    },

    // Parse CSS and add vendor-prefixed CSS properties using the Can I Use database
    autoprefixer: {
      no_dest: {
        src: '/Volumes/WWWShare/html/site/site/wp-content/themes/nwseo-site/style.css'
      }
    },

    // Watch files for changes and reload the browser once a file changes
    watch: {
      options: { livereload: true, },
      sass: {
        files: ['sass/{,*/}*.{scss,sass}'],
        tasks: ['sass'],
      },
      css: {
        files: ['/Volumes/WWWShare/html/site/site/wp-content/themes/nwseo-site/style.css'],
        tasks: ['autoprefixer']
      },
      php: {
        files: ['/Volumes/WWWShare/html/site/site/wp-content/themes/nwseo-site/*.php'],
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);

  // Loads Grunt Tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
};