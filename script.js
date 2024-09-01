document.addEventListener('DOMContentLoaded', function() {
    // Hide the loading screen when the page is fully loaded
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    });

    // 新增：點擊圖片時添加動畫效果
    const images = document.querySelectorAll('.preview-image');
    images.forEach(image => {
        image.addEventListener('click', function() {
            this.classList.add('animate');
            // 這裡可以添加其他預覽邏輯
        });
    });
});

// const box = document.querySelector('.box');

// box.addEventListener('mouseover', () => {
//     box.style.borderWidth = '10px'; 
// });

// box.addEventListener('mouseout', () => {
//     box.style.borderWidth = '10px';
// });
