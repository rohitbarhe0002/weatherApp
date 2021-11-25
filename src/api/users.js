import _Data from './Data.json'


const TIMEOUT = 100

export default {
  getUser: (cb, timeout) => setTimeout(() => cb(_Data), timeout || TIMEOUT),
  userlogOut:(cb, timeout)=>setTimeout(()=>{
    cb()
},timeout||TIMEOUT)
 
}


