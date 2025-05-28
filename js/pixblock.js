// 取得所有圖片
const imgs = document.querySelectorAll('img');

// 為每個圖片建立滑鼠移入事件
imgs.forEach(function (img) {
    img.addEventListener('mouseover', function () {
        // 先將所有圖片加上暗色系類別
        addAllDark();
        // 將當前的圖片移除暗色系類別
        this.classList.remove('dark');
    });
    img.addEventListener('mouseout', function () {
        // 先將所有圖片加上暗色系類別
        removeAllDark();
    });
});

// 將所有圖片加入暗色系類別
function addAllDark() {
    imgs.forEach(function (img) { img.classList.add('dark'); });
}

// 將所有圖片移除暗色系類別
function removeAllDark() {
    imgs.forEach(function (img) { img.classList.remove('dark'); });
}