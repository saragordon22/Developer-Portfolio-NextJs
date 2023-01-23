import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaRegAddressCard} from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


export default () => (
    <div id="contact">
    <p> <AiOutlineMail/> sara_pallotta@hotmail.co.uk</p>
    <p><BsTelephone/> 07879062628</p>
    <p><FaRegAddressCard/> 18 Quarry Crescent, Kilsyth, G65 0DR</p>
    <Link 
        href="https://www.linkedin.com/in/sara-gordon-810016251/">
        <AiFillLinkedin/>
        LinkedIn
    </Link>
    <Link 
       href="https://github.com/saragordon22/Capstone-Project"> 
       <AiFillGithub/>
       GitHub
       </Link>

    
    <style jsx>{`
     p {
       text-align: centre;
    }

    #contact {
        text-align: centre;
        border-style: solid;
        border-color: lightgrey;
        margin-top: 25px;
        padding-left: 25px;
        padding-bottom: 25px;
    }


     `}</style>

    </div>
)