import './style/index.less'

document.addEventListener('click', function (e) {
  document.documentElement.className = e.srcElement.dataset.skin 
})