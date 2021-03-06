const prices = [
    {
        pageviews: '10K',
        price: 8
    },
    {
        pageviews: '50K',
        price: 12
    },
    {
        pageviews: '100K',
        price: 16
    },
    {
        pageviews: '500K',
        price: 24
    },
    {
        pageviews: '1M',
        price: 36
    }
];

let slider = document.getElementById("myRange");
let output = document.getElementById("pageviews");
let cost = document.getElementById("cost");
let toggle = document.getElementById("toggle");

slider.oninput = function () {
    (toggle.checked) ? discount() : standard();
}


function standard() {
    if (slider.value > 9 && slider.value < 50) {
        cost.innerHTML = `$ ${prices[0].price}`
        output.innerHTML = `${prices[0].pageviews}`
    } else if (slider.value > 50 && slider.value < 100) {
        cost.innerHTML = `$ ${prices[1].price}`
        output.innerHTML = `${prices[1].pageviews}`
    } else if (slider.value > 100 && slider.value < 500) {
        cost.innerHTML = `$${prices[2].price}`
        output.innerHTML = `${prices[2].pageviews}`
    } else if (slider.value > 500 && slider.value < 1000) {
        cost.innerHTML = `$ ${prices[3].price}`
        output.innerHTML = `${prices[3].pageviews}`
    } else if (slider.value > 1000) {
        cost.innerHTML = `$ ${prices[4].price}`
        output.innerHTML = `${prices[4].pageviews}`

    } else
        return slider.value
};


function discount() {

    if (slider.value > 9 && slider.value < 50) {
        cost.innerHTML = `$ ${prices[0].price - ((prices[0].price) / 100) * 25}`;
        output.innerHTML = `${prices[0].pageviews}`
    } else if (slider.value > 50 && slider.value < 100) {
        cost.innerHTML = `$ ${prices[1].price - ((prices[1].price) / 100) * 25}`;
        output.innerHTML = `${prices[1].pageviews}`
    } else if (slider.value > 100 && slider.value < 500) {
        cost.innerHTML = `$ ${prices[2].price - ((prices[2].price) / 100) * 25}`;
        output.innerHTML = `${prices[2].pageviews}`
    } else if (slider.value > 500 && slider.value < 1000) {
        cost.innerHTML = `$ ${prices[3].price - ((prices[3].price) / 100) * 25}`;
        output.innerHTML = `${prices[3].pageviews}`
    } else if (slider.value > 1000) {
        cost.innerHTML = `$ ${prices[4].price - ((prices[4].price) / 100) * 25}`;
        output.innerHTML = `${prices[4].pageviews}`
    } else
        console.log(slider.value)
};


// function calculatePercent(percent, num) {
//     return (percent / 100) * num;
// }



const myRange = document.getElementById("myRange");

const adjustSlider = () => {
    const min = myRange.min;
    const max = myRange.max;
    // Calculate visible width
    const val = ((myRange.value - min) * 100) / (max - min);

    // Change these variables to the colors you need
    const fillLeft = "#a5f3eb";
    const fillRight = "#eaeefb";

    myRange.style.background = `linear-gradient(to right, ${fillLeft} ${val}%, ${fillRight} ${val}%`;
};

// Change background if input changes
myRange.addEventListener("input", adjustSlider);

// We need to execute it at the start to set the initial value
adjustSlider();



