export interface Property {
  name: string;
  summary: string;
  description: string;
  location: Location,
  propertyDetails: {
    rooms: string,
    bathrooms: string,
    area: string,
    areaUnitsOfMeasurement: string
  },
  images: {
    main: string,
    otherImages: string[]
  },
  priceDetails: {
    amount: number,
    currencySymbol: string
  }
}

type Location = {
  city: string;
  state: string;
  country: string;
}
    