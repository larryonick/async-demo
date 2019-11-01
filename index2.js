 console.log('before');
 //get user
 getUser(1, (user) => {
     //get user repositories
     getRepositories(user.githubUsername, function(repos) {
         console.log('Repos', repos)
     })
 });


 console.log('After');


 function getUser(id, callback) {
     setTimeout(() => {
         console.log('Reading  A user from the Database...');

         callback({ id: id, githubUsername: 'Mosh' });
     }, 2000);

 }

 function getRepositories(user, callback) {
     setTimeout(() => {
         console.log(`Searching Repositories for ${user}`);
         callback(['repo1', 'repo2', 'repo3'])
     }, 2000);

 }