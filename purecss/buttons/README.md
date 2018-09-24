按钮 a、button

.pure-button

.pure-button.pure-button-disabled 禁用

.pure-button.pure-button-active 激活按钮

.pure-button.pure-button-primary 最常用按钮

自定义颜色和圆角：
	
	.button-success,
	.button-error,
	.button-warning,
	.button-secondary {
		color: white;
		border-radius: 4px;
		text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	}
	.button-success {
        background: rgb(28, 184, 65); /* this is a green */
    }

    .button-error {
        background: rgb(202, 60, 60); /* this is a maroon */
    }

    .button-warning {
        background: rgb(223, 117, 20); /* this is an orange */
    }

    .button-secondary {
        background: rgb(66, 184, 221); /* this is a light blue */
    }

自定义大小：
	
	.button-sxmall { font-size: 70%; }
	.button-small { font-size: 85%; }
	.button-large { font-size: 110%; }
	.button-xlarge { font-size: 125%; }   

添加图标：font awesome（https://fontawesome.com/?from=io） 

build/buttons.css = buttons/buttons-core.css + buttons/buttons.css

build/buttons-core.css = buttons/buttons-core.css