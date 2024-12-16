
let x = window.innerWidth;
console.log('x: ', x);
let y = window.innerHeight;
console.log('y: ', y);

let gridCellX = x / 11;

let gridCellY = y / 2;

////

var scrVal = 0;

var counter = 0;
function drawImages(scrVal) {
  let cnv = document.getElementById('main');
  cnv.style.transform = `translateX(-${scrVal}px)`;
    for (img in imgDict) {
    
    
    imgX = xPosList[counter];

    eval(
      `image(imgDict.${img}, imgX, y/5)`
    );

    counter++;

  }

  if (counter == 43) {
    document.getElementById("loadText").remove();
  }
  }

var imgList = [];
var imgDict = {};

for (let i = 0; i < 43; i++) {
  imgList.push(`${i}.jpg`);
}

console.log('imgList: ', imgList);

////


function preload() {

  for (let i = 0; i < 43; i++) {

    const imgKey =  `img${i}`;
    imgDict[imgKey] = loadImage(`https://cakeb0ss.github.io/imgSlide/images/${imgList[i]}`);

  }

}

console.log(imgDict);

var scrSlider;
var xPosList = [];

var imgX;

function setup() {

  let wList = [0];

  for (i in imgDict) {

    console.log('imgDict[i]: ', imgDict[i]);
    imgDict[i].resize(0, gridCellY);
    wList.push(imgDict[i].width);

  }

  console.log('wList: ', wList);

  var canvWidth = 0;

  for (width of wList) {
    canvWidth += width;
    console.log('canvWidth: ', canvWidth);
  }

  console.log('canvWidth: ', canvWidth);

  let canv = createCanvas(canvWidth, y);
  canv.parent('main');
  colorMode(RGB, 1);
  background(0);
  noCursor();
  cursor(CROSS);


  background(0.1);  

  let imgDictKeys = Object.keys(imgDict);

  console.log('imgDictKeys: ', imgDictKeys);


  
  var xPos = 0;
  for (let i = 0; i < 43; i++) {
    let w = wList[i]
    xPos += w;
    xPosList.push(xPos);
  }

  console.log('xPosList: ', xPosList);
  
  scrSlider = createSlider(1, 17173, 0);
  scrSlider.position(50, y - 150);
  scrSlider.size(x - 100);
  scrSlider.addClass('slider');
  let slider = document.querySelector('.slider');
  


  var counter = 0;

  
  
  drawImages(0);
  slider.addEventListener('wheel', (ev) => {
    ev.preventDefault();
    scrVal += ev.deltaY * 20;
    console.log('ev.deltaY: ', ev.deltaY);
    drawImages(scrVal);
  })
  
}



function draw() {

  frameRate(60);
  let dX = frameCount * 0.01;
  
  if (dX > 1) {
    frameCount = 0;
  }

  
  

  scrSlider.input(scrollVal);

  function scrollVal() {
    let val = scrSlider.value();
    scrVal = val;
    console.log('scrVal: ', scrVal);
    drawImages(scrVal);
  }
}





//   //// COLORS ////

//   var r, g, b, a, r2, g2, b2, a2;
//   var c = color(r, g, b, a);
//   var c2 = color(r2, g2, b2, a2);

//   let colorList = [c, c2];

//   c.setGreen();
//   c.setBlue();
//   c.setRed();
//   c.setAlpha();

//   c2.setGreen();
//   c2.setBlue();
//   c2.setRed();
//   c2.setAlpha();

// }

// var cycleCount;
