const IslemKontrol = new Promise(function (resolve,reject) {
    const islem = 1;
    if(islem){
        resolve(islem);
    }
    else
    {
        reject();
    }
});
IslemKontrol.then((e)=>{
    console.log(e);
}) .catch(()=> console.log('hata var'))
