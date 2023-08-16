//select all document items by id

const textArea = document.getElementById("text-area");
const colorInput = document.getElementById("color-input");
const numInput = document.getElementById("num-input");
const alignCenter = document.getElementById("align-center");
const alignJustify = document.getElementById("align-justify");
const alignLeft = document.getElementById("align-left");
const alignRight = document.getElementById("align-right");
const bold = document.getElementById("bold");
const underLine = document.getElementById("underline");
const italic = document.getElementById("italic");
const lineThorugh = document.getElementById("line-through");

function getElementById(elementId) {
  const id = document.getElementById(elementId);
  return id;
}

bold.addEventListener("click", function () {
  const textBold = getElementById("text-area");
  let fontWeight = textBold.style.fontWeight;

  if (fontWeight == "normal" || fontWeight == "") {
    textBold.style.fontWeight = "bold";
  } else {
    textBold.style.fontWeight = "normal";
  }
});

italic.addEventListener("click", function () {
  const textItalic = getElementById("text-area");
  let fontStyle = textItalic.style.fontStyle;
  if (fontStyle == "normal" || fontStyle == "") {
    textItalic.style.fontStyle = "italic";
  } else {
    textItalic.style.fontStyle = "normal";
  }
});
underLine.addEventListener("click", function () {
  const textUnderline = getElementById("text-area");
  let textDecoration = textUnderline.style.textDecoration;
  if(textDecoration == 'none'|| textDecoration == ''){
    textUnderline.style.textDecoration = 'underline';
  }else{
    textUnderline.style.textDecoration = 'none'
  }

});
lineThorugh.addEventListener("click", function () {
  const lineThorugh = getElementById("text-area");
  let textDecoration = lineThorugh.style.textDecoration;
  if(textDecoration == 'none'|| textDecoration == ''){
    lineThorugh.style.textDecoration = 'line-through';
  }else{
    lineThorugh.style.textDecoration = 'none'
  }

});


alignLeft.addEventListener("click", function () {
  const alignText= getElementById("text-area");
  let textAlign = alignText.style.textAlign;
  if (textAlign == 'right'|| textAlign == 'center' || textAlign == '' || textAlign == 'justify') {
    alignText.style.textAlign = 'left'
  }

});
alignCenter.addEventListener("click", function () {
  const alignText= getElementById("text-area");
  let textAlign = alignText.style.textAlign;
  if (textAlign == 'left'|| textAlign == 'right' || textAlign == '' || textAlign == 'justify') {
    alignText.style.textAlign = 'center'
  }

});
alignRight.addEventListener("click", function () {
  const alignText= getElementById("text-area");
  let textAlign = alignText.style.textAlign;
  if (textAlign == 'left'|| textAlign == 'center' || textAlign == 'justify' ||textAlign == '') {
    alignText.style.textAlign = 'right'
  }

});
alignJustify.addEventListener("click", function () {
  const alignText= getElementById("text-area");
  let textAlign = alignText.style.textAlign;
  if (textAlign == 'left'|| textAlign == 'center' || textAlign == 'right' ||textAlign == '') {
    alignText.style.textAlign = 'justify'
  }

});

numInput.addEventListener('click', function(e){
    let value = e.target.value;
    const textArea = getElementById("text-area");
    textArea.style.fontSize = value + "px";

})
numInput.addEventListener('keyup', function(e){
    let value = e.target.value;
    const textArea = getElementById("text-area");
    textArea.style.fontSize = value + "px";

})
colorInput.addEventListener('change', function(e){
    let value = e.target.value;
    const textArea = getElementById("text-area");
    textArea.style.color = value;
})
