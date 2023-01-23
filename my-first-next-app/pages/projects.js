

function Projects() {

const projects= [{
    id: "1", 
    title: "Online Store", 
    description: "Using HTML, CSS and JavaScript to build an online store with functional shopping cart",
    image:  <img src="/static/image2.jpg" alt="my image" />, 
    }, {
    id: "2", 
    title: "I-tunes app", 
    description:"Full-stack web application that interfaces with the iTunes Search API", 
    }, {
      id: "3", 
      title: "Weather App", 
      description:"React application that interfaces with the Open Weather App API", 
    },  {
        id: "3", 
        title: "Memory Game", 
        description:"Card matching game created with React", 
      }, {
        id: "4", 
        title: "Cars Database", 
        description:"Web application created with the MEARN stack", 
      }, {
        id: "5", 
        title: "To Do App", 
        description:"Web application created with the MEARN stack and JWT authentication", 
      }
    ]

return  projects.map(project =>
       <div  id= "projectsDiv" key = {project.id}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.image}
    </div>
    
)
   }

   export default Projects;
