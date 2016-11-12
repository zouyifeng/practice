module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),//读取
		uglify:{ //固定名字
			options:{
				banner:'/*!<%=pkg.name%><%=grunt.template.today("yyyy-mm-dd")%>*/\n'
			},
			bulid:{
				src:'src/<%=pkg.name%>.js',
				dest:'build/<%=pkg.name%>.min.js'
			}
		},
		sass:{
			output:{
				options:{
					style:"expanded"
				},
				files:{
					'./css/test.css':'./scss/test.scss'
				}
			}
		},
		concat:{
			options:{
				separator:';',
			},
			dist:{
				src:['./src/plugin.js','./src/plugin2.js'],
				dest:'./global.js'
			}
		},
		jshint:{
			all:['./global.js']
		},
		watch:{
			scripts:{
				files:['./src/plugin.js','./src/plugin2.js'],
				tasks:['concat','jshint','uglify']
			},
			sass:{
				files:['./scss/style.scss'],
				tasks:['sass']
			},
			imagemin:{
				files:['./img'],
				tasks:['imagemin']
			},
			livereload:{
				options:{
					livereload:'<%=connect.options.livereload%>'
				},
				files:[
					'index.html',
					'style.css',
					'js/global.min.js'
				]
			}
		}, //watch 结束
		connect:{
			options:{
				port: 9000,
				open: true,
				livereload: 35729,
				hostname: 'localhost'
			},
			server: {
				options:{
					port: 9001,
					base:'./'
				}
			}
		},//connect结束
		imagemin:{
				dist:{
					options:{
						optimizationLevel: 3
					},
					files:[{
						expand:true,
						cwd:'img1/',//当前工作目录
						src:['**/*.{png,jpg,jpeg}'],
						dest:'img1/'//保存位置
					}]
				}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('outputcss',['sass']);
	grunt.registerTask('img',['imagemin']);
	grunt.registerTask('concatjs',['concat']);//任务命名和后面的名不能相同
	grunt.registerTask('commpressjs',['concat','jshint','ugligy']); //grunt compress 命令对应这
	grunt.registerTask('watchit',['sass','concat','jshint','uglify','connect','imagemin','watch']);
	grunt.registerTask('default'); //grunt  命令对应这
}