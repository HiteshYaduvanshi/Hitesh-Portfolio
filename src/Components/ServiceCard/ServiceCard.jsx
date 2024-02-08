import React from 'react'

function ServiceCard({icon:Icon,heading,para,iconSize}) {
  return (
    <>
    <div className="text-center my-10 sm:basis-1/2 md:basis-1/3 px-4 w-full sm:h-48">
    <Icon className={`w-10 h-10 mx-auto ${iconSize}`}/>
    <h3 className="text-xl font-medium mb-3">{heading}</h3>
    <p className="text-[#777777] ">{para}</p>
    </div>
    </>
  )
}

export default ServiceCard
