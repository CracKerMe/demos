#!/usr/bin/env zx
$.verbose = false

cd('./imgs')
const start = async () => {
  for (let index = 0; index < 55; index++) {
    await fetch(`https://www.jq22.com/tx/${index + 1}.png`).then((res) => res.arrayBuffer())
    .then(arrayBuffer => {
      fs.writeFileSync(`${index + 1}.png`, toBuffer(arrayBuffer))
      console.log(`${index + 1}.png` + chalk.green(' done!'))
    })
  }
}
start()
function toBuffer(arrayBuffer) {
  const buffer = Buffer.alloc(arrayBuffer.byteLength);
  const view = new Uint8Array(arrayBuffer);
  for (let i = 0; i < buffer.length; ++i) {
    buffer[i] = view[i];
  }
  return buffer;
}



















// let {version} = await fs.readJson('../package.json')
// echo(version)
// console.log(chalk.blue('Hello world!'))

// let response = await fetch('https://juejin.cn/post/7062583323939307533');
// if(response.ok) {
//   console.log(await response.text())
//   fs.outputFileSync()
// }