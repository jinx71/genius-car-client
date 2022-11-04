import React from 'react';
import './team.css'
const TeamCard = ({ team }) => {
    return (
        <div className="card shadow-xl border border-gray-200">
            <div className=' rounded rounded-lg '>
                <figure className="px-5 pt-5">
                    <img src={team.img} alt="Shoes" className="rounded-xl teamImage" />
                </figure>
            </div>
            <div className="card-body">

                <h2 className="font-bold text-2xl text-center ">{team.name}</h2>

                <div className="card-actions flex-col justify-end items-center">

                    <p className='text-xl text-[#737373] font-bold'>{team.expertise}</p>
                    <p className='text-2xl font-bold text-center flex justify-center gap-2 mb-5'>

                        {
                            team.socialIcon.map(icon => <>{icon}</>)
                        }

                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;