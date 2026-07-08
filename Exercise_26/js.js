let blockingMethod = () => {
    console.log("Blocking Method Body");
}
let NonblockingMethod = () => {
    setTimeout(() => {
        console.log("From Non-blocking Method Body");
    }, 3000);

}


blockingMethod();
console.log("Blocking Method Call Ended");

NonblockingMethod();
console.log("This Text should come last 👈");