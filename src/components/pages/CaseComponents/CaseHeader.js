import React from 'react'



const CaseHeader = (props) => { 
    return (
        <div className="bg-gray-900 text-white">
            <img className="w-full" src={props.dataArray[props.index].img} alt=""/>
            <div className="w-10/12 md:w-9/12 lg:w-7/12 mx-auto py-3">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 mt-2 xs:mt-4 sm:mt-4 md:mt-8">{props.dataArray[props.index].name}</h1>
          <p className="mt-4 text-gray-100 leading-relaxed mb-2 xs:mb-4 sm:mb-2 md:mb-4 lg:mb-4">{props.dataArray[props.index].desc}</p>
          <hr className="w-full md:w-8/12 lg:w-6/12 mb-4 opacity-50"></hr>
          <div className="flex mb-4">
              <div className="mr-6 md:pr-24">
            <h2 className="font-bold text-gray-100 mb-3">Type</h2>
            <p className="text-gray-100">{props.dataArray[props.index].category}</p>
            </div>
            <div  className="mr-6 md:pr-24">
            <h2 className="font-bold text-gray-100 mb-3">Year</h2>
            <p className="text-gray-100">{props.dataArray[props.index].year}</p>
            </div>
            <div  className="">
            <h2 className="font-bold text-gray-100 mb-3">Role</h2>
            <p className="text-gray-100">{props.dataArray[props.index].role}</p>
            </div>
           
            </div>   
          </div> 
         
        </div>
    )
}

export default CaseHeader
