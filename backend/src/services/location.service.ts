import "dotenv/config";
import axios from "axios";

const API_KEY = process.env.GEOAPIFY_API_KEY!;

const CATEGORY_MAP: Record<string, string> = {
  cafe: "catering.cafe",
  restaurant: "catering.restaurant",
  gym: "sport.fitness",
  salon: "service.beauty",
  hotel: "accommodation.hotel",
  hospital: "healthcare.hospital",
};

export async function searchLocation(city: string, category: string) {
  // ---------- STEP 1 : Get City Coordinates ----------

  const geoResponse = await axios.get(
    "https://api.geoapify.com/v1/geocode/search",
    {
      params: {
        text: city,
        limit: 1,
        apiKey: API_KEY,
      },
    },
  );

  if (!geoResponse.data.features.length) {
    return [];
  }

  const [longitude, latitude] =
    geoResponse.data.features[0].geometry.coordinates;

  // ---------- STEP 2 : Search Businesses ----------

  const placesResponse = await axios.get("https://api.geoapify.com/v2/places", {
    params: {
      categories: CATEGORY_MAP[category] ?? "commercial",

      filter: `circle:${longitude},${latitude},5000`,

      limit: 20,

      apiKey: API_KEY,
    },
  });

  return placesResponse.data.features;
}
