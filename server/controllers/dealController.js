import Deal from "../models/Deal.js";


export const getAllDeals = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;
    const skip = (page - 1) * limit;

   const filter = {};

if (req.query.category) {
  filter.category = req.query.category;
}

if (req.query.search) {
  filter.title = { $regex: req.query.search, $options: "i" };
}


    const deals = await Deal.find(filter)
      .sort({ createdAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);

    const total = await Deal.countDocuments(filter);

    res.json({
      deals,
      page,
      pages: Math.ceil(total / limit),
      total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
