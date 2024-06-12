const uuid = (pre?: string, length: number = 5): string => {
    let id: string = ''
    Array.from({length}).some(() => {
        id += Math.random().toString(36).slice(2)
        return id.length >= length
    })
    return `${pre}-${id.slice(0, length)}`
}
export {uuid}