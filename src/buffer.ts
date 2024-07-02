// create buffer by allocating the bytes
const buffer = Buffer.alloc(5, 78);
console.log(buffer.toString());

buffer.write("😎");
console.log(buffer.toString("utf16le"));

// creating buffer from string
const buffer2 = Buffer.from("lasdkjfalsjdkflaskdj");
console.log(buffer2.toString());

// creating buffer from decimals
const buffer3 = Buffer.from([72, 101, 108, 108, 111]);
console.log(buffer3.toString());
