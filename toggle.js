// Changing Bg color
const toggleBg = document.getElementById('toggle-bg');
const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200','bg-yellow-200', 'bg-purple-200', 'bg-pink-200',"bg-[#F4F7FF]"];

toggleBg.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.classList.remove(...colors);
    document.body.classList.add(randomColor);
})

//Discover blog Task Summary
const discover = document.getElementById('discover');
discover.addEventListener('click', function (){
    window.location.href = 'blog.html'
})

const backDesk = document.getElementById('back-desk');
backDesk.addEventListener('click', function (){
    window.location.href = 'index.html'
})