let delay = 0;
let str = "|/-\\|/-\\|"
 
for (let char of str) {

setTimeout(() => {

  process.stdout.write(`\r${char} `);
}, delay)

delay += 200;
}