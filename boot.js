const users=[
    {user:'user1',lastActivityTime:'1-1-2020'},
    {user:'user2',lastActivityTime:'3-1-2021'}
];

function getUsers(){
    setTimeout(()=>{
        users.forEach((user)=>{
            console.log(user.user, user.lastActivityTime);
        });
    },1000);
}

function createUsers(user){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            users.push(user);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('error');
            }
        },2000);
    });
}
 
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const currentTime = new Date().getTime();
            users.forEach(user => {
                user.lastActivityTime = currentTime;
            });
            resolve(currentTime);
        }, 1000);
    });
}

Promise.all([createUsers({user:'user3', lastActivityTime: '2-2-1999'}), updateLastUserActivityTime()])
    .then(getUsers)
    .catch(error => console.log(error));
