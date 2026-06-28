import { Router } from "express";
import { searchBusinesses } from "../services/discovery.service.js";

const router = Router();

router.get("/search", async (req, res) => {
  try {
    const city = String(req.query.city || "");
    const category = String(req.query.category || "");

    if (!city || !category) {
      return res.status(400).json({
        message: "City and category are required.",
      });
    }

    const businesses = await searchBusinesses(city, category);

    res.json(businesses);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch businesses.",
    });
  }
});

export default router;
