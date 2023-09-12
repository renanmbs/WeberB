import "./footer.css";
import {MdOutlineMail } from 'react-icons/md';
import {MdOutlineAlternateEmail, MdOutlineAttachMoney} from "react-icons/md"

export function Footer(){
    return (
        <div id="foot">

            <h2>Contact Us</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1085.2337599708294!2d-111.94717301569217!3d41.189000724901305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875308abe2c0c1d3%3A0xfc943a5a08926efa!2sWildcats%20Football%20Practice%20Field%20at%20Weber%20State%20University!5e0!3m2!1sen!2sus!4v1694499815165!5m2!1sen!2sus"
             allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"></iframe>
            

            <h3>Practices</h3>
            <p>Tueday and Thursday</p>
            <p>6pm to 8pm</p>

            <div id="cont">
                <a href="mailto:renan.mougenot@gmail.com" alt="Email Us" title="Email Us"><MdOutlineMail className="icons"/></a>
                <a href="https://www.instagram.com/wsumsoccer/" alt="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer"><MdOutlineAlternateEmail className="icons"/></a>
                <a href="https://securelb.imodules.com/s/953/dream125/aa17/index-no-header.aspx?sid=953&gid=16&pgid=1828&cid=3540&appealcode=MensSoccer19&dids=221&bledit=1" target="_blank" rel="noopener noreferrer" alt="Sponsorships" title="Sponsors"><MdOutlineAttachMoney className="icons"/></a>
            </div>
        </div>
    )
}