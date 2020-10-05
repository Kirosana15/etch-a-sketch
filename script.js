const app = document.querySelector('.app');
const button = document.querySelector('button');

window.addEventListener('load', () => {
    button.addEventListener('click', () => {
        while(app.firstChild){
            app.removeChild(app.lastChild);
        }
        let dims;
        while(1){
            dims = prompt('Enter dimensions (max 100):');
            if (dims <= 100 && dims > 0){
                createGrid(dims);
                break;
            }
        }
        
        
    })
    createGrid(20);
});

function createGrid (dims) {
    for (let c = 0; c < dims; c++) {
        for (let r = 0; r < dims; r++){
            const box = document.createElement('div');
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'rgb(0,0,0)';
            })
            app.appendChild(box);
        }
    }
    app.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
}



