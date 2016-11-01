// 1. Cấu hình cơ bản bắt buộc
module.exports = function(grunt) {     
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

// 2. Cấu hình cho việc nối file ở đây
       watch: {
       	options: { 
       		livereload: true,
       	},
       		// HTML automate
		   src: {
                files: ['*.html'],
                
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

    // 3. Bảo Grunt rằng nó sẽ phải thực thi plug-in này
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Bảo Grunt phải thực thi lệnh ngay lập tức ghi gõ grunt tại terminal

    grunt.registerTask('default', ['concat']);
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	 grunt.registerTask('server', ['connect','watch']);

};