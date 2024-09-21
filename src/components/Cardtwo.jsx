import React from 'react'
import img from '../img/resed.svg'

const Cardtwo = (props) => {
    let { input, id } = props.value

    return (
        <div>
            <div className="flex p-6 bg-[#15101C] rounded-xl text-white justify-between mt-4">
                <h3 className='text-[#78CF99] line-through'>{input}</h3>
                <div className='flex gap-5'>
                    <button onClick={() => dl(id)}><img src={img} width={22} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Cardtwo
