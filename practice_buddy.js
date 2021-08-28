const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    const buddies = data.results;
    console.log(buddies);
    const buddiesList = document.getElementById('buddies-list');
    buddies.forEach(buddy => {
        console.log(buddy);
        const li = document.createElement('li');
        li.innerText = `NAME:  ${buddy.name.title} ${buddy.name.first}  ${buddy.name.first}
        E-mail:  ${buddy.email}
        
        `;
        buddiesList.appendChild(li);
    });
}