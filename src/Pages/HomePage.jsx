
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import TravellersList from "../components/TravellersList";
import ViewAllPlaces from "../components/ViewAllPlaces";

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <TravellersList atHome={true} />
            <ViewAllPlaces />
        </>

    )
}

export default HomePage;