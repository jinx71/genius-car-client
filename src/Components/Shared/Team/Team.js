import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from './TeamCard';
import { BsFacebook, BsTwitter, BsMessenger } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import teamImageOne from '../../../Assets/images/team/1.jpg';
import teamImageTwo from '../../../Assets/images/team/2.jpg';
import teamImageThree from '../../../Assets/images/team/3.jpg';

const Team = () => {
    const teamData = [
        {
            id: 1,
            img: teamImageOne,
            name: "John Doe",
            expertise: "Engine Expert",
            socialIcon: [<BsFacebook></BsFacebook>, <BsTwitter></BsTwitter>, <FaInstagramSquare></FaInstagramSquare>, <BsMessenger></BsMessenger>]
        },
        {
            id: 2,
            img: teamImageTwo,
            name: "John Doe",
            expertise: "Engine Expert",
            socialIcon: [<BsFacebook></BsFacebook>, <BsTwitter></BsTwitter>, <FaInstagramSquare></FaInstagramSquare>, <BsMessenger></BsMessenger>]
        },
        {
            id: 3,
            img: teamImageThree,
            name: "John Doe",
            expertise: "Engine Expert",
            socialIcon: [<BsFacebook></BsFacebook>, <BsTwitter></BsTwitter>, <FaInstagramSquare></FaInstagramSquare>, <BsMessenger></BsMessenger>]
        }
    ]
    return (
        <div>
            <div className='w-1/2 mx-auto mb-12'>
                <h1 className='text-center text-xl text-primary font-bold'>Our Teams</h1>
                <h1 className='text-center text-5xl font-bold mt-5'>Meet Our Team</h1>
                <p className='text-center text-gray-500 capitalize mt-5'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                {
                    teamData.map(team => <TeamCard key={team.id} team={team}></TeamCard>)
                }
            </div>

        </div >
    );
};

export default Team;