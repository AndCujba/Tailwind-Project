import React from "react";

function Items({data}){
    return (
        <div className="px-[300px] grid grid-cols-3 gap-4 content-center max-xl:grid-cols-1 max-xl:px-10">
        {
          data.map((value)=>{
           const {id, image, title, description} = value;
           return (
            <div className="" key={id}>
             <div className="bg-white text-center p-2 shadow-md hover:shadow-2xl  ">
                 <img src={image} className="w-full aspect-square object-cover shadow" style={{height:"250px"}}/>
                 <h3 className="text-2xl font-serif  my-3 border-b pb-2 border-nlue-200 ">{title}</h3>
                 <p className="line-clamp-4 mb-3  ">{description}</p>
            </div>
         </div>
           )
          })
        }
</div>
    )
}
export default Items;