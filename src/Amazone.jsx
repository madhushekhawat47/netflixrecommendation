import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';
 const Amazone=()=>{
return (
    <Card
key={Sdata[2].id}
sname={Sdata[2].sname}
imgsrc={Sdata[2].imgsrc}
title={Sdata[2].title}
link={Sdata[2].link}

/>
);
 }
 export default Amazone;
