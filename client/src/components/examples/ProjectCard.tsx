import ProjectCard from '../ProjectCard'
import projectImage from '@assets/generated_images/Residential_landscape_project_5ba675b9.png'

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard
        id="1"
        title="Modern Zen Residence"
        location="Mumbai, India"
        category="Residential"
        image={projectImage}
      />
    </div>
  )
}
