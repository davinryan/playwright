import {useEffect, useState} from 'react'
import {CatalogueItems} from '../../components/catalogueItems'
import {CatalogueItemType} from '../../components/catalogueItem.types'
import {PurchaseSummary} from '../../components/purchaseSummary'

const Catalogue = () => {
  const [items, setItems] = useState([])
  const [purchasedItems, setPurchasedItems] = useState([])

  const getItems = async () => {
    try {
      const response = await fetch(`${process.env.CATALOGUE_ENDPOINT}/items`);
      const data = await response.json()
      return data.data
    } catch( error: unknown) {
      console.warn(`Failed to fetch items from catalogue service. Error was ${error}`)
      return Promise.resolve([])
    }
  }

  const purchaseItem = (item: CatalogueItemType) => {
    setPurchasedItems([...purchasedItems, item])
  }

  useEffect(() => {
    getItems().then((items: CatalogueItemType[]) => {
      setItems(items)
    })
  }, [])
  return (
    <div>
      <CatalogueItems items={items} purchaseItem={purchaseItem} />
      <PurchaseSummary items={purchasedItems}/>
    </div>
  )
}

export default Catalogue
