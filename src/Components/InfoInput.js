import React from 'react'

function InfoInput({ number, address, street, post, country, setAddress, setCountry, setNumber, setPost, setStreet }) {
    return (
        <>
            <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder='Phon number' />
            <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder='address' />
            <div className='flex gap-3'>
                <input
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    type="text"
                    placeholder='street' />
                <input
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    type="text"
                    placeholder='postCode' />
            </div>
            <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                placeholder='country' />
        </>
    )
}

export default InfoInput