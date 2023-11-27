

// created 'searchBar' variable that stores the input element with an ID of searchBar
// Added an event listener to 'searchBar' that listens for the keyup event,
// and stores in the event object called 'e'.
// Then inside the function, is a variable called 'currentValue' which tracks the value in the search bar.

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    const anchor = document.getElementsByClassName('anchor');
    let captions = anchor.getAttribute('data-caption');
    
    captions.forEach(caption =>{
        if(caption.textContent.toLowerCase().includes(currentValue)) {
            caption.style.display = 'block';
        } else {
            caption.style.display = 'none';
        }
    });
});

// const search = new FileSystemEntry('search', 'data-caption');
baguetteBox.run('.gallery');
