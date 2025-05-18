export interface Property {
  name: string;
  summary: string;
  description: string;
  location: {
    city: string;
    state: string;
    country: string;
  },
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