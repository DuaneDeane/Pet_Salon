console.log("directory.js");
function fetch_name_HTML(thisType,thisName) {
    const dogIcon='<i class="fas fa-dog"></i>';
    const catIcon='<i class="fas fa-cat"></i>';
    const birdIcon='<i class="fas fa-crow"></i>';
    let myHTML = "";
    
    switch(thisType.toLowerCase()) {
        case "dog":
            myHTML = `<h2>${thisName}${dogIcon}</h2>`
        break;

        case "cat":
            myHTML = `<h2>${thisName}${catIcon}</h2>`
        break;

        case "bird":
            myHTML = `<h2>${thisName}${birdIcon}</h2>`
        break;
    }
    return myHTML;
}

function display(){
    // create the vars
    var pets = salon.pets;
    var text ="";
    var myNameHTML = "";
    const elPetSection=document.getElementById("js-petSection");

    // create table header row
    text+=
        `<tr class="pet">
        <th> Name </th>
        <th> Age </th>
        <th> Type </th>
        <th> Breed </th>
        <th> Color </th>
        <th> Gender </th>
        <th> Service </th>
        <th> Price </th>
        <th> Owner </th>
        <th> Contact </th>
    </tr>`;

    // travel the pets array
    for(var i=0;i<pets.length;i++){
        console.log(pets[i]);
        // create the HTML text
        myNameHTML=fetch_name_HTML(pets[i].type, pets[i].name)
        text+=
        `<tr class="pet">
                <td> ${myNameHTML} </td>
                <td> ${pets[i].age} </td>
                <td> ${pets[i].type} </td>
                <td> ${pets[i].breed} </td>
                <td> ${pets[i].color}</td>
                <td> ${pets[i].gender} </td>
                <td> ${pets[i].service}</td>
                <td> ${pets[i].price}</td>
                <td> ${pets[i].ownerName} </td>
                <td> ${pets[i].contactPhone} </td>
        </tr>`;
        console.log(text);
    }
    //display the pets on the HTML
    elPetSection.innerHTML=text;

}