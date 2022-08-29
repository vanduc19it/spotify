import React, { useContext } from 'react';
import { Songs } from '../Context';

export default function DetailSong() {
    const {song} = useContext(Songs)

    return (
        <div className="col-span-1 mt-3">
            <h2 className="text-cyan-500 font-bold ">Now Playing</h2>
            <h2 className="text-gray-300 font-bold text-xl mt-3">{song.name}</h2>
            <div className="w-[220px] m-auto mt-10">
                <img  className="w-full" src={song.links.images[0].url} alt='avatar'/>   
            </div>
            <div className='flex justify-evenly items-center mt-10'>
                <img className='w-[70px] rounded-full' src={song.links.images[0].url} alt='avatar'/>   
                <span className="text-xl text-white">{song.author}</span>
            </div>
        </div>
    )
}