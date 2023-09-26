// for main nav bar
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

// for resumesection nav bar
const resume_a = document.querySelectorAll('.page');
const resumenavli = document.querySelectorAll('.resumenavlist');
const resumefirstnav = document.getElementById('page0');
const firstpage = document.getElementById('page-0');

window.addEventListener('scroll',()=>{
    let current = '';
    resume_a.forEach(resume =>{
        const atop = resume.offsetTop;
        const aheight = resume.clientHeight;
        if(scrollY >= (atop - aheight/3)){
            current = resume.getAttribute('id');
        }
    });
    // console.log(current);
    resumenavli.forEach( a =>{
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active');
        }
        if(scrollY < firstpage.offsetTop){
            resumefirstnav.classList.add('active');
        }
    });
});