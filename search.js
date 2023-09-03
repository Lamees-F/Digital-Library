// written by Lamees
const searchInput = document.getElementById('searchbox');
const cardContainer = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  
  const newRow = document.createElement('div');
  newRow.classList.add('row');     
  newRow.classList.add('d-flex');
  newRow.classList.add('align-items-stretch');



  cards.forEach(card => {
    const cardText = card.querySelector('.card-text').textContent.toLowerCase();
    const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
    const cardSubtitle = card.querySelector('.card-subtitle').textContent.toLowerCase();
    //console.log(cardTitle)
    if (cardSubtitle.includes(searchTerm) || cardText.includes(searchTerm) || cardTitle.includes(searchTerm) ) {
      const newCard = card.cloneNode(true);
      const newColumn = document.createElement('div');
      newColumn.classList.add('col-md-3');
      newColumn.classList.add('mb-3');
    
      const closestAnchor = card.closest('a');
      if (closestAnchor) {
        const newAnchor = document.createElement('a');
        newAnchor.href = closestAnchor.href;
        newAnchor.style.textDecoration= 'none';
        newAnchor.classList.add('text-black');

        newAnchor.appendChild(newCard);
        newColumn.appendChild(newAnchor);
      } else {
        newColumn.appendChild(newCard);
      }
      newRow.appendChild(newColumn);
    }
  });
  cardContainer.querySelectorAll('.row').forEach(row => {
    row.remove();
  });
  cardContainer.appendChild(newRow);
});

const scroller = document.getElementById('back');
scroller.addEventListener('click',()=>{
  window.scrollTo({top:0, behavior:'smooth'})
})
