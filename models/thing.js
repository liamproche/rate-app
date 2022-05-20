module.exports = (sequelize, Sequelize) => {
    const Thing = sequelize.define("thing", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      photo: {
          type: Sequelize.STRING
      }
    });
    return Thing;
  };
