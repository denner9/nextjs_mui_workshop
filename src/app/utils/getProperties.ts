import { Property } from "../types/property.interface";

export async function getProperties(count?: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/properties?count=${count}`);

    if (response.ok) {
      const data = await response.json() as Property[];
      return data;
    }

    return null;
  } catch (error) {
    console.error(error)
    return null;
  }
}