

document.querySelector('.add');
const advice = ["zapomnij", "przyjrzyj się temu z drugiej strony", "walcz", "ucz się wiecej!"];


const showAdvice = () => {
    const index = Math.floor(Math.random() * advice.length);
    console.log(index)
    document.querySelector('h1').textContent = advice[index];
};

const addAdvice = (event) => {
    event.preventDefault();
   const input = document.querySelector('input')
    advice.push(input.value)
    alert(`dodana została opcja ${input.value}`)
    input.value = "";
}


const clean = (event) => {
    event.preventDefault();
    advice.length = 0;
    document.querySelector("h1").textContent = "";
};



const showOptions = () => {
alert(advice.join("--"))
}


document.querySelector('.add').addEventListener("click", addAdvice);

document.querySelector(".showOptions").addEventListener("click", showOptions);

document.querySelector(".showAdvice").addEventListener("click", showAdvice);

document.querySelector(".clean").addEventListener("click", clean);



