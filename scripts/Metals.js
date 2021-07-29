import { getMetals, setMetal } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)


export const metals = getMetals()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//             window.alert(`User chose metal ${event.target.value}`)
//         }
//     }
// )

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listItemsArray = metals.map(metal => {
        return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"

    return html
}



// Remember that the function you pass to find() must return true/false


