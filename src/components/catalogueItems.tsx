import {CatalogueItem} from './catalogueItem'
import {CatalogueItemType} from './catalogueItem.types'

const CatalogueItems = (props: { items: CatalogueItemType[], purchaseItem: (item: CatalogueItemType) => void }) => {
  return (
    <div>
      <h2>Our Catalogue</h2>
      <ul>
        {props.items.map((item: CatalogueItemType) => (
          <CatalogueItem item={item} key={item.name} purchaseItem={props.purchaseItem}/>)
        )}
      </ul>
    </div>
  )
}

export {
  CatalogueItems
}
