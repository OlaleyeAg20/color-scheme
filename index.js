const outputBars = document.querySelectorAll('.bars');

document.getElementById('btn').addEventListener('click', ()=>{
    const colorInput = document.getElementById('color').value.slice(1,7)
    const modeInput = document.getElementById('select-color').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${modeInput}`)
    .then(res => res.json())
    .then(data => {
        let outputArray = []
        data.colors.forEach((e)=>{
            outputArray.push(e.hex.value)
        })
        outputArray.forEach((e,i)=>{
            outputBars[i].style.backgroundColor = e
        })
        let tracker = 0
        outputBars.forEach(bar => {
            tracker++
            const backgroundColor = window.getComputedStyle(bar, null).backgroundColor;
            const hexBackgroundColor = rgbToHex(backgroundColor);
            document.querySelector(`.span${tracker}`).textContent = hexBackgroundColor.toUpperCase()
          });
          
          function rgbToHex(rgb) {
            const [r, g, b] = rgb.match(/\d+/g);
            return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
          }
})
})