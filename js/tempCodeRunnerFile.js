fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => {
    data = data.map(advice => ({
        adviceId: advice.id,
        adviceText: advice.advice
    }));
    return data
})
.then(data => console.log(data));