let promise = new Promise((resolve, reject) => {
    let success = false; // Simulate an asynchronous operation

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});

promise
    .then((result) => {
        console.log(result); // "Operation was successful!"
    })
    .catch((e) => {
        console.error(e); // "Operation failed."
    }).finally()
