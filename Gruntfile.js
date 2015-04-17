module.exports = function (grunt) {
    grunt.initConfig({
        smushit:{		 
			//replace recursive 
			path: {
				src:'images'
			}
		}
    });

    grunt.loadNpmTasks('grunt-smushit');
    grunt.registerTask('default', ['smushit']);
};