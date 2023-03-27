let buttonClick = document.getElementById("buttonClick");

buttonClick.addEventListener("click", onButtonClick);

const genetationOne = [2009, 2010, 2011, 2012, 2013, 2014, 2015];
const generationTwo = [2016, 2017, 2018, 2019];
const generationThree = [2020, 2021, 2022];

function onButtonClick() {
    let inputOne = document.getElementById("whatGenIn");
    let oneClick = Number(inputOne.value);

    if (genetationOne.includes(oneClick)) {
        window.alert("VW Polo Sedan 1 gen");
    } else if (generationTwo.includes(oneClick)) {
        window.alert("VW Polo Sedan 2 gen");
    } else if (generationThree.includes(oneClick)) {
        window.alert("VW Polo Sedan 3 gen");
    }
}

class Tabl {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    buttonClickOne() {
        window.alert("2009, 2010, 2011, 2012, 2013, 2014, 2015");
    }

    buttonClickTwo() {
        window.alert("2016, 2017, 2018, 2019");
    }

    buttonClickTree() {
        window.alert("2020, 2021, 2022");
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
}

new Tabl(tart);

.box {
    display: flex;
    align-items: center;
    justify-content: center;
}
  
  .box div {
    width: 100px;
    height: 100px;
}





