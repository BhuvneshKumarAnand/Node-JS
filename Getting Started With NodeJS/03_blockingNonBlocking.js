// JS is a single threaded language

// Blocking code

// for (let index = 0; index < 100000000000; index++) {
//     // some task
// }

// console.log("Hi");

// Non-Blocking code

setTimeout(() => {
    console.log("Task1");
}, 8000);

console.log("Task2");

// Event queue -> Event loop(Main Thread) -> DB/API -> Thread Pool (Node JS Runtime)

// Libuv - Asynchronous I/O made simple. (NodeJS library)
// libuv is a multi-platform support library with a focus on asynchronous I/O.