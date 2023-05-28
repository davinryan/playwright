import {CatalogueItem} from './catalogueItem'
import {CatalogueItemType} from './catalogueItem.types'

const CatalogueItems = (props: { items: CatalogueItemType[] }) => {
  return (
    <div>
      <h2>Our Catalogue</h2>
      <ul>
        {props.items.map((item: CatalogueItemType) => (<CatalogueItem item={item} key={item.name}/>))}
      </ul>
    </div>
  )
}

export {
  CatalogueItems
}
