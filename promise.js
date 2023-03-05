const getData=new Promise((resolve,reject)=>{
    // resolve(10000);
    // reject('no data available')
    const num=Math.random()*10;
    console.log(num);
    if(num<5){
        resolve(10000);
    }
    else{
        reject('no data available');
    }
})
getData.then(data=>console.log(data + 500))
.catch(err=> console.error('ERR:',err))
