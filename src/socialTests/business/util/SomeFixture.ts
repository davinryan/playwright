import { v4 as uuidv4 } from "uuid";

export class SomeFixture {
  private static uniqueNumber: number = 1;

  someUuid(): string {
    return uuidv4();
  }

  someUniqueNumber(): number {
    return SomeFixture.uniqueNumber++;
  }

  someString(label: string): string {
    return `some${label}-${Date.now()}`;
  }

  someObjectId(): string {
    return `${uuidv4()}`;
  }

  someObject(data: string): object {
    return { id: uuidv4(), data };
  }

  someEmail(label: string): string {
    return `${uuidv4()}${label}@example.com`;
  }

  someDate(): Date {
    return new Date();
  }

  static make(): SomeFixture {
    return new SomeFixture();
  }
}
