import Card from "./Card";
const HomeCards = () => {
    return (
        <>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

                        <Card bg='bg-blue-200 rounded-xl'>
                            <h2 className="text-blue-800 text-2xl font-bold">For Travelers</h2>
                            <p className="text-blue-800 mt-2 mb-4">
                                Browse travel plans and find companions to explore new places
                            </p>
                            <a
                                href="/BrowseTravelPlans"
                                className="inline-block bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-800"
                            >
                                Browse Travel Plans
                            </a>
                        </Card>


                        <Card bg='bg-indigo-200 rounded-xl'>
                            <h2 className="text-blue-800 text-2xl font-bold">Add Travel Plans</h2>
                            <p className="text-blue-800 mt-2 mb-4">
                                Plan your group adventures and find like-minded travelers
                            </p>
                            <a
                                href="/AddPlace"
                                className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                            >
                                Add Travel Plan
                            </a>
                        </Card>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCards;