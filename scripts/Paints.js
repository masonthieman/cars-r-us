
import { getPaints, setPaints } from "./database.js"

const paints = getPaints()
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenOption = changeEvent.target.value
            setPaints(parseInt(chosenOption))
        }
    }
)
export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += `<select id="paint">`
    html += `<option value="0">Select a paint color</option>`

    const arrayOfOptions = paints.map( (paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}