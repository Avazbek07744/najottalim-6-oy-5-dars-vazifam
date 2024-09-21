import React from 'react'
import img from '../img/icons8-delete.svg'
import img2 from '../img/yes.svg'

const Card = (props) => {
    let { input, id } = props.value
    let { dl } = props
    let {don} = props


    return (
        <div>
            <div className="flex p-6 bg-[#15101C] rounded-xl text-white justify-between mt-4">
                <h3 className='text-[#9E78CF]'>{input}</h3>
                <div className='flex gap-5'>
                    <button onClick={() => don(props.value)}><img src={img2} width={22} alt="" /></button>
                    <button onClick={() => dl(id)}><img src={img} width={22} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Card
