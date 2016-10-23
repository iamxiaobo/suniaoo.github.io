(function() {
  if (location.hostname == 'sunxiaobo.com' && location.hostname !== 'localhost') {
    window.stop() 
    location.replace(location.href.replace(location.hostname, 'www.sunxiaobo.com'))
    // 隐藏所有元素
    document.write("<style>* {display: none;}</style>")
  }
})()
