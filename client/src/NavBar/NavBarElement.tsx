interface NavBarElementProps {
    title: string,
}

const NavBarElement = ({ title }: NavBarElementProps) => {
    return (
        // Will need to make this a "Link" element
        <div className="w-36 bg-blue-800 px-2 py-4 border-b-4 border-indigo-900">
            {title}
        </div>
    );
};

export default NavBarElement;