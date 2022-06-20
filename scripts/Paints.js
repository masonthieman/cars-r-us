
export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += `<select id="paint">`
    html += `<option value="0">Select a paint color</option>`

    const arrayOfOptions = paints.map( (paint) => {
        return `<option value="${pain.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}