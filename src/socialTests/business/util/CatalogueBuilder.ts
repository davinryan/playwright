import {SomeFixture} from './SomeFixture'

class CatalogueBuilder {
  private response: any
  private someFixture: SomeFixture

  static make = (): CatalogueBuilder => {
    return new CatalogueBuilder()
  }

  private constructor(someFixture: SomeFixture = new SomeFixture()) {
    this.someFixture = someFixture
    this.response = {
      total: 0,
      page: 1,
      limit: 200,
      data: [],
    }
  }

  addItem(id: string, name: string, value: number, currency: string,  description: string, quantity: number): CatalogueBuilder {
    this.response.data = [
      ...this.response.data,
      {
        id,
        name,
        price: {
          value,
          currency
        },
        description,
        quantity
      },
    ]
    this.response.total = this.response.total + 1
    return this
  }

  build() {
    return this.response
  }

  hasServer500Error() {
    this.response = "Catalogue list unavailable"
    return this
  }
}

export {CatalogueBuilder}
