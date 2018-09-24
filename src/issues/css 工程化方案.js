css 技术演进

	预处理

		开发者编写简洁的语义化DSL代码，由预处理器编译成CSS。

		sass, less, stylus

	后处理
		
		对原生CSS进行处理并最终生成CSS的处理器

		postcss

namespace约束 - 结构风格

	OOCS（Object-Oriented CSS）即面向对象CSS，主要有两个核心原则。

		分离结构和皮肤（Separate Structure and Skin）

			皮肤即一些重复的视觉特征，如边框、背景、颜色，分离是为了更多的复用；结构是指元素大小特征，如高度、宽度、边距等等。 

			.skin { box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px; }

			.p-10 { padding: 10px; }

		分离容器和内容（Separate Container an Content）

			打破容器内元素对于容器的依赖(.container h2 { .. })，元素样式应该独立存在(.category { ... })。

			<div class="container"><h2 class="category">xxx</h2></div>

	SMACSS（Scalable and Modular Architecture for CSS）即模块化架构的可扩展CSS，它主要将规则分为五类。

		基础（Base）- 定义最基础全局样式， 如CSS REST。

			html, body, form { margin: 0; padding: 0; }

		布局（Layout）- 将页面分为各个区域的元素块。

			.header { ... } .footer { ... }

		模块（Module）- 可复用的单元。在模块中，需要注意的是选择器一律选择class selector，避免嵌套子选择器，减少权重， 方便外部覆盖。

			.pod .pod-callout { width: 200px; }

		状态（State）- 状态class一般通过JavaScript动态挂载到元素上，可以根据状态覆盖元素上特定属性。

			.tab { background-color: purple;... }
			.is-tab-active { background-color:white; }

		主题（Theme）- 可选的视觉外观。一般根据需求有颜色、字体、布局等等，实现是将这些样式单独抽出来，根据外部条件（data属性、媒体查询等）动态设置。

	BEM 即 Block Element Modifier，类名命名规则为 Block__Element--Modifier。

		Block所属组件名称

		Element组件内元素名称

		Modifier元素或组件修饰符

		.form__submit--disabled { ... }, .form--theme-xmas { ... }

	AMCSS（CSS属性模式）--- Attribute Modules for CSS的缩写，借助HTML属性来进行CSS相关开发

		http://amcss.github.io/

		https://github.com/benschwarz/am-grid

		[am-button] { ... }				// am-button

		[am-button~="large"] { ... }	// ~= 为包含单词 large 

CSS in JS
	
	CSS Module

		import style from './header.css'
		export default () => <div className={ style.header }></div>

		{
			loader: 'css-loader',	// css-loader 内置支持 CSS Module，需设置参数
			query: {
				module: true,
				localInentName: '[name]__[local]--hash:base64:5]'
			}
		}

	styled-components

		vue-styledcomponents
	