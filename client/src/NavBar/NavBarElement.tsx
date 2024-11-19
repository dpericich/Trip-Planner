interface NavBarElementProps {
    title: string,
    iconPath: string
}

const NavBarElement = ({ title, iconPath }: NavBarElementProps) => {
    return (
        // Will need to make this a "Link" element
        // On hover change 
        <div className="flex justify-between bg-blue-800 px-2 py-4 border-b-4 border-indigo-900">
            {title}
            <img src={`./${iconPath}.png`} alt="" className="w-6" />
        </div>
    );
};

export default NavBarElement;