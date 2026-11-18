// 스크롤 위치에 따라 Hero 섹션 텍스트가 서서히 사라지며 위로 움직이는 효과
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {
        // 스크롤이 내려갈수록 투명도(opacity)가 낮아지고 아래로 살짝 밀림
        heroContent.style.opacity = 1 - (scrollPosition / 500);
        heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
});