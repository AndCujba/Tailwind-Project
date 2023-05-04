import React from "react";


function Tabs({filterCategory, tabsData}){
    return(
        <>
 <div className="text-center  text-slate-600">
 {
 tabsData.map((category, index)=>{
      return (
        <button 
            className='border-black bg-gray-800 rounded-sm p-3 m-1 mt-20 mb-4  text-2xl text-white'
            onClick={()=> filterCategory(category)} key={index}>{category}</button>
            
      )
 })
 }
 <p className="text-xl mb-10 italic">Please select a category to view the recepies</p>
</div>
        </>
    )
}
export default Tabs;

