import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazone from "./Amazone";

const favSeries='Amazone';

// const FavSeries=()=>{


// if(favSeries==='Netflix')
// {
//  return <Netflix/>
// }

// else{
//     return <Amazone/>
// }
// }


const App=()=>(
    <>
       <h1 className="heading_style"> List of My Fav netflix series</h1>
       {/* <FavSeries/> */}
       {/* {(favSeries==="Netflix")?  <Netflix/>:  <Amazone/>} */}
        {Sdata.map((val,index) => {
        console.log(index);
        return (
            <Card
      key={val.id}
      sname={val.sname}
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}

      />
        );
       })} 
    </>
);

export default App;