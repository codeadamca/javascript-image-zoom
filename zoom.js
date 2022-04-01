
const zoomTarget = document.getElementById('zoom-target');
const zoomMag = document.getElementById('zoom-mag');

zoomTarget.addEventListener('mousemove', e => {

    e.preventDefault();

    console.log(e);

    let x = e.offsetX;
    let y = e.offsetY;

    console.log(e.offsetX);

    x -= zoomMag.offsetWidth / 2;
    y -= zoomMag.offsetHeight / 2;

    if(x < 0) x = 0;
    if(x > zoomTarget.offsetWidth - zoomMag.offsetWidth) 
        x = zoomTarget.offsetWidth - zoomMag.offsetWidth;

    if(y < 0) y = 0;
    if(y > zoomTarget.offsetHeight - zoomMag.offsetHeight) 
        y = zoomTarget.offsetHeight - zoomMag.offsetHeight;

    zoomMag.style.left = x + 'px';
    zoomMag.style.top = y + 'px';



});
