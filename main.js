var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/auto-complete',
  params: { q: 'chicken soup' },
  headers: {
    'x-rapidapi-host': 'yummly2.p.rapidapi.com',
    'x-rapidapi-key': '4ae6a9eeecmsh3f681567ff09a21p1c090fjsnbbe9613251ae'
  }
};

axios.request(options).then(function(response) {
  console.log(response.data);
}).catch(function(error) {
  console.error(error);
});