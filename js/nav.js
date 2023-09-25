const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('.nav-link');
const homenav = document.getElementById('homenav');
const firstsection = document.getElementById('firstsection');

window.addEventListener('scroll',()=>{
    let current = '';
    sections.forEach(section =>{
        const sectiontop = section.offsetTop;
        const sectionheight = section.clientHeight;
        if(scrollY >= (sectiontop - sectionheight/3)){
            current = section.getAttribute('id');
        }
    });
    // console.log(current);
    navli.forEach( li =>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
        if(scrollY < firstsection.offsetTop){
            homenav.classList.add('active');
        }
    });
});
