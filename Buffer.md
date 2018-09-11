# Buffer模块

## 创建

- Buffer.alloc(length)
- Buffer.allocUnsafe(length)
- Buffer.from(array)

## buffer比较

- buf.equals(otherBuffer)
- buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
- 类方法 Buffer.compare 等同于buf.compare

## buffer连接

- 类方法 Buffer.concat(list[, totalLength])

## buffer复制

- buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])

## buffer查找

- buf.indexOf(value[, byteOffset][, encoding])
  + value: String/Integer/Buffer
  + byteOffset: 偏移
  + encoding: value的类型是String时起作用

## buffer写

- buf.write(string[, offset[, length]][, encoding])
  + string: 写入的字符串
  + offset: 偏移,从哪里开始写，默认0
  + length: 长度，写多长，默认是buf.length - offset
  + encoding: 字符串的编码,默认是utf8

## buffer填充

- buf.fill(value[, offset[, end]][, encoding])
  + value: String/integer/Buffer
  + offset: 开始偏移，默认是0
  + end: 停止填充的位置，默认是buf.length
  + encoding: 如果value是String，那么为value的编码，默认是utf8。

## buffer转成字符串

- buf.toString([encoding[, start[, end]]])
  + 支持的编码
    * 'ascii' - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
    * 'utf8' - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
    * 'utf16le' - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
    * 'ucs2' - 'utf16le' 的别名。
    * 'base64' - Base64 编码。当从字符串创建 Buffer 时，按照 RFC4648 第 5 章的规定，这种编码也将正确地接受“URL 与文件名安全字母表”。
    * 'latin1' - 一种把 Buffer 编码成一字节编码的字符串的方式（由 IANA 定义在 RFC1345 第 63 页，用作 Latin-1 补充块与 C0/C1 控制码）。
    * 'binary' - 'latin1' 的别名。
    * 'hex' - 将每个字节编码为两个十六进制字符。

## buffer转成JSON字符串

- buf.toJSON()

## buffer遍历

- buf.values()
- buf.keys()
- buf.entries()

## buffer截取

- buf.slice([start[, end]])
  + 注意这里并没有返回新的buffer对象

> buffer内存空间分配好之后不能改变大小
> Buffer是里面封装了一个ArrayBuffer，ArrayBuffer是通用的数据缓冲区


