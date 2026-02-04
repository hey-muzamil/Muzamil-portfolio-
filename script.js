// Scroll animations
const sections = document.querySelectorAll("section, .home-text h2, .home-text p, .btn");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.2
});

sections.forEach(section=>{
  observer.observe(section);
});