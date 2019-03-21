const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');

const getWeather = (userInput,message1,message2) => { fetch(`/weather?address=${userInput}`).then((response)=>{
    response.json().then((data) => {
        if(data.error){
            message1.textContent = data.error;
        } else {
            message1.textContent = data.location;
            message2.textContent = data.forecast;
        }
    })
})
};


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    message1.textContent = `Loading...`;
    message2.textContent = ``;
    const location = search.value;
    
    getWeather(location,message1,message2)
})

