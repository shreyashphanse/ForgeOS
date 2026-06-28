import { useState } from "react";
import api from "../services/api";

interface Business {
  id: number;
  name: string;
  address: string;
  rating?: number;
  website: boolean;
  phone?: string;
  email?: string;
}

function Discovery() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  async function fetchBusinesses() {
    if (!city.trim() || !category.trim()) {
      alert("Please enter both city and category.");
      return;
    }

    try {
      const res = await api.get("/discovery/search", {
        params: {
          city,
          category,
        },
      });

      setBusinesses(res.data);
    } catch (err) {
      console.error("Error fetching businesses:", err);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Discovery</h1>

        <p className="text-slate-400">Find businesses that need a website.</p>
      </div>

      {/* Search Controls */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter City (e.g. Vasai)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4"
        >
          <option value="">Select Category</option>
          <option value="cafe">Cafe</option>
          <option value="restaurant">Restaurant</option>
          <option value="gym">Gym</option>
          <option value="salon">Salon</option>
          <option value="hotel">Hotel</option>
          <option value="hospital">Hospital</option>
        </select>

        <button
          onClick={fetchBusinesses}
          className="rounded-xl bg-blue-600 px-8 hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="rounded-xl border border-slate-700 bg-slate-900 p-5"
          >
            <h2 className="text-xl font-semibold">{business.name}</h2>

            <p className="text-slate-400">{business.address}</p>

            {business.rating !== undefined && (
              <p className="mt-2">⭐ {business.rating}</p>
            )}

            {business.phone && <p>📞 {business.phone}</p>}

            {business.email && <p>📧 {business.email}</p>}

            <p
              className={`mt-3 font-semibold ${
                business.website ? "text-red-400" : "text-green-400"
              }`}
            >
              {business.website ? "Website Found" : "No Website"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discovery;
