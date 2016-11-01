// Compulsory configuration
module.exports = function(grunt) {     
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

// Configuration
       watch: {
       	options: { 
       		livereload: true,
       	},
       		// HTML automate
		   src: {
                files: ['html/*.html'],
                
            },
            // CSS Automate
            css: {
				files: ['css/**/*.css'],
				tasks: [],
			},
			scripts: {
				files: ['javascript/*.js'],
				tasks: [],
    		}

	   },
			// FIGURE SERVER
			connect: {
			server: {
			  options: {
				port: 9000,
				base: '.',
				hostname: '0.0.0.0',
				protocol: 'http',
				livereload: true,
				open: true,
			  }
			}
		  },

    });

    // Tell grunt about task
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Execute 

    grunt.registerTask('default', ['concat']);
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	 grunt.registerTask('server', ['connect','watch']);

};