import { useRef, useState } from 'react'
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'
import styles from './tic.module.css'
let data=['','','','','','','','','']
export default function TicTacToe()
 {

    const [count,setCount]=useState(0);
    const [lock,setLock]=useState(false);
    const result=useRef(null)
    const box1=useRef(null)
    const box2=useRef(null)
    const box3=useRef(null)
    const box4=useRef(null)
    const box5=useRef(null)
    const box6=useRef(null)
    const box7=useRef(null)
    const box8=useRef(null)
    const box9=useRef(null)
    const boxarray=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
    const toogle=(e,num)=>{
        if (lock) {
            return 0;
        }
       if (count%2==0) {
       
        e.target.innerHTML=`<img src='${cross}'/>`
        data[num]='x'
        setCount(count+1)
    
       }
       else
       {
        e.target.innerHTML=`<img src='${circle}'/>`
        data[num]='o'
        setCount(count+1)
    
       }
       
        checkwin()
       

    }
    const checkdata=(f,s,t,data)=>{
        if(data[f]===data[s]&&data[s]===data[t]&&data[t]!=='')
           return true
        else return false
    }
    const checkwin=( )=>
    {
        if (checkdata(0,1,2,data))
        {
            won(data[2])
        }
        else if (checkdata(3,4,5,data))
        {
            won(data[5])
        }
        else if (checkdata(6,7,8,data))
        {
            won(data[8])
        }
        else if (checkdata(0,3,6,data))
        {
            won(data[6])
        }
        else if (checkdata(1,4,7,data))
        {
            won(data[7])
        }
        else if (checkdata(2,5,8,data))
        {
            won(data[8])
        }
        else if (checkdata(0,4,8,data))
        {
            won(data[8])
        }
        else if (checkdata(2,4,6,data))
        {
            won(data[6])
        }
    }
    const won =(winner)=>{
        setLock(true)
        if (winner==='x') 
        {
            result.current.innerHTML=`Congrats! Player <img src=${cross}  /> won`
        }
        else 
        {
            result.current.innerHTML=`Congrats! Player  <img src=${circle}  />  won`
        }
    }

    const reset=()=>{
        setLock(false)
        data=['','','','','','','','','']
        boxarray.map((e)=>{
            e.current.innerHTML=""
        })
        result.current.innerHTML=''

    }
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>TicTacToe Player vs Player Game</h1>
     <div className={styles.board}>
       <div className={styles.row1}>
            <div ref={box1} className={styles.boxes} onClick={(e)=>toogle(e,0)}></div>
            <div ref={box2} className={styles.boxes} onClick={(e)=>toogle(e,1)}></div>
            <div ref={box3} className={styles.boxes} onClick={(e)=>toogle(e,2)}></div>
        </div> 
        <div className={styles.row2}>
            <div ref={box4} className={styles.boxes} onClick={(e)=>toogle(e,3)}></div>
            <div ref={box5} className={styles.boxes} onClick={(e)=>toogle(e,4)}></div>
            <div ref={box6} className={styles.boxes} onClick={(e)=>toogle(e,5)}></div>
        </div> 
        <div className={styles.row3}>
            <div ref={box7} className={styles.boxes} onClick={(e)=>toogle(e,6)}></div>
            <div ref={box8} className={styles.boxes} onClick={(e)=>toogle(e,7)}></div>
            <div ref={box9} className={styles.boxes} onClick={(e)=>toogle(e,8)}></div>
        </div> 
     </div>
     <div className={styles.results} ref={result}></div>
     <button className={styles.reset} onClick={( )=>{reset()}}>Reset</button>
    </div>
  )
}
