"use strict";

module.exports = function(grunt){
	
	require('load-grunt-tasks')(grunt);
	
	var sassTree = require('sass-tree');
	var nodeSass = require('grunt-sass/node_modules/node-sass');
	
	var config = {
		watch:{
			
		},
		sass:{
			options:{
				sourceMap:true,
				functions:{
					"font-url($path,$true)":function($path,$true){
						return new nodeSass.types.String('node_modules/bootstrap-sass/assets/fonts/bootstrap');
					}
				}
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