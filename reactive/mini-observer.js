class Dep {
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
export function observer(obj) {
    const dep = new Dep();
    Object.keys(obj).forEach(key => {
        let internalValue = obj[key];
        Object.defineProperty(obj, key, {
            get() {
                dep.depen()
                return internalValue;
            },
            set(newValue) {
                internalValue = newValue;
                dep.notify()
            }
        })
    });
}