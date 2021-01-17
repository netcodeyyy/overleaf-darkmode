console.log('Overleaf Dark Mode was injected.');

var body = document.querySelector('body');
body.classList.add("with-custom-webkit-scrollbars");
body.classList.add("with-custom-css-scrollbars");
body.classList.add("dark-mode");

function deleteLayer(elem) {
    if (elem != undefined && elem != null) {
        elem.remove();
    }
}

function observe(target, config){
    target =target || document;
    config = config || { childList: true, subtree: true };
    var ob = new MutationObserver((mutations, observer) => {
        mutations.forEach(record => {
            record.addedNodes.forEach(node => {
                if (node instanceof HTMLElement) {
                    var layer = node.querySelector('.highlights-layer');
                    if (layer != null) {
                        setTimeout(() => deleteLayer(layer), 100);
                    }
                }
            })
        });
    });
    ob.observe(target, config);
}
    
var ide = document.querySelector('#ide-body');
var config = {
    childList: true,
    subtree: true
};

observe(ide, config);