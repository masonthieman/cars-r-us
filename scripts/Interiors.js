
export const Interiors = () => {
    let html = "<h2>Interiors</h2>"
    
    html += `<select id="interior">`
    html += `<option value="1">Select an interior package</option>`

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.package}</option>`
    }

    html += "</select>"
    return html
}