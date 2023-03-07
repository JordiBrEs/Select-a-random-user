const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users");

// console.log(selectUserNumber);

const getData = async function (numUsers){
    const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    // to see the array in the console
    console.log(data);
    
    const userResults = data.results;
    displayUsers(userResults);
};

getData(1);

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    // step 8
    for(const user of userResults){
        const name = user.name.first;
        const country = user.location.country;
        const imgUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `<h3>${name}</h3> <p>${country}</p> <img src=${imgUrl} alt="person avatar">`;
        randomFolks.append(userDiv);
    }  
};

selectUserNumber.addEventListener("change", function(e){
    const numUsers = e.target.value;
    getData(numUsers);
});
