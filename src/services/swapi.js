const baseURL = "https://swapi.dev/api/";

const getPeople = () => {
  return fetch(baseURL + "people/")
    .then(function(res) {
      return res.json();
    })
    .catch(function(err) {
      console.log(err);
    });
};

export default getPeople;
