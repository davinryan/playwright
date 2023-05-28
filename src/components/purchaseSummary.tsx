import {CatalogueItemType} from './catalogueItem.types'
import {PurchasedItem} from './purchasedItem'

const PurchaseSummary = (props: { items: CatalogueItemType[] }) => {
  return (
    <div>
      <h2>Purchased Items</h2>
      <ul>
        {props.items.map((item: CatalogueItemType) => (
          <PurchasedItem item={item} key={`${item.name}${Math.random() * 1000}`}/>)
        )}
      </ul>
    </div>
  )
}

export {
  PurchaseSummary
}
