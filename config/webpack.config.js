import webpack from 'webpack';

module.exports = {
  //根目录
  context: __dirname + "",
  //文件入口
  entry: {
	  index: '../src/index.js'
  },
  //文件出口
  output: {
	path: __dirname + "/build", // 设置输出目录
	filename: '[name].bundle.js', // 输出文件名
  },
  module: {
	//loaders加载器
	loaders: [{
	  test: /\.(js|jsx)$/, //【一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）】
		exclude: /node_modules/, //【屏蔽不需要处理的文件（文件夹）（可选）】
		loader: 'babel-loader' //【loader的名称（必须）】此处为可以转换ES6和JSX语法的加载器
	  },
	  {
	    test: /\.css$/,
	    loader: "style!css"  //.css文件使用 style-loader 和 css-loader 来处理  
	  },
	  {
	    test: /\.(jpeg|png|gif|svg)$/i,
	    loader: 'url-loader?limit=8192&name=[name].[ext]'  //图片文件使用 url-loader来处理，小于8kb的直接转为base64 
	  }
	]
  },
  // 插件
  plugins: [
  // 默认会把所有入口节点的公共代码提取出来,生成一个common.js
  //new webpack.optimize.CommonsChunkPlugin('common'),
  // 压缩代码抬头注释
	new webpack.BannerPlugin('此处添加打包抬头注释!'),
	// 代码压缩
	new webpack.optimize.UglifyJsPlugin({
	compress: {
	  warnings: false
	}
  })
],
//由于压缩后的代码不易于定位错误，配置该项后发生错误时即可采用source-map的形式直接显示你出错代码的位置
devtool: 'eval-source-map',
  //其它解决方案配置
  resolve: {
	// 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀。如require("common")
	extensions: ['.js', '.jsx', '.coffee']
  }
}
