const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//2. select tab content item
function selectItem(e) {
    //4b. call removeBorder() here, but create it 1st
    removeBorder();
    //6b. call removeShow() here
    removeShow();

    //3. add border to current tab
    this.classList.add('tab-border');

    //6 Grab content item from DOM
    //console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    /*the content id we are expecting will be tab-1-content, tab-2-content hence #${this.id}-content (see our html) */
    //7. show class
    tabContentItem.classList.add('show');
}

//4a. create a func to remove border
function removeBorder() {
    //loop thru, for each of the item in the classList, remove border
    tabItems.forEach(item => item.classList.remove('tab-border'));

}

//6a. create a func to remove the show class from tabContentItems
function removeShow() {
    //loop thru, for each of the item in the classList, remove border
    tabContentItems.forEach(item => item.classList.remove('show'));

}

// //2. Add border to current item (this border stays on all when clicked, create remove border above this to remove the border 1st)
// //this.classList.add('tab-border')


// //1. Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

//5. use CSS to hide the tab content so that when we click, js will show us that content */