(function () {
  if (location.hostname === 'sunxiaobo.com') {
    window.stop()
    location.replace(location.href.replace('sunxiaobo.com',
        'www.sunxiaobo.com'))
      // 隐藏所有元素
    document.write("<style>* {display: none;}</style>")
  }
})()
