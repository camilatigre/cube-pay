export const filterFieldsEmpty = (fields) => {
    for (const prop in fields) {
        if (fields[prop] === "") {
            delete fields[prop];
        }
    }
}