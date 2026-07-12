let fetchUsersLocal = async () => {
    console.log("fetching users json local");
    let users = await fetch('./users.json').then(response => response.json()).catch(error => console.log(error));

    // the result of fetched users json local
    console.log("the result of fetched users json local");
    console.log(users);

}


//call it
fetchUsersLocal();
