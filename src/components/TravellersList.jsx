/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Places from '../Places.json';
import AllLists from './AllLists';
import { useState, useEffect } from 'react';
import Spinner from './ReactSpinners';
console.log(Places);
const TravellersList = ({ atHome = false }) => {
    const [places, AddPlace] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaces = async () => {
            const apiUrl = atHome ? '/api/Places?_limit=3' : '/api/Places'
            try {
                const res = await fetch(apiUrl);

                const data = await res.json();
                AddPlace(data);
            }
            catch (error) {
                console.log('Error in fetching Data', error);
            }

            finally {
                setLoading(false);
            }
        }

        fetchPlaces();
    }, []);
    return (

        <section className="bg-pink-100 px-4  py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-4xl font-bold text-pink-400 mb-6 text-center">
                    {atHome ? 'Featured Travel Plans' : 'All Travel Plans'}
                </h2>

                {loading ? (
                    <Spinner loading={loading} />) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {places.map((place) => (
                            <AllLists key={place.id} place={place} />
                        ))}
                    </div>
                )}
            </div>
        </section >

    )
}

export default TravellersList;