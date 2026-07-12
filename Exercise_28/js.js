let promiseMethod = (success = true) => {

    return new Promise((resolve, reject) => {
        if (success) {
            setTimeout(() => {
                console.log("Promise Fulfilled Successfully.");
                resolve({ name: "Ali", age: 30 });
            }, 3000);
        } else {
            reject(new Error("Promise Method Failed"));
        }
    })
}

let asyncMethod = async (success = true) => {

    try {
        let result = await promiseMethod(success);
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

asyncMethod();