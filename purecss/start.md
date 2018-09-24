兼容： ie8+, firefix, chrome, safari, ios6-8, android4.x

https://www.purecss.cn/start.html

https://github.com/pure-css/pure

引入：
	
	cdn

viewport meta 元素
	
	控制移动端浏览器的宽度和缩放。为了自适应设备的宽度

	<meta name="viewport" content="width=device-width, initial-scale=1">

栅格
	
	<!--[if lte IE 8]>
	    <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/grids-responsive-old-ie-min.css">
	<![endif]-->
	<!--[if gt IE 8]><!-->
	    <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/grids-responsive-min.css">
	<!--<![endif]-->

	.pure-g 创建行

	.pure-u-* 创建列

响应判断
	
	.pure-u-* 适用于所有
	
	sm: 
		.pure-u-sm-* 
		>=568px 
		@media screen and (min-width: 35.5em)

	md:
		.pure-u-md-*
		>=768px
		@media screen and (min-width: 48em)

	lg:
		.pure-u-lg-*
		>=1024px
		@media screen and (min-width: 64em)

	xl:
		.pure-u-xl-*
		>=1280px
		@media screen and (min-width: 80em)

build 文件
	
	[module]-core.css：最小的样式集，通常是结构样式，提供模块其余部分构建的基础。

	[module]-nr.css：来自dir 的[module]-core.css+ [module].css+ 汇总。这是模块的非响应版本。[module]-[feature].csssrc/[module]/

	[module].css：来自 dir 的[module]-nr.css+ 汇总。这是模块的响应版本。[module]-r.cssbuild/

	*-min.css：同名文件的缩小文件版本。

	pure.css：目录中所有[module].css文件的汇总build/。这是对所有事物的响应式汇总，非缩小。注意：不包含带@media查询的响应式网格。

	pure-min.css：pure.css应该在生产中使用它的缩小版本。

	pure-nr.css：没有@media查询的所有模块的汇总。这是对所有事物的非响应性汇总，非缩小。

	pure-nr-min.css：pure-nr.css应该在生产中使用它的缩小版本。

	grids-responsive.css：Pure的网格样式表的未经授权的版本，其中包括@media查询。

	grids-responsive-min.css：grids-responsive.css应该在生产中使用它的缩小版本。

keywords: css, mobile-first, pure, purecss, responsive, front-end, framework, web	

基础：base-min.css, 按钮：buttons-min.css, 表：tables-min.css
表格（响应）：forms-min.css, 表格（非响应）：forms-nr-min.css
网络（基础）：grids-min.css, 网格（响应）：grids-responsive-min.css
菜单（响应）：menus-min.css, 菜单（非响应）：menus-nr-min.css

工具：tools, 定制：customize, 扩展：extend