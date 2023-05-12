// const posts =[
//     {title:"post One",body:"This is post 2"},
//     {title:"post two",body:"this is post two"}
// ]

// function getPost(){
//     setTimeout(()=>{
//         let output="";
//         posts.forEach((post)=>{
//             output+=`<li>${post.title}</li>`
//         });
//         document.body.innerHTML=output;
//     },1000)
// }

// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post)
//             const error=false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject("error something went wrong");
//             }
//         },2000)
//     })
// }
// createPost({title:"post three",body:"this is post 3"})
//     .then(getPost)

// function create3post(callback){
//     setTimeout(()=>{
//         console.log("3post")
        
//         callback()
//     },3000);
// }

// function create4thPost(callback){
//     setTimeout(()=>{
//         console.log("4th post")
//         callback()
//     },2000)
// }

// function create5thPost(){
//     setTimeout(()=>{
//         console.log('this is post 5')
//     },1000)
// }

// create3post(()=>{
//     create4thPost(()=>{
//         create5thPost()
//     })
// })

const posts=[{title:"post1"},{title:"post2"}];

function printPost(){
    posts.forEach((post)=>{
        console.log(post.title);
    });
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            resolve()
        },1000)
    })
}

function create3post(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            posts.push({title:'post3'});
            resolve()
        },3000)
    })
}

function create4thPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title:"post4"});
            resolve()
        },4000);
    });
}

function create5thpost(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push({title:"post5"});
            resolve();
        },2000)
    })
}

create3post().then(deletePost).then(create4thPost).then(printPost);