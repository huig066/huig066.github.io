(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;
    let mouseX = innerWidth / 2, mouseY = innerHeight / 2, ringX = mouseX, ringY = mouseY;
    addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; dot.style.transform = `translate3d(${mouseX}px,${mouseY}px,0) translate(-50%,-50%)`; });
    function animate(){ ringX += (mouseX-ringX)*.18; ringY += (mouseY-ringY)*.18; ring.style.transform = `translate3d(${ringX}px,${ringY}px,0) translate(-50%,-50%)`; requestAnimationFrame(animate); } animate();
    document.querySelectorAll('a,button,.project-card,.skill-card').forEach(el => { el.addEventListener('mouseenter',()=>{ring.classList.add('hover');dot.classList.add('hover')}); el.addEventListener('mouseleave',()=>{ring.classList.remove('hover');dot.classList.remove('hover')}); });
    addEventListener('mousedown',()=>{ring.classList.add('click');dot.classList.add('click')}); addEventListener('mouseup',()=>{ring.classList.remove('click');dot.classList.remove('click')});
    document.addEventListener('mouseleave',()=>{ring.classList.add('cursor-hidden');dot.classList.add('cursor-hidden')}); document.addEventListener('mouseenter',()=>{ring.classList.remove('cursor-hidden');dot.classList.remove('cursor-hidden')});
})();
