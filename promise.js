// a promise is an object that holds the eventual result of an asynchronous operation

const p = new Promise((resolve, reject) => {
    //Here, we kickoff some asynchronous job 
    setTimeout(() => {
        // resolve(1);
        reject(new Error('message'));

    }, 2000);


})

p.catch(err => { console.log('Error', err.message) })
    .then(result => { console.log('Result', result) });