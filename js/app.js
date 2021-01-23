const t0 = performance.now() // measuring performance time bofore the start of the code

// declaring variables
const fragNav = document.createDocumentFragment(); // fragement is better for performance
const ul =document.querySelector("#navbar__list")
const sections = document.querySelectorAll("section");

// in one loop Build the navigation menu dynamically and  Clicking on a navigation item  scroll to the appropriate section of the page 
sections.forEach(section => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.text = section.getAttribute("data-nav");
    link.href = "#" + section.id;
    li.appendChild(link);
    fragNav.appendChild(li);
}); 
ul.appendChild(fragNav);

// giving  first link class active to be viewed  like first section which is active by default
const links = document.querySelectorAll("#navbar__list a");
links[0].classList.add("active");

// Add eventlistener  so that on scrolling "your-active-class" class is added to the section  in viewport
document.addEventListener("scroll",function(){
    sections.forEach(section => {
        const view = section.getBoundingClientRect();
        if (view.top >= 0 && view.top<=200){
            const oldActiveSec = document.getElementsByClassName("your-active-class");
            if(section.id !== oldActiveSec[0].id){
                oldActiveSec[0].classList.remove("your-active-class");
                section.classList.add("your-active-class");

                // adding class "active" to the link corresponding to the section in viewport
                links.forEach(link =>{
                    if(section.getAttribute("data-nav") === link.text){
                        link.classList.add("active");
                    }else{
                        link.classList.remove("active");
                    };
                });
            }
        }
    });    
});

//measuring  time after the code
const t1 = performance.now()
console.log(" this code took " + (t1 - t0) + "ms"); //subtraction will tell us how much time the code took 
