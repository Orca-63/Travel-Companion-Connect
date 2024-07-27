/* eslint-disable react/prop-types */

import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const SinglePlace = ({ removePlace }) => {

    const navigate = useNavigate();
    const { placeId } = useParams();
    const Places = useLoaderData();
    const onDeleteClick = (placeId) => {
        const confirm = window.confirm(
            'Are you sure you want to delete this travel plan?'
        );

        if (!confirm) return;
        console.log(placeId);
        removePlace(placeId);

        toast.success('Travel Plan deleted successfully');

        navigate('/Places');
    };

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/Places"
                        className="text-blue-800 font-bold
                         hover:text-pink-500 flex items-center"
                    >
                        <FaArrowLeft className='mr-2' /> Back to Travel Listings
                    </Link>
                </div>
            </section>

            <section className="bg-blue-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-pink-50 p-6 rounded-lg shadow-md text-center md:text-left">
                                <div className="text-blue-800 text-xl font-bold mb-4 ml-2">{Places.group_size}</div>
                                <h1 className="text-3xl font-bold mb-4 ml-2 text-pink-500 ">
                                    {`Travel Plan to ${Places.preferred_destination}`}
                                </h1>
                                <div className="text-blue-500 mb-3 flex align-middle justify-center md:justify-start">
                                    <i className="fa-solid fa-location-dot text-lg text-pink-700 mr-1 ml-2"></i>
                                    <p className="text-blue-800 text-xl font-bold">{Places.preferred_destination}</p>
                                </div>
                            </div>

                            <div className="bg-pink-50 p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-pink-500 text-4xl font-bold mb-6">
                                    Travel Description
                                </h3>

                                <p className="mb-4 text-blue-800 font-bold text-lg">
                                    {Places.destination_description}
                                </p>

                                <h3 className="text-blue-800 text-xl font-bold mb-2">Travel Period ~ </h3>

                                <p className="mb-4 text-pink-500 font-bold text-xl">{Places.availability}</p>

                                <div className="w-full h-68 mb-4 rounded-lg overflow-hidden">
                                    <img src={Places.image_url} alt={Places.preferred_destination} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </main>


                        <aside>

                            <div className="bg-pink-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-3xl font-bold mb-6 text-pink-500">Companion Info</h3>

                                <h2 className="text-2xl text-blue-800 font-bold">{Places.name}</h2>

                                <p className="my-2 text-blue-800 font-bold">
                                    {Places.aboutTraveller}
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl text-pink-500 font-bold">Contact Email:</h3>

                                <p className="my-2 bg-blue-100 p-2 font-bold text-blue-800 rounded-md">
                                    {Places.contact.email}
                                </p>

                                <h3 className="text-xl text-pink-500 font-bold ">Contact Phone:</h3>

                                <p className="my-2 bg-blue-100 p-2 font-bold text-blue-800 rounded-md"> {Places.contact.phone}</p>
                            </div>

                            <div className="bg-pink-50 p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-3xl font-bold mb-6 text-pink-500">Manage Travel Plan</h3>
                                <Link
                                    to={`/EditTravelPlan/${Places.id}`}
                                    className="bg-blue-800 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Travel Plan</Link>
                                <button
                                    onClick={() => onDeleteClick(Places.id)}
                                    className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Travel Plan
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

        </>
    )



};



const placeLoader = async ({ params }) => {
    const res = await fetch(`/api/Places/${params.id}`);
    const data = await res.json();

    return data;
};

export { SinglePlace as default, placeLoader };