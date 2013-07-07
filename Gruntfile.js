module.exports = function(grunt) {"use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    coffee: {
      App: {
        options: {
          bare: true
        },
        files: {
          'src/main/js/LABUtil.js': 'src/main/coffee/LABUtil.coffee',
          'src/main/js/projectCommon.js': 'src/main/coffee/projectCommon.coffee'
        }
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      App: {
        files: {
          'src/main/webapp/js/LABUtil.min.js': ['src/main/js/LABUtil.js'],
          'src/main/webapp/js/projectCommon.min.js': ['src/main/js/projectCommon.js']
        }
      }
    },
    watch: {
      scripts: {
        files: '**/*.coffee',
        tasks: ['coffee', 'uglify'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['coffee:App', 'uglify:App']);
};
