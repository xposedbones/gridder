module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass:{
			dist: {
				files: {
					'dist/<%= pkg.name %>.css':"build/<%= pkg.name %>.scss"
				}
			}
		},
		// cssmin: {
		// 	options: {
		// 		shorthandCompacting: false,
		// 		roundingPrecision: -1
		// 	},
		// 	target: {
		// 		files: {
		// 		  'build/<%= pkg.name %>.css': 'build/<%= pkg.name %>.min.css'
		// 		}
		// 	}
		// },
		cssmin : {
            css:{
                src: 'build/<%= pkg.name %>.css',
                dest: 'dist/<%= pkg.name %>.min.css'
            }
        },
		watch:{
			css:{
				files: "build/*.scss",
				tasks:['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask(
		'dev',
		[
			'watch'
		]
	);
	grunt.registerTask(
		'build',
		[
			'sass',
			'cssmin'
		]
	);
}