import {CatalogueItemType} from './catalogueItem.types'

const PurchasedItem = (props: { item: CatalogueItemType }) => {
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
        </tbody>
      </table>
    </li>
  )
}

export {
  PurchasedItem
}
