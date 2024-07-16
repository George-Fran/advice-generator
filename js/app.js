const consejoId = document.querySelector('.citas__id--number');
const consejoText = document.querySelector('.citas__contenido');
const boton = document.querySelector('.citas__generar');


boton.addEventListener('click', () => {
    const api = 'https://api.adviceslip.com/advice';
    fetch(api, { cache: "no-cache" })
        .then(res => res.json())
        .then(data => {
            const dataArray = Object.values(data);
            const dato = dataArray.map(advice => ({
                adviceId: advice.id,
                adviceText: advice.advice
            }));
            const d = dato[0];
            consejoId.textContent = d.adviceId;
            consejoText.textContent = `"${d.adviceText}"`;
            return dato;
        })
        .then(data => console.log(data));

});
