/* eslint-disable react/prop-types */
import { useState } from "react";
const AllLists = ({ place }) => {
    const [showFullDescription, setShowFullDescription] = useState(true);

    let description = place.destination_description;

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-pink-500 font-bold my-2">{place.group_size}</div>
                    <h3 className="text-blue-800 text-xl font-bold">{place.preferred_destination}</h3>
                </div>

                <div className="text-blue-700  mb-5">
                    {description}
                </div>
                <button onClick={
                    () => setShowFullDescription((prevState) => !prevState)
                } className="text-blue-800 mb-5 font-bold">{showFullDescription ? 'Show Less' : 'Show More'}</button>
                <h3 className="text-pink-500 font-bold mb-2">{place.availability}</h3>

                <div className="border border-blue-200 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-blue-800 font-bold mb-3">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                        <div>{place.name + ','}</div>
                        <div>{place.location}</div>
                    </div>
                    <a
                        href={`/Places/${place.id}`}
                        className="h-[36px] bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AllLists;