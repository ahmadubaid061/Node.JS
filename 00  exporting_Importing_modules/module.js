const mymodule = {
  name: "mymodule",
  findAge: function (birthYear) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - birthYear;
  },
};

module.exports = mymodule;

//=============explaination in main.js
