const Tweet = require('../models/tweet');
const User = require('../models/user');

// Post a tweet
const posttweets = async (req, res) => {
  try {
    const { text } = req.body;
    const tweet = new Tweet({ userId: req.user.userId, text });
    await tweet.save();
    res.status(200).json({ message: "Tweet Posted" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Some Glitch" });
  }
};

// Fetch user timeline
const timeline = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { cursor } = req.query;
    const query = { userId };

    if (cursor) {
      query._id = { $lt: cursor };
    }

    const tweets = await Tweet.find(query).sort({ _id: -1 }).limit(10);
    res.status(200).json({ tweets });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  posttweets,
  timeline
};
