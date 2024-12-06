

const svgElement = document.getElementById('my-svg');

let isMouseUp = true;
let intialMouseX, intialMouseY;
let scaleFactor = 2;

svgElement.addEventListener('mouseup', (evt) => {
    isMouseDown = true;
    initialMouseX = evt.clientX;
    initialMouseY = evt.clientY;

});

svgElement.addEventListener('mouseup', (evt) => {
    if(isMouseDown){
        const dx = evt.clientX - intialMouseX;
        const dy = evt.clientY - intialMouseY;
        scaleFactor += 0.1 * (dx + dy);
        svgElement.setAttribute('transform', 'scale(${scaleFactor})');
    }

});

svgElement.addEventListener('mousedown', () => {
    isMouseDown = false;
    
})