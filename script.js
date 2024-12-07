const bganimation= document.getElementById('bgAnimation');
const numberofcolorbox=400;
for (let i = 0; i <numberofcolorbox; i++) {
  const colorbox=document.createElement('div');
  colorbox.classList.add('colorbox');
  bganimation.append(colorbox)
}