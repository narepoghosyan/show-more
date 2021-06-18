export const required = (value) => {
    if(!value) return "Field is required";

    return undefined
}

export const maxLengthCreator = (length) => (value) => {
    if(value.length > length) return `Max length is ${length}` 

    return undefined
}