export interface Customer {
  id: number;
  name: string;
  catchPhrase: string;
  address: {
    street1: string;
    city: string;
    state: string;
    zip: string;
  };
}
