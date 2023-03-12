let buttonClick = document.getElementById("buttonClick");

buttonClick.addEventListener("click", onButtonClick);

const genetationOne = [2009, 2010, 2011, 2012, 2013, 2014, 2015];
const generationTwo = [2016, 2017, 2018, 2019];
const generationThree = [2020, 2021, 2020];

function onButtonClick() {
    let inputOne = document.getElementById("whatGenIn");
    let oneClick = Number(inputOne.value);

    if (genetationOne.includes(oneClick)) {
        window.alert("VW Polo Sedan 1 gen");
    } else if (generationTwo.includes(oneClick)) {
        window.alert("VW Polo Sedan 2 gen");
    } else if (generationThree.includes(oneClick)) {
        window.alert("VW Polo Sedan 3 gen");
    };
};



