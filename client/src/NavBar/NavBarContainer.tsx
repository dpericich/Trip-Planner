import NavBarElement from "./NavBarElement";

// I'm not sure there will be any props for this
// Will use redux or some state store for getting session data? 
const NavBarContainer = () => {
    return (
        // Will I have a static object I read in for this and just iterate over it?
        <div className="flex flex-col h-full justify-start">
            {/* This will need to have a prop for the icon file name */}
            {/* Just store all the icons in the public directory */}
            <NavBarElement title="Home" />
            <NavBarElement title="Travel" />
            <NavBarElement title="Accomodations" />
            <NavBarElement title="Tours" />
            <NavBarElement title="Dining" />
            <NavBarElement title="Trip Cost" />
            <div className="mt-auto bg-blue-100 py-4 px-2">
                Trip Planner &copy;
            </div>
        </div>
    );
};

export default NavBarContainer;