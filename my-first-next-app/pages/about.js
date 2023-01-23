
function Welcome(props) {
    return <div>
    <div id="header">
    <h1>SARA GORODON </h1>
    <h2>DEVELOPER PORTFOLIO</h2>
    </div>
    <img id="image1" src="/static/image1.jpg" alt="my image" />

    <div id="intro">
    <h3>WHO I AM AND WHAT I DO</h3>
        <p>Hello, I'm Sara. </p> 
        <p>I'm currently a student at HyperiodDev completing a 6 month Full Stack Web Developer Bootcamp through the University of Edinburgh.</p>
        <p>I have worked in the voluntary sector for the last eight years and and am pursuing a career change into web development.</p>
        <p>I am motivated and have the ambition needed to learn the skills to make that happen.  I believe that I will find the work stimulating and rewarding and the working environment well-suited to my personality, experience and ambition. </p>
    </div>

   <div id="workHeading">
     <h3>WORK EXPERIENCE</h3>
     </div>

     <div id="work1">
     <h4>Senior Housing Adviser</h4>
     <h5>Shelter Scotland</h5>
     <h5>July 2016- Present </h5>
     <p> Operational and line management within a team that supports vulnerable consumers directly.</p>
     <p>Managing complex and changing workloads, while working under pressure in a proactive manner with minimum supervision.</p>
     <p>Driving continuous improvements from the planning to the implementation and monitoring of processes.</p>
     <p>Excellent written skills with demonstratable experience in writing procedures and reports.</p>
     <p>Proven stakeholder relationship management experience.</p>
     </div>
      
     <div id="work2">
     <h4>Helpline Adviser</h4>
     <h5>Shelter Scotland</h5>
     <h5>2014-2016 </h5>
     <p>Giving full telephone, email, and online chat advice on all areas of housing law</p>
     </div>

     <div id="work3">
     <h4>Project Co-ordinator</h4>
     <h5>Citizens Advice Bureau</h5>
     <h5>2010-2014 </h5>
     <p>Development of the new service within the project timescale.</p>
     <p>Promotion of the service through various channels and liaising with external advice agencies, triaging referrals to and from the project centrally,
         financial and statistical reporting relevant bodies.</p>
    <p>Carrying out research and consultation exercises</p>
    </div>

    <h3 id="educationHeading">EDUCATION</h3>
    <div id= 'education1'>
     <h4>Secondary School</h4>
     <h5>Our Lady's High School</h5>
     <h5>2000-2007</h5>
     </div>

    <div id= 'education2'>
     <h4>LLB Law(2:1)</h4>
     <h5>University of Strathclyde</h5>
     <h5>2008-2012</h5>
     </div>

     <div id= 'education3'>
     <h4>Full stack Web Development Bootcamp</h4>
     <h5>Hyperion Development</h5>
     <h5>2022-2023</h5>
     </div>

     <style jsx>{`
     img {
        border-radius:50%;
        height: 180px;
        width: 180px;
     }

    .eduction {
        // display: grid;
        // grid-template-columns: 1fr 1fr;
        // grid-gap: 20px;
        border-style: solid;
        border-color: lightgrey;
        display: inline-block;
        margin: 1.5px;
        padding: 1.5px;
    }

    #intro {
        text-align: centre;
        colour: blue;
    }

     `}</style>

    </div>;
    }
    export default Welcome;