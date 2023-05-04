import React, { useState } from "react";
import Items from "./Items.js";
import Data from "./Data.js";
import Tabs from "./Tabs";



function Recipes() {
   
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["All Recepies", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category=="All Recepies"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category == category;
       })
       setData(filteredData);
    }
    return(
     
        <div className="flex flex-row bg-slate-100  ">
            <div className="flexflex-wrap ">
            <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            <Items data={data} />
            </div>
       </div>
    );  
}


export default Recipes;