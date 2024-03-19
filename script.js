// ********************************************** START - Function to change image source based on screen size **********************************************
function changeImageSource(targetElementId, mobileSrc, desktopSrc) {
    // location in HTML - <img src="" alt="Sleeping Baby Image"></img>
    var screenWidth = window.innerWidth;
    var targetElement = document.getElementById(targetElementId);

    // Small & Medium screen to show mobile image
    if (screenWidth < 992) {
        targetElement.querySelector('img').src = mobileSrc;
    } else {
        // Large screen (>=992px) screen to show Desktop image
        targetElement.querySelector('img').src = desktopSrc;
    }
}
// ********************************************** END - Function to change image source based on screen size **********************************************


// ********************************************** Section Reusable template **********************************************

// Create button
function createButton(btnName, additionalId) {
            // Check if additionalClass is provided
    var idString = additionalId ? ` ${additionalId}` : '';

    return `
    <div class="btnWrap2">
        <button type="button" class="btnStyle2 rounded-3 text-dark" id=${idString}>${btnName}</button>
    </div>`;
}

    // Function to create a section with provided image source and text
function createSection(imageSrc, contentHTML, btnName, additionalClass1, additionalClass2) {

        // calling function to create button
    var buttonHTML = createButton(btnName);

        // Check if additionalClass is provided
    var classString1 = additionalClass1 ? ` ${additionalClass1}` : '';
    var classString2 = additionalClass2 ? ` ${additionalClass2}` : '';

    return `
    <div class=" col-12 col-lg-6 col-md-6 col-sm-12 px-0 ${classString1}">
        <picture>
            <img src="${imageSrc}" alt="Sleeping Baby Image" class="img-fluid">
        </picture>
    </div>
    <div class="section2Col col-12 col-lg-6 col-md-6 col-sm-12 ${classString2}">
        ${contentHTML}
        ${buttonHTML}
    </div>`;
}
///////////////////////////////////////////////////////


// Section 2 - Call the function to populate 
document.getElementById('section2').innerHTML = createSection(
    'Assets/Images/how-it-works-desktop.jpg',
    `
    <h2 class="sectionHeading">How it works</h2>
            <br>

    <p>
        <span class="txtBold">Lumi's A,B,Cs, to better Zzzzs</span>
    </p>
    <p>
        <span class="spanGreen">A.</span>	<span class="txtBold ">We coach.</span> Our pediatric sleep experts will take you step-by-step to sleep success     
    </p>
    <p>
        <span class="spanGreen">B.</span>	<span class="txtBold ">You log.</span> Record your baby’s sleeps directly within the app     
    </p>
    <p>
        <span class="spanGreen">C.</span>	<span class="txtBold ">We analyse.</span> Daily and weekly sleep insight reports measure your baby’s progress     
    </p>
            <br>
    <h3>
        <span class="spanGreen">Zzzzz your baby sleeps!</span>
    </h3>
    `, 'GET STARTED'
);


// Section 3 - Call the function to populate 
document.getElementById('section3').innerHTML = createSection(
    'Assets/Images/our-mission.jpg',
    `
    <h2 class="sectionHeading">Our mission</h2>
            <br>
    <p>
        <span class="txtBold">
        We’re on a mission to make it easy for every family to
        sleep better. </span>
        We apply state-of-the-art technology to 
        science-based sleep understanding so that we can make
        quality, credible sleep support accessible to everyone- 
        because every baby and their family deserve better sleep! 
    </p>
    `, 'UNLOCK BETTER SLEEP',
    'order-first order-sm-first order-md-last order-lg-last','order-last order-sm-last order-md-first order-lg-first'
    // The above line is 2 additionalClass that adds to the function to swap the column order 
    // As they are repeated in forms of ROWS and COLUMNS, same function is used but modified where required
);

// Section 3 - Call the function to populate 
document.getElementById('section4').innerHTML = createSection(
    'Assets/Images/lumi-designed-for.jpg',
    `
    <h2 class="sectionHeading">Lumi is designed for</h2>
            <br>

    <p>
        <span class="txtBold">
            Every parent who wants their baby to fall asleep, stay 
            asleep, and wake up happy in the morning. 
        </span>
        Whether You’re struggling with sleep or simply making sure you’re
        Doing what’s best for your family, we have you covered.
    </p>
    `, 'GET STARTED'
);




// FAQs
// Function to create a dropdown row
function createDropdownRow(heading, dropdownItems = []) {
    let dropdownItemsHTML = '';
    if (dropdownItems.length > 0) {
        dropdownItemsHTML = dropdownItems.map(item => `<li><button class="dropdown-item" type="button">${item}</button></li>`).join('');
    }

    return `
    <div class="row section5">
        <div class="dropdown-content">
            <p class="dropdown-heading">${heading}</p>
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="Assets/Icons/dropdown.svg" alt="Dropdown Icon" class="dropdown-icon">
                </button>
                <ul class="dropdown-menu">
                    ${dropdownItemsHTML}
                </ul>
            </div>
        </div>
        <hr class="hr-dropdown">
    </div>`;
}

// Function to add dropdown rows to section5 container
function addDropdownRows() {
    const section5Container = document.getElementById('section5');
    const dropdownData = [
        { heading: 'What is baby sleep training?', dropdownItems: ['Action', 'Another action', 'Something else here'] },
        { heading: 'Does the Lumi Smart Sleep Coach app work?', dropdownItems: ['Action', 'Another action', 'Something else here'] },
        { heading: 'I don’t have the time to track manually, is there an alternative?', dropdownItems: ['Action', 'Another action', 'Something else here'] },
        { heading: 'Is sleep training safe for my baby?', dropdownItems: ['Action', 'Another action', 'Something else here'] },
        { heading: 'Are there multiple sleep training methods to choose from?', dropdownItems: ['Action', 'Another action', 'Something else here']},
        { heading: 'How long does it take for my baby’s sleep to improve?', dropdownItems: ['Action', 'Another action', 'Something else here']},
        { heading: 'When can I start training my baby to sleep with the Lumi Smart Sleep Coach?', dropdownItems: ['Action', 'Another action', 'Something else here']},
        { heading: 'Can I grant app access to other people who care for my baby?', dropdownItems: ['Action', 'Another action', 'Something else here']},
        { heading: 'Is it too late to sleep train my baby?', dropdownItems: ['Action', 'Another action', 'Something else here']},
        { heading: 'How long will I have access?', dropdownItems: ['Action', 'Another action', 'Something else here']},
        { heading: 'Can I cancel my plan?', dropdownItems: ['Action', 'Another action', 'Something else here']},
    ];

    dropdownData.forEach(data => {
        section5Container.innerHTML += createDropdownRow(data.heading, data.dropdownItems);
    });

    // Add the button
    const buttonHTML = createButton('GET STARTED', 'btnFaq');
    section5Container.insertAdjacentHTML('beforeend', buttonHTML);
}

// Call the function to add dropdown rows when the page loads
window.onload = function() {
    // Image Home Banner Desktop + Mobile
    changeImageSource('bannerPicture', 'Assets/Images/home-banner1-mobile.jpg', 'Assets/Images/home-banner1-desktop.jpg');
    // Image How it works Desktop + Mobile
    changeImageSource('section2', 'Assets/Images/how-it-works-mobile.jpg', 'Assets/Images/how-it-works-desktop.jpg');
    addDropdownRows();
};
window.onresize = function() {
    // Image Home Banner Desktop + Mobile
    changeImageSource('bannerPicture', 'Assets/Images/home-banner1-mobile.jpg', 'Assets/Images/home-banner1-desktop.jpg');
    // Image How it works Desktop + Mobile
    changeImageSource('section2', 'Assets/Images/how-it-works-mobile.jpg', 'Assets/Images/how-it-works-desktop.jpg');
};