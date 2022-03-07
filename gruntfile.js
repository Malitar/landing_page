const sass = require('node-sass');

module.exports = function (grunt) {

     // Project configuration.
     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          paths: {
               public: "<%= paths.public %>public",
               src: "<%= paths.src %>src/",
               sass: "<%= paths.public %>scss/",
          },


          watch: {
               options: {
                    livereload: true,
                    compress: true
               },
               sass: {
                  files: [
                    'public/src/scss/*.scss',
                    'public/src/scss/*/*scss'
                    ],  
                    tasks: ['sass']
               },  
          },

          sass: {
               options: {
                    outputStyle: 'compressed',
                    implementation: sass
               },
               dist: {
                    files: {
                         'public/src/all.min.css': 'public/src/scss/all.scss'
                    }
               },
               
          },

     });

     // Load the plugin that provides the "uglify" task.
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');

     grunt.registerTask("myTask", ["sass"]);
     grunt.registerTask("dev", ['watch']);

     // Default task(s).
     grunt.registerTask('default', ['sass']);

};