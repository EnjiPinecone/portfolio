import ProjectDescription from "./ProjectDescription";
import ProjectPicture from "./ProjectPicture";

export default function Projects() {
  return (
    <div className="space-y-12">
        <div className=" grid md:grid-cols-2 grid-cols-1 rounded-xl shadow-md">
            <ProjectPicture imagePath={"./projectPicture.png"} className={'rounded-t-lg md:rounded-r-none md:rounded-l-lg'}/>
            <ProjectDescription projectTitle={"UBCab"} projectDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            } className={'rounded-b-lg md:rounded-b-none md:rounded-r-lg'} />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 rounded-xl shadow-md">
            <ProjectDescription projectTitle={"MentorHub"} projectDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            } className={'rounded-t-lg md:rounded-tr-none md:rounded-l-lg'} />
            <ProjectPicture imagePath={"./projectPicture2.png"} className={'rounded-b-lg md:rounded-b-none md:rounded-r-lg'}/>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 rounded-xl shadow-md">
            <ProjectPicture imagePath={"./projectPicture3.png"} className={'rounded-t-lg md:rounded-tr-none md:rounded-l-lg'}/>
            <ProjectDescription projectTitle={"iToim"} projectDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            } className={'rounded-b-lg md:rounded-b-none md:rounded-r-lg'} />
        </div>
    </div>

    

  ) 
}
