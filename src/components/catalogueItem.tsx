import {CatalogueItemType} from './catalogueItem.types'

const CatalogueItem = (props: { item: CatalogueItemType, purchaseItem: (item: CatalogueItemType) => void }) => {
  const {item} = props
  return (
    <li>
      <table>
        <tbody>
          <tr>
            <td>
              <b>Item:</b>
            </td>
            <td>
              {item.name}
            </td>
          </tr>
          <tr>
            <td>
              <b>Description:</b>
            </td>
            <td>
              {item.description}
            </td>
          </tr>
          <tr>
            <td>
              <b>Cost:</b>
            </td>
            <td>
              {item.price.value}&nbsp;{item.price.currency}
            </td>
          </tr>
          <tr>
            <td>
              <b>Items Remaining:</b>
            </td>
            <td>
              {item.quantity}
            </td>
          </tr>
          <tr>
            <td><button onClick={() => props.purchaseItem(item)}>Purchase</button></td>
          </tr>
        </tbody>
      </table>
    </li>
  )
}

export {
  CatalogueItem
}
