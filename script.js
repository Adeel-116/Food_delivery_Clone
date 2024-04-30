const nav_bar = document.querySelector(".mobile-nav");
console.log(nav_bar);
const nav_class_add=document.querySelector(".page1-bg-image");
console.log( nav_class_add);

const togglenavbar= ()=>{
       console.log("active")
       nav_class_add.classList.toggle('active');
}
1

nav_bar.addEventListener('click',()=> togglenavbar());