require('babel-polyfill')
import dotenv from 'dotenv'
dotenv.config()

const {testWord} = process.env

function getWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('World');
      }, 2000);
    });
}
  
async function helloWorld(req, res){
  let name;
  await getWorld().then(a => {name = a});
  res.send(`${testWord} ${name}!`)
};

export {helloWorld}