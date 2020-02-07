import React from 'react'

function PersonPresence(props) {
    const nums = props.nums.split(" ")
    return (
        <div title={`Presence of ${props.type} at home`} className='person-presence-main'>
            <div>
                <img className='number-of-persons-image' src={props.src}/>
            </div>
            <div className='person-presence-main-amount'>
                {nums[0]} / {nums[1]}
            </div>
        </div>
    )
}

export default PersonPresence