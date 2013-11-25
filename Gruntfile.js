
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-gaia-builder');
  grunt.initConfig({
    gaiabuilder: {
      options: {
        depends: ['gaia-calendar'],
        targetDir: '/tmp/test-gaiabuilder'
      }
    }
  });

  grunt.registerTask('default', ['gaiabuilder']);
}
