////////////////////////
////////////////////////
////////////////////////

let doc = document;
let body = document.body;
var elemCount = 0;

/////////////////
////  MAIN   ////
/////////////////

const main = {

    rnd: rndInt,
    sumArr: sumArr,
    addEl: addElem,
    insEl: insElem,
    st: styles,
    init: initialize,

}


    // rnd //

function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


    // sumarr //

function sumArr(arr) {
    let sum = 0;
    arr.forEach((i) => {
        sum += i;
    })
    return sum
}


    // addEl //

function addElem(elemType, attributes, innerHTML) {
    elemCount++
    console.log('elemCount: ', elemCount);
    let newElem = doc.createElement(elemType);
    for (let i = 0; i < attributes.length - 1; i++) {
        newElem.setAttribute(attributes[i][0], attributes[i][1])
    }
    innerHTML ? newElem.innerHTML = innerHTML : null
    return newElem
}


    // insEl //

function insElem(element, pos) {
    pos ? pos.insertAdjacentElement('beforeend', element)
        : body.insertAdjacentElement('beforeend', element);
}


    // st //

function styles(element, ...styleType) {
    styleType.forEach((i) => {
        if (Array.isArray(i)) {
            eval(`element.style.${i[0]} = i[1]`);
        } else {
            let iEnt = Object.entries(i);
            iEnt.forEach((kv) => {
                eval(`element.style.${kv[0]} = '${kv[1]}'`);
            })
        }
    })
}


    // DEFAULT INIT //

function initialize(mainStyle) {
    
    main.st(body, ['margin', '0'], ['padding', '0'], ['overflow', 'hidden']);
    let attr2 = [['id', 'main'],['style', 'background-color: black']];
    let container = main.addEl('div', attr2, '');
    main.insEl(container);
    console.log('|~.~|')
    main.st(container, mainStyle);
    return doc.getElementById('main')
}


    // INIT TEMPLATES //

function temp1() {
    
}

/////////////////
//// EXPORT  ////
/////////////////

export { main }


/////////////////
//// TESTING ////
/////////////////


// let attr = [['class', 'c1'], ['id', 'c1p1'], ['style', 'color: tomato;']];
// let innerHTML = 'hello, wolrd';

// let container = main.init()

// if (container) {


//     let elem = main.addEl('h1', attr, 'js.Module.Testing');
//     main.st(elem, ['fontFamily', 'Silkscreen'], ['textAlign', 'center']);
//     main.insEl(elem, container);

//     let elem2 = main.addEl('h3', [['class', 'c2'], ['id', 'c2p1'], ['style', 'color: white;']], 'This is an h3 element.')
//     main.st(elem2, ['textAlign', 'center'])
//     main.insEl(elem2, container);


// } else {


//     document.body.innerHTML === '<h1>Sorry. This content is unavailable.</h1>'


// }