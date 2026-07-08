let promiseMethod = (success = true) => {

    return new Promise((resolve, reject) => {
        if (success) {
            setTimeout(() => {
                resolve("Promise Fulfilled Successfully.");
            }, 3000);
        } else {
            reject(new Error("Promise Method Failed"));
        }
    })
}

promiseMethod()
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log("Error:", error);
    })