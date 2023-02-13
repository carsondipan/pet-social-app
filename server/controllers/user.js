const { User } = require('../models');

module.exports = {
    async getAllUser(req, res) {
        const allUser = await User.find({});
    
        if (!allUser) {
          return res.status(400).json({ message: 'No technologies found' });
        }
        res.status(200).json(allUser);
      },
      async getMatchup({ params }, res) {
        const matchup = await Matchup.findOne({ _id: params.id });
    
        if (!matchup) {
          return res.status(400).json({ message: 'No matchup found by that id' });
        }
    
        res.status(200).json(matchup);
      },

}