import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            const chosenOption = changeEvent.target.value
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)
export const Wheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheel">
            <option value="0">Select a wheel type</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.type}`
                    }
                )
            }`
}