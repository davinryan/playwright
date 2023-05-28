interface CatalogueItemType {
  id: string;
  name: string;
  price: {
    value: number;
    currency: string;
  },
  description: string;
  quantity: number;
  attributes: [
    {
      size: number;
      style: string;
    }
  ]
}

export {
  CatalogueItemType
}