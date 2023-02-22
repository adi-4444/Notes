
/***********************
 * FOR PRINTING IMAGES *
 ***********************/
// const container = document.querySelector('.container');
// const URL = 'https://jsonplaceholder.typicode.com/photos';

// // get the images
// function getRandom() {
//    return Math.floor(Math.random() * 1000);
// }
// function getImages(n = 10) {
//    let i = 0;
//    while (i < n) {
//       const img = document.createElement('img');
//       fetch(`${URL}/${getRandom()}`)
//          .then(res => res.json())
//          .then(data => (img.src = data.thumbnailUrl));
//       container.appendChild(img);
//       i++;
//    }
// }
// getImages();

// window.addEventListener('scroll', () => {
//    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
//    if (scrollTop + clientHeight >= scrollHeight) {
//       console.log("end of scroll");
//       setTimeout(() => {
//          getImages();
//       }, 550);
//    }
// });


/*********************
 * FOR PRINTING DATA *
 *********************/

const container = document.querySelector('.container');

let limit = 10;
let page = 1

//fetch data
const getPosts = async () => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
   const data = await res.json()
   return data
}
// display posts 
const showPosts = async () => {
   const posts = await getPosts()
   // create a element for each post 
   posts.forEach(post => {
      const postDiv = document.createElement('div')
      postDiv.classList.add('post')
      postDiv.innerHTML = `<div class="postId">${post.id}</div>
                           <div>${post.title}</div>`;
      container.appendChild(postDiv)
   })
}
// add loading and fetch more posts

function fetchOnScroll() {
   setTimeout(() => {
      page++
      showPosts()
   }, 550);
}
window.addEventListener('scroll', () => {
   const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
   if (scrollTop + clientHeight >= scrollHeight) {
      console.log("end of scroll");
      fetchOnScroll()
   }
});
showPosts()