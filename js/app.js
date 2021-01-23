const t0 = performance.now() // measuring performance time bofore the start of the code

// declaring variables
const fragNav = document.createDocumentFragment(); // fragement is better for performance
const ul =document.querySelector("#navbar__list")
const sections = document.querySelectorAll("section");

// in one loop Build the navigation menu dynamically and  Clicking on a navigation item  scroll to the appropriate section of the page 
sections.forEach(section => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = section.getAttribute("data-nav");
    button.addEventListener("click", () =>{
        section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });

    li.appendChild(button);
    fragNav.appendChild(li);
}); 
ul.appendChild(fragNav);

// giving  first button class active to be viewed  like first section which is active by default
const buttons = document.querySelectorAll("#navbar__list button");
buttons[0].classList.add("active");
console.log(buttons[0].classList);

// Add eventlistener  so that on scrolling "your-active-class" class is added to the section  in viewport
document.addEventListener("scroll",function(){
    sections.forEach(section => {
        const view = section.getBoundingClientRect();
        if (view.top >= 0 && view.top<=200){
            const oldActiveSec = document.getElementsByClassName("your-active-class");
            if(section.id !== oldActiveSec[0].id){
                oldActiveSec[0].classList.remove("your-active-class");
                section.classList.add("your-active-class");

                // adding class "active" to the button corresponding to the section in viewport
                buttons.forEach(button =>{
                    if(section.getAttribute("data-nav") === button.textContent){
                        button.classList.add("active");
                    }else{
                        button.classList.remove("active");
                    };
                });
            }
        }
    });    
});

//measuring  time after the code
const t1 = performance.now()
console.log(" this code took " + (t1 - t0) + "ms"); //subtraction will tell us how much time the code took 
