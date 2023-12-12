import SectionTitle from "../SectionTitle/SectionTitle";

const Experience = () => {
  return (
    <div>
      <SectionTitle heading={"education & experience"} />

      <div className="md:flex text-center gap-4 mb-4 p-2">
        <div className="space-y-2 text-start">
            <h1 className="text-2xl font-bold">My Education</h1>
            <h2 className="text-xl font-semibold">Honours Of Political Science</h2>
            <p className="font-bold">National University</p>
            <p className="text-lg ">I am currently studying Honours 1st Year in National University.I am studying so that I can do something better in the future</p>
            <hr className="w-2/4"/>
        </div>
        <div className="space-y-2 text-end">
            <h1 className="text-2xl font-bold">My Experience</h1>
            <h2 className="text-xl font-semibold">Jr.Front End Developer</h2>
            <p className="font-bold">------------</p>
            <p className="text-lg">I currently have no job skills. But I am interested in the job</p>
            <hr className="w-2/4 flex  text-end " />

        </div>
      </div>
    </div>
  );
};

export default Experience;
