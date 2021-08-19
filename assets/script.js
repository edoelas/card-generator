window.onload = function() {
    var ele = document.getElementById("name");
    scaleFontSize(ele)
};

function scaleFontSize(element) {
    var val = window.getComputedStyle(element, null).getPropertyValue('font-size');
    element.style.fontSize = val;
  
    var rmar = parseFloat(window.getComputedStyle(element, null).getPropertyValue('margin-right'));
    var lmar = parseFloat(window.getComputedStyle(element, null).getPropertyValue('margin-right'));
    // while (element.offsetWidth + rmar + lmar > element.parentElement.clientWidth) {
    //     currentSize = parseFloat(element.style.fontSize);
    //     element.style.fontSize = (currentSize - 0.1) + 'px';
    //     //console.log(element.style.fontSize)
    // }
}

