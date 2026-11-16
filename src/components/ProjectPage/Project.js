import Clip from "../Clip.js"
const Project = ({ currentNode }) => {
  return (
    <Clip
      key={currentNode?.id}
      id={currentNode?.id}
      image={currentNode?.image}
      date={currentNode?.date}
      url={currentNode?.url}
      headline={currentNode?.headline}
      skills={currentNode?.skills}
      publication={currentNode?.publication}
      tags={currentNode?.tags}
    />
  )
}

export default Project
