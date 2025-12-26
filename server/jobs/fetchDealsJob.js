import Deal from "../models/Deal.js";
import fetchFromApi from "./fetchFromApi.js";

const fetchDealsJob = async () => {
  console.log("🔄 Fetching real deals...");

  try {
    const deals = await fetchFromApi();

    for (let deal of deals) {
      const exists = await Deal.findOne({
        title: deal.title,
      });

      if (exists) {
        console.log("⏭️ Duplicate skipped:", deal.title);
        continue;
      }

      await Deal.create(deal);
      console.log("✅ Deal added:", deal.title);
    }

    console.log("✅ Real source job finished");
  } catch (error) {
    console.error("❌ Job error:", error.message);
  }
};

export default fetchDealsJob;
