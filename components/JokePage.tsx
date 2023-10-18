"use client"

import React, { useState, useEffect } from 'react';

interface ChuckNorrisJoke {
    value: string;
}

const JokePage: React.FC = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        async function fetchChuckNorrisJoke() {
            try {
                const response = await fetch('https://api.chucknorris.io/jokes/random');
                const data: ChuckNorrisJoke = await response.json();
                const fetchedJoke: string = data.value;
                setJoke(fetchedJoke);
            } catch (error) {
                console.error('Could not fetch Joke', error);
            }
        }

        fetchChuckNorrisJoke();
    }, []);

    return (
        <section id='jokepage'>
            <div className='my-10'>
                <h1 className='text-center font-bold text-4xl pt-5'>Chuck Norris Joke
                    <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
                </h1>
                <p className='text-center text-2xl'>{joke}</p>
            </div>
        </section>
    );
};

export default JokePage;