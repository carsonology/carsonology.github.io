'use strict';
console.log('grid working');

let imgList = ['illos/burnout-01 2.png',
'graphics/IDSB01-CL-0910 2.jpg',
'graphics/Screen Shot 2018-05-07 at 12.59.50 AM 2.png',
'illos/grades-05 2.png',
'graphics/Sleeping Beauty Flyer Nat and Gabe copy 2.png',
'illos/cadeaf.jpeg',
'graphics/1.4.P1.09.24.20_Page_1.jpg',
'illos/scioly_sweatshirt.png',
'illos/weekly puzzle-01 2.png',
'graphics/Anya Flyer 2.png',
'illos/partypunishments-01 2.png',
'illos/sign2twitter 2.gif',
'graphics/teaching modes white bkg-04 2.png',
'graphics/grad edition 2.jpg',
'illos/abroad-02 2.png',
'graphics/01.30.20Kobe_Page_1 2.jpg',
'graphics/Screen Shot 2019-05-09 at 12.00.09 PM 2.png',
'illos/domestic violence-01 2.png',
'graphics/front.06.25.20 2.jpg',
'illos/dashboard illo.png',
'graphics/BTCA Preschool Flyer 2.jpg',
'illos/cacoronacanceled031220-01 2.png',
'graphics/larisa1 2.png',
'graphics/solar eclipse 2.png',
'graphics/Housing&Living Breweries1.png',
'illos/sports psych-01 2.png',
'graphics/IDSA04-CL-0420 2.jpg',
'illos/map illo-03 2.png',
'graphics/back on track indiana bkg-01.png',
'graphics/IDSA04-CL-0413 2.jpg',
'illos/sign1twitter 2.gif',
'illos/rps virus 2.png',
'graphics/1.3.P1.04.30.20_Page_1.jpg'
]

const gallery = document.querySelector('.gallery');
console.log(gallery);

function insertImages(listOfImages) {
    for (let key in imgList) {
        let html = 
        `<figure class="gallery_item gallery__item-${key}">
            <img src="images/${imgList[key]}" class="gallery_img" alt="Image ${key}">
        </figure>`
    
        gallery.insertAdjacentHTML('beforeend', html);
    }
}

function layoutGrid(height, width) {
    gallery.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    gallery.style.gridTemplateRows = `repeat(${height}, 1fr)`;
}

function generateGrid(x, y, blockSize, numBlocks, color) {
    for (let i = 0; i < numBlocks; i++) {
        // console.log(i);
        let style = 
            `grid-column: ${Math.floor(Math.random() * y) + 1} / span ${blockSize}; 
            grid-row: ${Math.floor(Math.random() * x) + 1} / span ${blockSize};
            background-color: ${color};
            border: 1px black solid;`
        let html = `<div class="card ${i}" style="${style}">${i}</div>`;

        gallery.insertAdjacentHTML('beforeend', html);

    }
}
layoutGrid(5,5);
generateGrid(5,5,4,2,"green");