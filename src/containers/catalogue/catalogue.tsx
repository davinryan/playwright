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
      if (response.status > 199 && response.status < 300) {
        const data = await response.json()
        if (data.data instanceof Array) {
          return data.data
        }
      }
      return []
    } catch( error: unknown) {
      console.warn(`Failed to fetch items from catalogue service. Error was ${error}`)
      return Promise.resolve([])
    }
  }

  const purchaseItem = (item: CatalogueItemType) => {
    setPurchasedItems([...purchasedItems, item])
  }

  const refreshItems = () => {
    console.log('Refreshing catalogue...')
    getItems().then((items: CatalogueItemType[]) => {
      setItems(items)
      console.log('Catalogue refreshed')
    })
  }

  useEffect(() => {
    refreshItems()
  }, [])
  return (
    <div>
      <button data-testid={`catalogue_refresh`} onClick={refreshItems}>Refresh</button>
      <CatalogueItems items={items} purchaseItem={purchaseItem} />
      <PurchaseSummary items={purchasedItems}/>
    </div>
  )
}

export default Catalogue
