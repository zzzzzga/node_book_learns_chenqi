const { spawn } = require('child_process'); 
const iconv = require('iconv-lite')
const ls = spawn('cmd.exe', ['/c', 'dir']);

ls.stdout.on('data', (data) => {
  console.log(`输出：${iconv.decode(data, 'gbk')}`);
});

ls.stderr.on('data', (data) => {
  console.log(`错误：${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});