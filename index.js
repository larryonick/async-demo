//tutorial demonstarting asynchronous functions 
// console.log is an example of synchronous javascript function 
//  setTimeout is an example of asynchronous javascript function


console.log('before');
getUser('Lanre', function(id) {
    console.log(`Result ready for user with ID ${ id }`)

});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log(`Reading User with ID ${ id } from the database`);

        callback(id);

    }, 2000);

}