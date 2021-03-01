let arrowTop = document.querySelector('.arrowTop');
arrowTop.addEventListener('click', function(){
  window.scrollTo(pageXOffset, 0);
})
window.addEventListener('scroll',function(){
if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
  arrowTop.classList.add('arrow__active');
}else{
  arrowTop.classList.remove('arrow__active');
}
})