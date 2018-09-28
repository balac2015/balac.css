
// 尺寸 < 2k，base64 形式背景，语法 "data:image/svg+xml;base64," + 
.icon-arrow-down {
    width: 20px; height: 20px;
    background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cGF0aCBmaWxsPSIjMjQ4NmZmIiBkPSJNMTQ1LjY1OSw2OC45NDljLTUuMTAxLTUuMjA4LTEzLjM3Mi01LjIwOC0xOC40NzMsMEw5OS40NzksOTcuMjMzIEw3MS43NzIsNjguOTQ5Yy01LjEtNS4yMDgtMTMuMzcxLTUuMjA4LTE4LjQ3MywwYy01LjA5OSw1LjIwOC01LjA5OSwxMy42NDgsMCwxOC44NTdsNDYuMTgsNDcuMTRsNDYuMTgxLTQ3LjE0IEMxNTAuNzU5LDgyLjU5OCwxNTAuNzU5LDc0LjE1NywxNDUuNjU5LDY4Ljk0OXoiLz48L3N2Zz4NCg==) 
    	no-repeat center/100%;
}

// svg 内联，语法 "data:image/svg+xml;utf8," + svg
.icon-arrow-down
    width: 20px; height: 20px;
    background: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><path fill="#00A5E0" d="M145.659,68.949c-5.101-5.208-13.372-5.208-18.473,0L99.479,97.233 L71.772,68.949c-5.1-5.208-13.371-5.208-18.473,0c-5.099,5.208-5.099,13.648,0,18.857l46.18,47.14l46.181-47.14 C150.759,82.598,150.759,74.157,145.659,68.949z"/></svg>') 
    	no-repeat center;
    background-size: 100%;
}

// svg 内联，IE 下需要对 SVG 转义部分字符，需要转义的大多数字符："，%，#，{，}，<，>
encodeURIComponent('<svg version="1.1" ...</svg>')