
// 创建
var buf = Buffer.from([1,2,3])
buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
console.log(buf.toString())

buf = Buffer.from('test')
console.log(buf)

buf = Buffer.alloc(10) // 长度为10，默认为0
console.log(buf)

buf = Buffer.alloc(10, 'a') // 长度为10，默认为0x61
console.log(buf)

buf = Buffer.allocUnsafe(10) // 长度为10, 默认没有赋值
console.log(buf)

// 比较
const buf1 = Buffer.from('A')
const buf2 = Buffer.from('A')
const buf3 = Buffer.from('B')
const buf4 = Buffer.from('ABC')
const buf5 = Buffer.from('414243', 'hex')
const buf6 = Buffer.from('414243')
console.log(buf6)

// 内容一致即为相等
console.log(buf1.equals(buf2))
console.log(buf1.equals(buf3))
console.log(buf4.equals(buf5))

console.log(buf1.compare(buf2))
console.log(buf1.compare(buf3))
console.log(buf4.compare(buf1))

// Buffer 没一个数的长度为8字节 大小0-255

const buff_con = Buffer.concat([buf1, buf2])
console.log(buff_con)

// ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区
var buffer = new ArrayBuffer(8);
var arr = new Uint8Array(buffer)
arr[4] = 10
console.log(arr.byteOffset)
console.log(arr)
arr = new Uint8Array(buffer, 2)
arr[0] = 10
console.log(arr.byteOffset)  // 
console.log(arr, buffer)

