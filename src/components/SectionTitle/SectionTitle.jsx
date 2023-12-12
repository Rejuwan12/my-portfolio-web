/* eslint-disable react/prop-types */



const SectionTitle = ({heading}) => {
    return (
        <div className=" mx-auto text-center  my-10">
            <h1 className="text-3xl font-bold uppercase">{heading}</h1>     
        </div>
    );
};

export default SectionTitle;