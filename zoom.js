
const zoomTarget = document.getElementById('zoom-target');
const zoomMag = document.getElementById('zoom-mag');

const zoomViewer = document.getElementById('zoom-viewer');
const zoomImage = document.getElementById('zoom-image');

zoomTarget.addEventListener('mousemove', e => {

    e.preventDefault();

    let rect = e.currentTarget.getBoundingClientRect(); 

    let x = e.clientX - rect.x;
    let y = e.clientY - rect.y;

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

    let xPercent = x / ( zoomTarget.offsetWidth - zoomMag.offsetWidth );
    let yPercent = y / ( zoomTarget.offsetHeight - zoomMag.offsetHeight );

    let imageX = ( zoomImage.offsetWidth - zoomViewer.offsetWidth ) * xPercent;
    let imageY = ( zoomImage.offsetHeight - zoomViewer.offsetHeight ) * yPercent;

    zoomImage.style.left = -imageX + 'px';
    zoomImage.style.top = -imageY + 'px';


});
