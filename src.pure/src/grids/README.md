Pure Grids
==========

Pure Grids ship with build-in 5ths- and 24ths-based units styles. The unit style
rules are generated via Pure's [`rework-pure-grids`][rework-pure-grids]
[Rework][] plugin.

The tooling used by Pure to generate its built-in Grids can also be used to
create custom Grids that use any nth-unit base.


[rework-pure-grids]: https://github.com/ericf/rework-pure-grids
[Rework]: https://github.com/visionmedia/rework

栅格	

	删除与单元格 class: .pure-g, .pure-u, .pure-u-* 组成

	.pure-g 子元素必须是 .pure-u

	内容在 .pure-u 中

	.pure-u-* 的宽度是分数，.pure-u-1-2 为 50%，.pure-u-1-5 为 20%

	支持 5 列和 24 列

	移动端优先

相对长度单位 em
	
	考虑到媒体查询能适应网页的缩放

	1em == 16px *

	* em 转 px 是基于浏览器的默认字体大小，一般是16px，但是也可能在浏览器设置里被修改了。

设置单元格的 padding, border

	1、
	
		.1-box {
			padding: 1em;
		}
		
		<div class="pure-g">
			<div class="pure-u-1-2">
				<div class="1-box">...</div>
			</div>
			<div class="pure-u-1-2">
				<div class="1-box">...</div>
			</div>
		</div>

	2、box-sizing

		.pure-g > div {
			box-sizing: border-box;	// -moz-, -webkit-
		}
		.1-box {
			padding: 1em;
		}

		<div class="pure-g">
			<div class="pure-u-1-2 1-box">...</div>
			<div class="pure-u-1-2 1-box">...</div>
		</div>

		问题：1、box-sizing 浏览器支持问题。 2、单元格样式全覆盖后的取消问题

font-family
	
	使用特定的字体栈来最大限度兼容苹果os的浏览器

	/*
	设置主要字体栈的时候，要对单元格和这些元素都进行设置`html`, `button`, `input`, `select`, 和 `textarea`。
	*/
	html, button, input, select, textarea,
	.pure-g [class *= "pure-u"] {
	    /* 字体栈写在这: */
	    font-family: Georgia, Times, "Times New Roman", serif;
	}


build/grids-core.css = grids/grids-core.css

build/grids-units.css - 响应式

build/grids.css - grids/grids-core.css + build/grids-units.css

build/grids-responsive.css - 响应式（display: inline-block; + width) -xl-, -lg-, -md-, -sm-

build/grids-responsive-old-ie.css - IE8 及以下浏览器的响应式


想法： class="sm-* md-* lg-* xl-* col-*" 去掉前缀, class="grid" 替换 .pure-g