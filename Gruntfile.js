/*global module*/

module.exports = function (grunt) {
	// Project configuration
	'use strict';
    grunt.initConfig({
		concat: {
			release: {
				src: ['js/game.js', 'js/interface.js'],
				dest: 'release/main.js'
			}
		},
        jshint: {
			options: {
				jshintrc: '.jshintrc.json'
			},
			files: ['release/main.js']
		},
		watch: {
			files: ['js/*.js', 'manifest.json'],
			tasks: ['default']
		}
	});

	// Load Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', ['concat', 'jshint']);
};