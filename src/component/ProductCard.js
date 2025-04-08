import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
        <img className="img-style"src={item?.img} width={300}/>
        <div>
            {item?.choice == true?"Consciout choice":""}
        </div>
        <div>
        {item?.title}
        </div>
        <div>
        {item?.proice}
        </div>
        <div>
            {item?.new == true?"신제품":""}
        </div>
    </div>
  )
}

export default ProductCard