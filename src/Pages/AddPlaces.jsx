import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddPlace = ({ AddPlaceSubmit }) => {


    const [group_size, setgroup_size] = useState('');
    const [name, setTravelBuddy] = useState('');
    const [preferred_destination, setpreferred_destination] = useState('');
    const [destination_description, setdestination_description] = useState('');
    const [availability, setAvailability] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image_url, setimage_url] = useState('https://w0.peakpx.com/wallpaper/187/442/HD-wallpaper-amazing-beautiful-places-beautiful-place-beach.jpg'
    );
    const [aboutTraveller, setAboutTraveller] = useState('I love travelling!!')
    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        const newPlace = {
            group_size,
            name,
            preferred_destination,
            destination_description,
            availability,
            location,
            image_url,
            aboutTraveller,

            contact:
            {
                name: name,
                group_size: group_size,
                preferred_destination: preferred_destination,
                destination_description: destination_description,
                email: email,
                phone: phone,

            },

        };
        console.log(newPlace);
        AddPlaceSubmit(newPlace);
        toast.success('Travel Plan Added Successfully')
        return navigate('/Places');
    }
    return (
        <section className="bg-blue-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-pink-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                        <h2 className="text-4xl text-center font-semibold mb-6 text-pink-500 ">Add Travel Plan!</h2>

                        <div className="mb-4">
                            <label htmlFor="group_size" className="block text-blue-800 font-bold mb-2 py-2 text-xl">Type</label>
                            <select
                                id="group_size"
                                name="group_size"
                                className="border rounded-md w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                                value={group_size}

                                onChange={(e) => {

                                    setgroup_size(e.target.value);

                                }}
                            >
                                <option value="Companion">Companion</option>
                                <option value="Group">Group</option>

                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-blue-800 font-bold mb-2 text-xl py-2 "> Name</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="e.g. Adventurous Explorer"
                                required

                                value={name}

                                onChange={(e) => {

                                    setTravelBuddy(e.target.value);

                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="preferred_destination" className="block text-blue-800 font-bold mb-2 text-xl py-2">Destination</label>
                            <input
                                id="preferred_destination"
                                name="preferred_destination"
                                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"

                                placeholder="e.g. Mount Fuji" required

                                value={preferred_destination}
                                onChange={(e) => {

                                    setpreferred_destination(e.target.value);

                                }}
                            ></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="destination_description" className="block text-blue-800 font-bold mb-2 text-xl py-2">Description</label>
                            <textarea
                                id="destination_description"
                                name="destination_description"
                                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                rows="4"
                                placeholder="Add any travel interests, plans, or requirements" required

                                value={destination_description}
                                onChange={(e) => {

                                    setdestination_description(e.target.value);

                                }}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="availability" className="block text-blue-800 font-bold mb-2 text-xl py-2">Availability</label>
                            <input
                                type="text"
                                id="availability"
                                name="availability"
                                className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="e.g. July 2024 - August 2024"
                                required

                                value={availability}

                                onChange={(e) => {

                                    setAvailability(e.target.value);

                                }}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-blue-800 font-bold mb-2 text-xl py-2'>Location</label>
                            <input
                                type='text'
                                id='location'
                                name='location'
                                className='border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
                                placeholder='Current Location'
                                required

                                value={location}

                                onChange={(e) => {

                                    setLocation(e.target.value);

                                }}
                            />
                        </div>

                        <h3 className="text-2xl mb-5 text-pink-500 font-bold mt-8">Additional Info</h3>

                        <div className="mb-4">
                            <label htmlFor="contact_email" className="block text-blue-800 font-bold mb-2 text-xl "> Contact Email</label>
                            <input
                                type="email"
                                id="contact_email"
                                name="contact_email"
                                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Email address for contact"
                                required

                                value={contact.email}

                                onChange={(e) => {

                                    setEmail(e.target.value);

                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contact_phone" className="block text-blue-800 font-bold mb-2 text-xl py-2">Contact Phone</label>
                            <input
                                type="tel"
                                id="contact_phone"
                                name="contact_phone"
                                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Optional phone number"

                                value={contact.phone}

                                onChange={(e) => {

                                    setPhone(e.target.value);

                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="preferred_destination" className="block text-blue-800 font-bold mb-2 text-xl py-2">Image of the Destination</label>
                            <input
                                id="image_url"
                                name="image_url"
                                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"

                                placeholder="Please put the link of destination's image "

                                value={image_url}
                                onChange={(e) => {

                                    setimage_url(e.target.value);

                                }}
                            ></input>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label htmlFor="destination_description" className="block text-blue-800 font-bold mb-2 text-xl py-2">About Yourself!</label>
                                <textarea
                                    id="aboutTraveller"
                                    name="aboutTraveller"
                                    className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    rows="4"
                                    placeholder="Add any travel interests, plans, or requirements" required

                                    value={aboutTraveller}
                                    onChange={(e) => {

                                        setAboutTraveller(e.target.value);

                                    }}
                                ></textarea>
                            </div>

                            <button
                                className="bg-blue-900 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-10"
                                type="submit"
                            >
                                Add My Plan!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddPlace;
