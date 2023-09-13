let element = document.getElementById('element');
const words = ['Web Developer', 'Fast Learner', 'Problem Solver', 'Software Engineer'];

let currentIndex = 0;

function startTypingLoop() {
    if (currentIndex >= words.length) {
        currentIndex = 0; // Reset index to loop animation
    }

    element.innerHTML = ''; // Clear previous content
    typing_animation(currentIndex);
    currentIndex++;

    setTimeout(startTypingLoop, words[currentIndex - 1].length * 130 + 1000); // Delay based on word length
}


function typing_animation(num){
    var word = words[num];
    var index = 0;
    var speed = 130;
    function type_word(){
        if (index <=word.length){
            element.innerHTML = word.substring(0, index) + '<span class="cursor">|</span>';
            index++;
            setTimeout(type_word,speed);
        }
    }
    type_word();
}


startTypingLoop();
