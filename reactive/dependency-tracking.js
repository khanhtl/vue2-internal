export class Dep {
    constructor() {
        this.subcribers = new Set()
    }
    depen() {
        if (activeUpdate) { 
            this.subcribers.add(activeUpdate)
        }
    }

    notify() {
        this.subcribers.forEach(fn => {
            fn()
        });
    }
}

let activeUpdate;

export function autorun(update) {
    function wrapperUpdate() {
        activeUpdate = wrapperUpdate
        update();
        activeUpdate = null 
    }
    wrapperUpdate();
}