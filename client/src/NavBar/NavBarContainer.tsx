import NavBarElement from "./NavBarElement";

// I'm not sure there will be any props for this
// Will use redux or some state store for getting session data? 
const NavBarContainer = () => {
    return (
        // Will I have a static object I read in for this and just iterate over it?
        <div className="flex flex-col h-full justify-start">
            {/* This will need to have a prop for the icon file name */}
            {/* Just store all the icons in the public directory */}
            <NavBarElement title="Home" link="/home" iconPath="home" />
            <NavBarElement title="Itinerary" link="/itinerary" iconPath="itinerary" />
            <NavBarElement title="Travel" link="/travel" iconPath="travel" />
            <NavBarElement title="Lodgings" link="/lodgings" iconPath="hotel" />
            <NavBarElement title="Tours" link="/tours" iconPath="tours" />
            <NavBarElement title="Dining" link="/dining" iconPath="food" />
            <NavBarElement title="Trip Cost" link="/trip-cost" iconPath="money" />
            <div className="mt-auto bg-blue-100 py-4 px-2">
                Trip Planner &copy;
            </div>
        </div>
    );
};

export default NavBarContainer;