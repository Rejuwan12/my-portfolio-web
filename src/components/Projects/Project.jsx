import pic from '../../assets/1.jpg'
import pic1 from '../../assets/2.jpg'
import pic2 from '../../assets/3.jpg'
import SectionTitle from "../SectionTitle/SectionTitle";

const Project = () => {
  //  const [projects, setProjects] = useState([]);

  //  useEffect(()=>{
  //     fetch('project.json')
  //     .then(res => res.json())
  //     .then(data => setProjects(data))
  //  },[])
  //  console.log(projects);
  return (
    <div>
      <SectionTitle heading={"my latest projects"} />

      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 '>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
             className='w-52 h-80'
              src={pic}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Diagnostic Center Project</h2>
          
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Live</button>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
             className='w-52 h-80'
              src={pic1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Diagnostic Center Project</h2>
          
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Live</button>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
            className='w-52 h-80'
              src={pic2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Diagnostic Center Project</h2>
          
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Live</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
