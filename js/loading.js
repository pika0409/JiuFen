
window.addEventListener("load", () => {
const loader = document.getElementById("page-loader");
const content = document.getElementById("main-content");

setTimeout(() => {
    loader.classList.add("hidden");

    // 等 CSS transition 結束再移除節點 & 顯示內容
    setTimeout(() => {
    loader.remove();
    content.style.display = "block";
    }, 500); // 與 CSS 的 transition 時間一致
}, 3000); // 延遲 3 秒
});
