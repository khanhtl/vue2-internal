export function convert(obj) {
    Object.keys(obj).forEach(key => {
        let internalValue = obj[key];
        Object.defineProperty(obj, key, {
            get() {
                console.log(`getting key "${key}": ${internalValue}`);
                return internalValue;
            },
            set(newValue) {
                console.log(`setting key "${key}" to: ${newValue}`);
                internalValue = newValue;
            }
        })
    });
}