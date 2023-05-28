import {CatalogueItem} from './catalogueItem'
import {CatalogueItemType} from './catalogueItem.types'

const CatalogueItems = (props: { items: CatalogueItemType[], purchaseItem: (item: CatalogueItemType) => void }) => {
  if (props.items.length > 0) {
    return (
      <div>
        <h2>Our Catalogue</h2>
        <ul>
          {props.items.map((item: CatalogueItemType) => (
            <CatalogueItem item={item} key={item.id} purchaseItem={props.purchaseItem}/>)
          )}ML
        </ul>
      </div>
    )
  }
    return (
      <p data-testid={`catalogueItems_outageError`}>There is currently an outage. Please try again in 10 minutes.</p>
    )
}

export {
  CatalogueItems
}
