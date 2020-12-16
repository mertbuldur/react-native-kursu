const axios = require('axios');
getData = async  () => {
  await axios.get('https://mertbuldur.com')
      .then((res)=>{
          console.log(res);
      })
      .catch((e)=>console.log(e))
};

getShow = async  () => {
   await getData();
    console.log('Verileri Çekmeden Burası Asla Gösterme');
};

getShow();





