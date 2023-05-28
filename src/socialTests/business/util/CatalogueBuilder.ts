import { SomeFixture } from "./SomeFixture";

class CatalogueBuilder {
  private response: any;
  private someFixture: SomeFixture;

  static make = (): CatalogueBuilder => {
    return new CatalogueBuilder();
  };

  private constructor(someFixture: SomeFixture = new SomeFixture()) {
    this.someFixture = someFixture;
    this.response = {
      total: 0,
      page: 1,
      limit: 200,
      data: [],
    };
  }

  addGroup(group?: any): CatalogueBuilder {
    this.response.data = [
      ...this.response.data,
      {
        seqGroupId: this.someFixture.someUniqueNumber(),
        groupId: this.someFixture.someString("300125_P"),
        groupName: this.someFixture.someString("ZWS T XBNZ PVTBMHJWGLXC"),
        levelCode: "2",
        levelDescription: "Super Group",
        parentGroupId: null,
        activeIndicator: "Y",
        stopNewPoliciesIndicator: "N",
        allowAdultDependencyIndicator: "Y",
        healthConnectIndicator: "N",
        healthConnectColour: null,
        healthConnectGroupStartDate: null,
        healthConnectGroupEndDate: null,
        ...group,
      },
    ];
    this.response.total = this.response.total + 1;
    return this;
  }

  build() {
    return this.response;
  }
}

export { CatalogueBuilder };
