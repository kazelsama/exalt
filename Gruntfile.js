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
		}
	};
	
	grunt.initConfig(sassTree({
		filesExtensions:['scss'],
		gruntConfig:config
	}));

	grunt.registerTask('default',['sass']);

};