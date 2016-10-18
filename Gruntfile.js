/*global module*/

module.exports = function (grunt) {
	// Project configuration
	'use strict';
    grunt.initConfig({
		concat: {
			release: {
				src: ['js/interface.js', 'js/game.js'],
				dest: 'release/main.js'
			}
		},
		watch: {
			files: ['js/*.js', 'manifest.json'],
			tasks: ['default']
		}
	});

	// Load Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', ['concat']);
};