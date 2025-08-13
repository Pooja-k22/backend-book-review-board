const reviews = require("../models/reviews");

// add review
exports.reviewAddController = async (req, res) => {
  const { rating, comment, bookId } = req.body;
  const userId = req.payload;

  try {
    const newReview = new reviews({ rating, comment, userId, bookId });
    await newReview.save();

    res.status(200).json(newReview);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get review
exports.reviewgetController = async (req, res) => {
  try {
    const Review = await reviews.find();

    res.status(200).json(Review);
  } catch (error) {
    res.status(500).json(error);
  }
};
