
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


//step 3
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback(); // so it runs right after this is called and not 
        //waiting 2 sec till the entire functin execute.

    }, 2000);// 2 seconds.
}

//we want to get the Posts
getPosts();

//and we want to create a new one, a new objet.
//THIS IS NOT GOING TO APPEAR BECAUSE FUNCTION CREATEPOST WOULD TAKE LONGER THAN GETPOSTS. 

createPost({ title: 'post3', body: 'This is post 3' }, getPosts); // add a 2nd parameter getPosts. 


