//step 1
const posts = [
    { title: 'Post One', body: 'This is post 1.' },
    { title: 'Post two', body: 'This is post 2.' }
];

//The purspose is to get the const posts inside the function and put them in the page.

//step 2
function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
        //how much time you want to delay? 1000 miliseconds. 1 sec.
    }, 1000);

};


getPosts();

//step 3
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.push(post);
            const error = true; // if its false it will get an Uncought error, the solution is CATCH.


            if (!error) {
                resolve();
            } else {
                reject('Maybe something went wrong!');
            }
        }, 2000);
    });
}




/*createPost({ title: 'post3', body: 'This is post 3' })

//.catch (error => console.log(error));
//.then(getPosts);


//PROMISES

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye!')
});
const promise4 = fetch
    ("https://jsonplaceholder.typicode.com/users").then(response => response.json());

// NOW WE CAN CALL / TAKES AN ARRAY OF PROMISES
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values)
);

*/

//ASYNC /AWAIT
/*
async function init() {
    await createPost({ title: 'post3', body: 'This is post 3.' });

    getPosts();
};

init();
*/

//ASYNC AWAIT WITH FETCH

async function FetchUsers() {

    let res = await fetch
        ("https://jsonplaceholder.typicode.com/users");

    //we need to call res.json() so we create another variable.

    const data = await res.json();



};

document.body.innerHTML();

console.log(users());

