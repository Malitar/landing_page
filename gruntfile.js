const sass= require('node-sass');

module.exports = function(grunt) {

     // Project configuration.
     grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       sass:{
		options: {
            outputStyle: 'compressed',
            implementation: sass //and this part
		},
            dist: {
               files: {
                    'public/src/all.css' : 'public/src/scss/main.scss'
               }
            }
       }
     });
   
     // Load the plugin that provides the "uglify" task.
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-sass');
   
     // Default task(s).
     grunt.registerTask('default', ['sass']);
   
   };