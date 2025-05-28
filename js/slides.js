function getSlideWidth() {
    return document.querySelector('.slider-container').clientWidth;
  }
  
  const slider = document.getElementById('slider-list');
  const controls = document.getElementsByClassName('control');
  const items = document.getElementsByClassName('slider-item');
  const len = items.length;
  

  function resizeSlider() {
    const width = getSlideWidth();
  
    // 設定每張圖片寬度
    for (let item of items) {
      item.style.width = `${width}px`;
    }
  
    // 設定總寬度
    slider.style.width = `${width * len}px`;
  
    // 設定目前 active 控制點對應的 left 位置
    const activeIndex = Array.from(controls).findIndex(ctrl =>
      ctrl.classList.contains('active')
    );
    slider.style.left = `${-width * activeIndex}px`;
  }
  
  /**
   * 切換控制點樣式
   */
  function updateControl(index) {
    document.querySelector('.control.active').classList.remove('active');
    controls[index].classList.add('active');
  }
  
  /**
   * 自動切換輪播圖
   */
  function sliderSmooth() {
    const width = getSlideWidth();
    const left = parseInt(slider.style.left || '0', 10);
    const currentIndex = Math.abs(left / width);
    const nextIndex = currentIndex >= len - 1 ? 0 : currentIndex + 1;
  
    slider.style.left = `${-width * nextIndex}px`;
    updateControl(nextIndex);
  }
  
  /**
   * 點擊控制點切換圖片
   */
  for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function () {
      const width = getSlideWidth();
      slider.style.left = `${-width * i}px`;
      updateControl(i);
    });
  }
  
  /**
   * 初始化與響應式監聽
   */
  window.addEventListener('DOMContentLoaded', resizeSlider);
  window.addEventListener('resize', resizeSlider);
  setInterval(sliderSmooth, 2500);
  