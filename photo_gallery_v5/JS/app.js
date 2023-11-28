

// created 'searchBar' variable that stores the input element with an ID of searchBar
// Added an event listener to 'searchBar' that listens for the keyup event,
// and stores in the event object called 'e'.
// Then inside the function, is a variable called 'currentValue' which tracks the value in the search bar.
// 'anchor' variable stores the a tag element from index.html
// 'anchorArray' creates an array from the 'anchor' variable (a tag)

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    let anchor = document.getElementsByClassName('anchor');
    console.log(anchor);
    const anchorArray = Array.from(anchor);
    console.log(anchorArray);
    
    anchorArray.forEach(a =>{
        let captions = a.getAttribute('data-caption');
        console.log(captions);
        if(captions.toLowerCase().includes(currentValue)) {    
            a.style.display = '';
        } else {
            a.style.display = 'none';
        }
    });
});

// const search = new FileSystemEntry('search', 'data-caption');
baguetteBox.run('.gallery');
