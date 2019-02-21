class Router {
    constructor(){
        window.addEventListener("hashchange", e => this.onRouteChange(e));
        this.slot = document.querySelector('#slot');
    }

    onRouteChange(e){
        const hashLocation = window.location.hash.substring(1);
        console.log(hashLocation);
        this.loadContent(hashLocation);
    }

    loadContent(uri){
        
        const contentUri = `${uri}/index.html`;
        
        fetch(contentUri)
            .then(r => r.text())
            .then(content => this.updateSlot(content));
    }

    updateSlot(content){
        this.slot.innerHTML = content;
    }
}

new Router();