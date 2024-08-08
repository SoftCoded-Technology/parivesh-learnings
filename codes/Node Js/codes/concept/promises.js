const p = new Promise((resolve, reject) => {
   
    setTimeout(() => {
        console.log('after 2 seconds');
        resolve(1);
        reject(new Error('something went wrong'));
    }, 2000);

})

p.then(result => console.log(result)).catch(err => console.log(err.message))