import {CatalogueItemType} from './catalogueItem.types'

const PurchasedItem = (props: { item: CatalogueItemType }) => {
  const {item} = props
  return (
    <li>
      <table>
        <tbody>
        <tr>
          <td>
            <span data-testid={`purchasedItem_${item.id}`}>You have purchased '{item.name}'</span>
          </td>
        </tr>
        </tbody>
      </table>
    </li>
  )
}

export {
  PurchasedItem
}
