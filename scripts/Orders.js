import { getMetals, getOrders, getSizes, getStyles, } from "./database.js"
import { addCustomOrder, getCustomOrders } from "./database.js"

const orders = getCustomOrders() = () => {

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

const buildOrderListItem = (order) => {


    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()


    const metal = getMetals()
    const foundMetal = metals.find(
        (metal) => {
            if (metal.id === order.metalId)
                return true
        }
    )

    const style = getStyles()
    const foundStyle = styles.find(
        (style) => {
            if (style.id === order.styleId)
                return true
        }
    )

    const size = getSizes()
    const foundSize = sizes.find(
        (size) => {
            if (size.id === order.sizeId)
                return true
        }
    )
    const totalCost = (foundSize.price + foundStyle.price + foundMetal.price)
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
      return  `<li>
                Order #${order.id} cost ${costString}
                </li>`

}

// return `<li>
//     Order #${order.id} was placed on ${order.timestamp}
// </li>`

export const Orders = () => {
}
