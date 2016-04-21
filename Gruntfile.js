"use strict";

module.exports = function(grunt){
	
	require('load-grunt-tasks')(grunt);
	
	var sassTree = require('sass-tree');
	
	var config = {
		watch:{
			
		},
		sass:{
			options:{
				sourceMap:true
			}
		},
		postcss:{
			options:{
				map:true,
				processors:[
					require('autoprefixer')({browsers:'last 2 versions'})
				]
			},
			dist:{
				src:'css/{,**/}*.css'
			}
		}
	};

	config = sassTree({
		filesExtensions:['scss'],
		gruntConfig:config,
		tasks:['postcss']
	});

	grunt.initConfig(config);

	grunt.registerTask('default',['sass']);

};