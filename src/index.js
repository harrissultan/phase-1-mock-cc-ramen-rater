// write your code here
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(data => mainMenu(data));

const picMenuImg = document.querySelector('#ramen-menu')
const picMenuPic = document.querySelector('.detail-image')
const picMenuName = document.querySelector('.name')
const picMenuResturant = document.querySelector('.restaurant')
const picMenuRating = document.querySelector('#rating-display')
const picMenuComments = document.querySelector('#comment-display')

function mainMenu(ramenMenu){
    ramenMenu.forEach(menu => {
        const newMenuImg = document.createElement('img');
        newMenuImg.src = menu.image;
        picMenuImg.appendChild(newMenuImg);

        newMenuImg.addEventListener('click', ()=>{
            picMenuPic.src = menu.image;
            picMenuName.textContent = menu.name;
            picMenuResturant.textContent = menu.restaurant;
            picMenuRating.textContent = menu.rating;
            picMenuComments.textContent = menu.comment;

        })
    });
}
//function addNewItem(){
const form = document.querySelector('#new-ramen')
   
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let formName = document.querySelector('#new-name').value;
        let formRestaurant = document.querySelector('#new-restaurant').value;
        let formImage = document.querySelector('#new-image').value;
        let formRating = document.querySelector('#new-rating').value;
        let formComment = document.querySelector('#new-comment').value;

        fetch('http://localhost:3000/ramens',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify({
                name: formName,
                restaurant: formRestaurant,
                image:formImage,
                rating: formRating,
                comment: formComment
            }),

        })
        form.reset();
    })
//}