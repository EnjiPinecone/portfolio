import SummaryBox from "./SummaryBox";

const jobs = [
  {
    jobTitle: "Sr. Frontend Developer",
    responsibilities: [ "Lorem ipsum dolor sit."," Lorem ipsum dolor sit amet. Lorem ipsum dolor sit."," Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet consectetur."," Lorem ipsum dolor sit."
    ],
    date: "Nov 2021 - Present"
  },
  {
    jobTitle: "Team Lead",
    responsibilities: ["Lorem ipsum dolor sit."," Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet consectetur."," Lorem ipsum dolor sit."],
    date: "Jul 2017 - Oct 2021"
  },
  {
    jobTitle: "Full Stack Developer",
    responsibilities: ["Lorem ipsum dolor sit."," Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet consectetur."," Lorem ipsum dolor sit."],
    date: "Dec 2015 - May 2017"
  },
]

export default function Summary() {
  return (
    <div  className="space-y-12">
      {jobs.map((job, idx) => <SummaryBox key={idx} jobTitle={job.jobTitle} responsibilities={job.responsibilities} date={job.date}/>)}
    </div>
  )
}
