import React, { useState } from 'react'
import Card from './Card'
import Cardtwo from './Cardtwo'

const Form = () => {
    const [value, setValue] = useState([])
    const [value2, setValue2] = useState([])
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [input, setInput] = useState('')
    const [show, setShow] = useState(false)

    function hendelClick(e) {
        e.preventDefault()
        setCounter(counter + 1)

        let valueFrom = {
            id: Date.now(),
            input
        }

        let copeid = [...value]
        copeid.push(valueFrom)
        setValue(copeid)
        setInput('')
    }

    function hendelDelet(id) {
        setCounter(counter - 1)

        let cope = [...value]
        cope = cope.filter(function (v) {
            return v.id != id
        })
        setValue(cope)
    }

    function hendelDone(obg) {
        setCounter(counter - 1)
        setCounter2(counter2 + 1)
        setShow(true)
        let cope = [...value]
        cope = cope.filter(function (v) {
            return v.id != obg.id
        })
        setValue(cope)

        let copeid = [...value2]
        copeid.push(obg)
        setValue2(copeid)
    }

    return (
        <div>
            <div className='mt-10  flex gap-4 justify-center'>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text"
                    className='text-[#9E78CF] max-w-[450px] w-full border border-[#9E78CF] bg-[#0D0714] p-2 rounded-[0.625rem] placeholder:text-sm px-5'
                    placeholder='Add a new task' />
                <button onClick={hendelClick} className='bg-[#9E78CF] w-11 text-white text-2xl rounded-xl'>+</button>
            </div>
            <div className="m-auto max-w-[500px] w-full mt-20">
                {
                    value.length > 0 && <h1 className='text-white text-xl'>Tasks - {counter}</h1>
                }
                <div className="mb-4">
                    {
                        value.length > 0 && value.map(function (v, i) {
                            return <Card don={hendelDone} dl={hendelDelet} value={v} key={i} />
                        })
                    }
                </div>
                {
                    show && <h1 className='text-white text-xl'>Done - {counter2}</h1>
                }
                <div className="">
                    {
                        value2.length > 0 && value2.map(function (v, i) {
                            return <Cardtwo value={v} key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Form
