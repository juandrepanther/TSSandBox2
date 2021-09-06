import React, { useEffect, useState} from "react"
import { List } from "./components/List" 

const App: React.FC = () => {
  const [arrList, setArrList] = useState<string[]>(['Trees', 'Plants', 'Flowers'])
  const [count, setCount] = useState<number>(1)
  const [dataObj, setDataObj] = useState<any>()

  const getImages = (count: number) => {
    const numArr: number[] = []
    for (let i=1; i<=count; i++) numArr.push(i)

    return numArr.map(item=> {
        return <a className="carousel-item"  key={item.toString()} href={item.toString()}>
                <img alt='' src={`https://lorempixel.com/250/250/nature/${item}`}/>
              </a>
      })  

  }


  useEffect(()=>{
    fetch('https://ghibliapi.herokuapp.com/people')
      .then(res=> res.json())
      .then(res=> setDataObj(res))
      .catch(err=> console.log(err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    
  console.log(dataObj)

  function mergedObj<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b)
  } 

  const mergedRes = mergedObj({name: 'Jonas'}, {age: 53})

  console.log(mergedRes.name);



  
const mapperarr = (data: Array<string>) => data.map(item => <p key={Math.random()}>{item}</p>)

  const push = (): void => {
    setCount(prev => prev + 1)
    const newArr: string[] = [...arrList, `Pushed ${count}x`]
    setArrList(newArr) 
    console.log('clicked')
  }

  return (
    <>
    <div className="carousel">{getImages(8)}</div>
      {mapperarr(arrList)}
      <a href="#/" onClick={()=>push()} className="waves-effect waves-light btn-small">PUSH</a>
      <List data={arrList}/>
    </>
    )
}

export default App;  
