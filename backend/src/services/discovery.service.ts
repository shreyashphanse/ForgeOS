import { searchLocation } from "./location.service.js";

export async function searchBusinesses(city: string, category: string) {
  const places = await searchLocation(city, category);

  return places.map((place: any, index: number) => ({
    id: index + 1,
    name: place.properties.name ?? "Unknown",
    address: place.properties.formatted ?? "",
    phone: place.properties.phone ?? null,
    website: !!place.properties.website,
    email: place.properties.email ?? null,
    latitude: place.properties.lat,
    longitude: place.properties.lon,
  }));
}
