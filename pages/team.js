
import styles from "../styles/team.module.css";
import Image from 'next/image'

import sec from 'assets/img/team/core/Tejansh Sachdeva-Sec.jpg'
import asec from 'assets/img/team/core/Maneesh Reddy Asec.jpeg'
import asec2 from 'assets/img/team/core/Sree Sudhesh-ASec.jpg'
import treas from 'assets/img/team/core/Rudraksh Jawade-treasurer.jpg'
import adv from 'assets/img/team/core/Darsh Oswal-adv.jpg'
import fc from 'assets/img/team/core/Manjunath MGM-FC.jpg'


import design from 'assets/img/team/subcore/Aradhya Dev_Design Head.jpg'
import design2 from 'assets/img/team/subcore/PratyushKamal_DesignLead.jpeg'
import marketing from 'assets/img/team/subcore/Armaan Grover_Marketing.jpg'
import marketing2 from 'assets/img/team/subcore/MuskanKalra_MarketingLead.jpg'
import content from 'assets/img/team/subcore/Bharathi Ravi Content Lead.png'
import content2 from 'assets/img/team/subcore/Rimmalapudi Viswa Teja_Content Lead.jpg'
import spons from 'assets/img/team/subcore/Dhruv Sachdeva_ PR and spons.jpg'
import spons2 from 'assets/img/team/subcore/Kashvi Sah_ PR and Spons.jpg'
import videography from 'assets/img/team/subcore/Jaideep K_Videography Lead.jpg'
import web from 'assets/img/team/subcore/Kunal passan webdev Lead.jpg'
import web2 from 'assets/img/team/subcore/Tushar Juneja_Web Dev lead.jpg'


import { useState } from 'react'


const team =() => {
    const [showMe, setShowMe] = useState(false);
    function toggle(){
    setShowMe(!showMe);
    }
    const [showMe1, setShowMe1] = useState(false);
    function toggle1(){
    setShowMe1(!showMe1);
    }
    const [showMe2, setShowMe2] = useState(false);
    function toggle2(){
    setShowMe2(!showMe2);
    }
    const [showMe3, setShowMe3] = useState(false);
    function toggle3(){
    setShowMe3(!showMe3);
    }
    const [showMe4, setShowMe4] = useState(false);
    function toggle4(){
    setShowMe4(!showMe4);
    }
    const [showMe5, setShowMe5] = useState(false);
    function toggle5(){
    setShowMe5(!showMe5);
    }
    const [showMe6, setShowMe6] = useState(false);
    function toggle6(){
    setShowMe6(!showMe6);
    }
    return (
    <>
    <section className={styles.sitebg}>
        <div>
            <h1 className={styles.coreTitle}>The  Core</h1>
        </div>
        <div className={styles.coreCompBox}>
            
            <div >
                <Image className={styles.coreMemImg} src={sec} alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Tejansh Sachdeva</h3>
                <h2 className={styles.corePosT}>Secretary</h2>
            </div>
            
            <div >
                <Image className={styles.coreMemImg} src={asec}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Maneesh Reddy</h3>
                <h2 className={styles.corePosT}>Associate<br></br>Secretary</h2>
            </div>
            <div >
                <Image className={styles.coreMemImg} src={asec2}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Sree Sudhesh</h3>
                <h2 className={styles.corePosT}>Associate<br></br>Secretary</h2>
            </div>
            <div >
                <Image className={styles.coreMemImg} src={treas}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Rudraksh Jawade</h3>
                <h2 className={styles.corePosT}>Treasurer</h2>
            </div>
            
            <div >
                <Image className={styles.coreMemImg} src={adv}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Darsh Oswal</h3>
                <h2 className={styles.corePosT}>Advisor</h2>
            </div>
            <div >
                <Image className={styles.coreMemImg} src={fc}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Manjunath MGM</h3>
                <h2 className={styles.corePosT}>Freshmen<br></br>Co-ordinator</h2>
            </div>
        </div>
    </section>


    <section className={styles.sitebg}>
        <div>
            <h1 className={styles.sCoreTitle}>The  Subcore</h1>
        </div>
        <div className={styles.sCoreCompBox}>
            <div>
                <Image className={styles.sCoreMemImg} src={design}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Aradhya Dev</h3>
                <h2 className={styles.sCorePosT}>Design Head</h2>
            </div>
            <div>
                <Image className={styles.sCoreMemImg} src={design2}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Pratyush Kamal</h3>
                <h2 className={styles.sCorePosT}>Design Head</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src={marketing}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Armaan Grover</h3>
                <h2 className={styles.sCorePosT}>Marketing Head</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src={marketing2}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Muskan Kalra</h3>
                <h2 className={styles.sCorePosT}>Marketing Head</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src={content}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Bharathi Ravi</h3>
                <h2 className={styles.sCorePosT}>Content Head</h2>
            </div>    
            <div>
                <Image className={styles.sCoreMemImg} src={content2}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Rimmalapudi Viswa Teja</h3>
                <h2 className={styles.sCorePosT}>Content Head</h2>
            </div>
        </div>
        <div className={styles.sCoreCompBox2}>
            <div >
                <Image className={styles.sCoreMemImg} src={spons}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Dhruv Sachdeva</h3>
                <h2 className={styles.sCorePosT}>Sponsorship And<br></br> PR Head</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src={spons2}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Kashvi Sah</h3>
                <h2 className={styles.sCorePosT}>Sponsorship And<br></br> PR Head</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src={videography}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Jaideep K</h3>
                <h2 className={styles.sCorePosT}>Videography<br></br>Head</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src={web}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Kunal Passan</h3>
                <h2 className={styles.sCorePosT}>Web Development<br></br>Head</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src={web2}alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Tushar Juneja</h3>
                <h2 className={styles.sCorePosT}>Web Development<br></br>Head</h2>
            </div>
        </div>
        </section>


    <section className={styles.sitebg}>
        <div className={styles.teamHead}>
            <h1 className={styles.teamTitle}>People who get<br/> shit done</h1>
        </div>
        <div className={styles.teamCompBoxFlex}>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>Content team</h2>
                    <h2 className={styles.teamName}>Content team</h2>
                    <p className={styles.teamMemNames}>Viswa<br/></p>
    <p className={styles.teamMemNames}>Jatin K<br/></p>
    <p className={styles.teamMemNames}>KVS Tarun<br/></p>
                    <p className={styles.teamMemNames}>Bharathi<br/></p>
                    <p className={styles.teamMemNames}>Aditya Raghuram<br/></p>
                    <p className={styles.teamMemNames}>Deepshika Chand<br/></p>
                    <p className={styles.teamMemNames}>Ishani Singh<br/></p>
                    <p className={styles.teamMemNames}>Jashn Sadh<br/></p>
                    <p className={styles.teamMemNames}>Mehar Verma<br/></p>
                    <p className={styles.teamMemNames}>Noor Walia<br/></p>
                    <p className={styles.teamMemNames}>Pritika Gandhi<br/></p>
                    <p className={styles.teamMemNames}>Srishti Khanna<br/></p>
                    
                    <p className={styles.teamMemNames}>Mugdha Gadgil<br/></p>
                    <p className={styles.teamMemNames}>Partth Kant<br/></p>
                    <p className={styles.teamMemNames}>Aakrisht Narang<br/></p>
                    <p className={styles.teamMemNames}>Ananya Garg<br/></p>
                    <p className={styles.teamMemNames}>Nikhil Agarwal<br/></p>
                    <p className={styles.teamMemNames}>Revanth<br/></p>
                    <p className={styles.teamMemNames}>Tanuj Naidu<br/></p>
                </div>
            </div>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>Marketing team team</h2>
                    <p className={styles.teamMemNames}>Muskan Kalra<br/></p>
                    <p className={styles.teamMemNames}>Armaan<br/></p>
                    <p className={styles.teamMemNames}>Saniya<br/></p>
                    <p className={styles.teamMemNames}>Udhaya Shree<br/></p>
                    <p className={styles.teamMemNames}>Mahesh Kumar<br/></p>
                    <p className={styles.teamMemNames}>Janardhan<br/></p>
                    <p className={styles.teamMemNames}>Krish Rijhwani <br/></p>
                    <p className={styles.teamMemNames}>Vanshika Jain<br/></p>
                    <p className={styles.teamMemNames}>Darpin Mevcha<br/></p>
                    <p className={styles.teamMemNames}>Payas Katyal <br/></p>
                    <p className={styles.teamMemNames}>Raghav Mathur<br/></p>
                    <p className={styles.teamMemNames}>Avi Popli<br/></p>
                    <p className={styles.teamMemNames}>Mehk Khurana <br/></p>
                    <p className={styles.teamMemNames}>Aanya Anand <br/></p>
                    <p className={styles.teamMemNames}>Manas Kanodia<br/></p>
                    <p className={styles.teamMemNames}>Piyush Mahajan<br/></p>
                    <p className={styles.teamMemNames}>Shreyash Sharma<br/></p>
                    <p className={styles.teamMemNames}>Nupur Sharma<br/></p>
                    <p className={styles.teamMemNames}>Trivikram Gupta<br/></p>
                    <p className={styles.teamMemNames}>Kartikey Sharma<br/></p>
                    <p className={styles.teamMemNames}>Ashana Gambhir<br/></p>
                    <p className={styles.teamMemNames}>Maira Bhatia<br/></p>
                    <p className={styles.teamMemNames}>Bharathi Subramanian Nagarajan<br/></p>
                </div>
            </div>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>Web--Dev team team</h2>
                    <p className={styles.teamMemNames}>Kunal Passan <br/></p>
                    <p className={styles.teamMemNames}>Tushar Juneja<br/></p>
                    <p className={styles.teamMemNames}>Tanishq Nehra<br/></p>
                    <p className={styles.teamMemNames}>Narayana<br/></p>
                </div>
            </div>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>Design & videography</h2>
                    <p className={styles.teamMemNames}>Pratyush<br/></p>
                    <p className={styles.teamMemNames}>Aradhya<br/></p>
                    <p className={styles.teamMemNames}>Jaideep<br/></p>
                    <p className={styles.teamMemNames}>Akshat Shashi<br/></p>
                    <p className={styles.teamMemNames}>Rithvik<br/></p>
                    <p className={styles.teamMemNames}>Ashar Hussain<br/></p>
                    <p className={styles.teamMemNames}>Arsh Bhasin<br/></p>
                    <p className={styles.teamMemNames}>Akaash Emmanuel Rayipudi<br/></p>
                    <p className={styles.teamMemNames}>Vrinda Garg<br/></p>
                    <p className={styles.teamMemNames}>Arohi Verma<br/></p>
                    <p className={styles.teamMemNames}>Arushi Agarwal<br/></p>
                    <p className={styles.teamMemNames}>Paresh Malviya<br/></p>
                    <p className={styles.teamMemNames}>Hardik Gupta<br/></p>
                </div>
            </div>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>PR & PR & Sponsorship</h2>
                    <p className={styles.teamMemNames}>Kashvi<br/></p>
                    <p className={styles.teamMemNames}>Dhruv<br/></p>
                    <p className={styles.teamMemNames}>Mahika<br/></p>
                    <p className={styles.teamMemNames}>Avyukth Ravi Kumar<br/></p>
                    <p className={styles.teamMemNames}>Shringarika Gupta<br/></p>
                    <p className={styles.teamMemNames}>Ekansh Tandon<br/></p>
                    <p className={styles.teamMemNames}>Darpin Mevcha<br/></p>
                    <p className={styles.teamMemNames}>Preksha Khandelwal<br/></p>
                    <p className={styles.teamMemNames}>Arnav Prabhakhar<br/></p>
                    <p className={styles.teamMemNames}>Adi Satya Arora <br/></p>
                    <p className={styles.teamMemNames}>Misha <br/></p>
                    <p className={styles.teamMemNames}>Sweta Agrahari<br/></p>
                    <p className={styles.teamMemNames}>Eklavya Nath<br/></p>
                    <p className={styles.teamMemNames}>Srinivas<br/></p>
                </div>
            </div>
            <div   className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>EM team</h2>
                    <p className={styles.teamMemNames}>Manjunath<br/></p>
                    <p className={styles.teamMemNames}>Udit Singh<br/></p>
                    <p className={styles.teamMemNames}>Romir Biswas<br/></p>
                    <p className={styles.teamMemNames}>Pranav Varma<br/></p>
                    <p className={styles.teamMemNames}>Satyendra<br/></p>
                    <p className={styles.teamMemNames}>Anish Gupta<br/></p>
                    <p className={styles.teamMemNames}>Diva Goel<br/></p>
                    <p className={styles.teamMemNames}>Pratishtha Valecha<br/></p>
                    <p className={styles.teamMemNames}>Anya dhawan<br/></p>
                    <p className={styles.teamMemNames}>Shringarika Gupta<br/></p>
                    <p className={styles.teamMemNames}>Shrinidhi Ramanathan<br/></p>
                    <p className={styles.teamMemNames}>Kabeer Dutta<br/></p>
                    <p className={styles.teamMemNames}>Yash Manchanda<br/></p>
                    <p className={styles.teamMemNames}>Jai Dhaka<br/></p>
                    <p className={styles.teamMemNames}>Raghav Sharma<br/></p>
                    <p className={styles.teamMemNames}>Samarth Verma<br/></p>
                    <p className={styles.teamMemNames}>Khushi Singh<br/></p>
                    <p className={styles.teamMemNames}>Aayush Gupta<br/></p>
                    <p className={styles.teamMemNames}>Hridyansh Kapoor<br/></p>
                    <p className={styles.teamMemNames}>Khushboo Mehta<br/></p>
                    <p className={styles.teamMemNames}>Lavanya Kamal Singh<br/></p>
                    <p className={styles.teamMemNames}>Nishita Kadali<br/></p>
                </div>
            </div>
        </div>


{/*------------------ 
---------------------
-----mobile view----- 
---------------------
------------------*/}

        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Content</h2>
            <button className={styles.mobButton} onClick={toggle}>+</button>
            </div>
            <div style={{display: showMe?"block":"none"}}>
                <div className={styles.collapseIn}>
                <p className={styles.teamMemNames}>Viswa<br/></p>
                    <p className={styles.teamMemNames}>Bharathi<br/></p>
            <p className={styles.teamMemNames}>Jatin K<br/></p>
            <p className={styles.teamMemNames}>KVS Tarun<br/></p>
                    <p className={styles.teamMemNames}>Aditya Raghuram<br/></p>
                    <p className={styles.teamMemNames}>Deepshika Chand<br/></p>
                    <p className={styles.teamMemNames}>Ishani Singh<br/></p>
                    <p className={styles.teamMemNames}>Jashn Sadh<br/></p>
                    {/* <p className={styles.teamMemNames}>Mehar Verma<br/></p> */}
                    <p className={styles.teamMemNames}>Noor Walia<br/></p>
                    <p className={styles.teamMemNames}>Pritika Gandhi<br/></p>
                    <p className={styles.teamMemNames}>Srishti Khanna<br/></p>
                    <p className={styles.teamMemNames}>Mugdha Gadgil<br/></p>
                    <p className={styles.teamMemNames}>Partth Kant<br/></p>
                    <p className={styles.teamMemNames}>Aakrisht Narang<br/></p>
                    <p className={styles.teamMemNames}>Ananya Garg<br/></p>
                    <p className={styles.teamMemNames}>Nikhil Agarwal<br/></p>
                    <p className={styles.teamMemNames}>Revanth<br/></p>
                    <p className={styles.teamMemNames}>Tanuj Naidu<br/></p>
                    <p className={styles.teamMemNames}>Partth Kant<br/></p>
                    <p className={styles.teamMemNames}>Aakrisht Narang<br/></p>
                    <p className={styles.teamMemNames}>Ananya Garg<br/></p>
                    <p className={styles.teamMemNames}>Nikhil Agarwal<br/></p>
                    <p className={styles.teamMemNames}>Revanth<br/></p>
                    <p className={styles.teamMemNames}>Tanuj Naidu<br/></p>
                    
                </div>
            </div>
        </div>
        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Event Management</h2>
            <button className={styles.mobButton} onClick={toggle1}>+</button>
            </div>
            <div style={{display: showMe1?"block":"none"}}>
                <div className={styles.collapseIn}>
                <p className={styles.teamMemNames}>Manjunath<br/></p>
                    <p className={styles.teamMemNames}>Udit Singh<br/></p>
                    <p className={styles.teamMemNames}>Romir Biswas<br/></p>
                    <p className={styles.teamMemNames}>Pranav Varma<br/></p>
                    <p className={styles.teamMemNames}>Satyendra<br/></p>
                    <p className={styles.teamMemNames}>Anish Gupta<br/></p>
                    <p className={styles.teamMemNames}>Diva Goel<br/></p>
                    <p className={styles.teamMemNames}>Pratishtha Valecha<br/></p>
                    <p className={styles.teamMemNames}>Anya dhawan<br/></p>
                    <p className={styles.teamMemNames}>Shringarika Gupta<br/></p>
                    <p className={styles.teamMemNames}>Shrinidhi Ramanathan<br/></p>
                    <p className={styles.teamMemNames}>Kabeer Dutta<br/></p>
                    <p className={styles.teamMemNames}>Yash Manchanda<br/></p>
                    <p className={styles.teamMemNames}>Jai Dhaka<br/></p>
                    <p className={styles.teamMemNames}>Raghav Sharma<br/></p>
                    <p className={styles.teamMemNames}>Samarth Verma<br/></p>
                    <p className={styles.teamMemNames}>Khushi Singh<br/></p>
                    <p className={styles.teamMemNames}>Aayush Gupta<br/></p>
                    <p className={styles.teamMemNames}>Hridyansh Kapoor<br/></p>
                    <p className={styles.teamMemNames}>Khushboo Mehta<br/></p>
                    <p className={styles.teamMemNames}>Lavanya Kamal Singh<br/></p>
                    <p className={styles.teamMemNames}>Nishita Kadali<br/></p>
                <p className={styles.teamMemNames}>Manjunath<br/></p>
                    <p className={styles.teamMemNames}>Udit Singh<br/></p>
                    <p className={styles.teamMemNames}>Romir Biswas<br/></p>
                    <p className={styles.teamMemNames}>Pranav Varma<br/></p>
                    <p className={styles.teamMemNames}>Satyendra<br/></p>
                    <p className={styles.teamMemNames}>Anish Gupta<br/></p>
                    <p className={styles.teamMemNames}>Diva Goel<br/></p>
                    <p className={styles.teamMemNames}>Pratishtha Valecha<br/></p>
                    <p className={styles.teamMemNames}>Anya dhawan<br/></p>
                    <p className={styles.teamMemNames}>Shringarika Gupta<br/></p>
                    <p className={styles.teamMemNames}>Shrinidhi Ramanathan<br/></p>
                    <p className={styles.teamMemNames}>Kabeer Dutta<br/></p>
                    <p className={styles.teamMemNames}>Yash Manchanda<br/></p>
                    <p className={styles.teamMemNames}>Jai Dhaka<br/></p>
                    <p className={styles.teamMemNames}>Raghav Sharma<br/></p>
                    <p className={styles.teamMemNames}>Samarth Verma<br/></p>
                    <p className={styles.teamMemNames}>Khushi Singh<br/></p>
                    <p className={styles.teamMemNames}>Aayush Gupta<br/></p>
                    <p className={styles.teamMemNames}>Hridyansh Kapoor<br/></p>
                    <p className={styles.teamMemNames}>Khushboo Mehta<br/></p>
                    <p className={styles.teamMemNames}>Lavanya Kamal Singh<br/></p>
                    <p className={styles.teamMemNames}>Nishita Kadali<br/></p>
                </div>
            </div>
        </div>
        {/* <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Public Relations</h2>
            <button className={styles.mobButton} onClick={toggle2}>+</button>
            </div>
            <div style={{display: showMe2?"block":"none"}}>
                <div className={styles.collapseIn}>
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                </div>
            </div>
        </div> */}
        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Web Development</h2>
            <h2 className={styles.teamName}>Web Development</h2>
            <button className={styles.mobButton} onClick={toggle6}>+</button>
            </div>
            <div style={{display: showMe6?"block":"none"}}>
                <div className={styles.collapseIn}>
                <p className={styles.teamMemNames}>Kunal Passan <br/></p>
                    <p className={styles.teamMemNames}>Tushar Juneja<br/></p>
                    <p className={styles.teamMemNames}>Tanishq Nehra<br/></p>
                    <p className={styles.teamMemNames}>Narayana<br/></p>
                </div>
            </div>
        </div>
        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Design videography</h2>
            <button className={styles.mobButton} onClick={toggle3}>+</button>
            </div>
            <div style={{display: showMe3?"block":"none"}}>
                <div className={styles.collapseIn}>
                <p className={styles.teamMemNames}>Pratyush<br/></p>
                <p className={styles.teamMemNames}>Pratyush<br/></p>
                    <p className={styles.teamMemNames}>Aradhya<br/></p>
                    <p className={styles.teamMemNames}>Jaideep<br/></p>
                    <p className={styles.teamMemNames}>Rithvik<br/></p>
                    <p className={styles.teamMemNames}>Ashar Hussain<br/></p>
                    <p className={styles.teamMemNames}>Arsh Bhasin<br/></p>
                    <p className={styles.teamMemNames}>Akaash Emmanuel Rayipudi<br/></p>
                    <p className={styles.teamMemNames}>Vrinda Garg<br/></p>
                    <p className={styles.teamMemNames}>Arohi Verma<br/></p>
                    <p className={styles.teamMemNames}>Arushi Agarwal<br/></p>
                    <p className={styles.teamMemNames}>Paresh Malviya<br/></p>
                    <p className={styles.teamMemNames}>Hardik Gupta<br/></p>
                </div>
            </div>
        </div>
        {/* {/* <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Videography Team</h2>
            <button className={styles.mobButton} onClick={toggle3}>+</button>
            </div>
            <div style={{display: showMe3?"block":"none"}}>
                <div className={styles.collapseIn}>
                <p className={styles.teamMemNames}>Jaideep<br/></p>
                    <p className={styles.teamMemNames}>Akshat Shashi<br/></p>
                    <p className={styles.teamMemNames}>Rithvik<br/></p>
                </div>
            </div>
        </div> */}
        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Marketing</h2>
            <button className={styles.mobButton} onClick={toggle4}>+</button>
            </div>
            <div style={{display: showMe4?"block":"none"}}>
                <div className={styles.collapseIn}>
                <h2 className={styles.teamName}>Marketing</h2>
                    <p className={styles.teamMemNames}>Muskan Kalra<br/></p>
                    <p className={styles.teamMemNames}>Armaan<br/></p>
                    <p className={styles.teamMemNames}>Saniya<br/></p>
                    <p className={styles.teamMemNames}>Udhaya Shree<br/></p>
                    <p className={styles.teamMemNames}>Mahesh Kumar<br/></p>
                    <p className={styles.teamMemNames}>Janardhan<br/></p>
                    <p className={styles.teamMemNames}>Krish Rijhwani <br/></p>
                    <p className={styles.teamMemNames}>Vanshika Jain<br/></p>
                    <p className={styles.teamMemNames}>Darpin Mevcha<br/></p>
                    <p className={styles.teamMemNames}>Payas Katyal <br/></p>
                    <p className={styles.teamMemNames}>Raghav Mathur<br/></p>
                    <p className={styles.teamMemNames}>Avi Popli<br/></p>
                    <p className={styles.teamMemNames}>Mehk Khurana <br/></p>
                    <p className={styles.teamMemNames}>Aanya Anand <br/></p>
                    <p className={styles.teamMemNames}>Manas Kanodia<br/></p>
                    <p className={styles.teamMemNames}>Piyush Mahajan<br/></p>
                    <p className={styles.teamMemNames}>Shreyash Sharma<br/></p>
                    <p className={styles.teamMemNames}>Nupur Sharma<br/></p>
                    <p className={styles.teamMemNames}>Trivikram Gupta<br/></p>
                    <p className={styles.teamMemNames}>Kartikey Sharma<br/></p>
                    <p className={styles.teamMemNames}>Ashana Gambhir<br/></p>
                    <p className={styles.teamMemNames}>Maira Bhatia<br/></p>
                    <p className={styles.teamMemNames}>Bharathi Subramanian Nagarajan<br/></p>
                    <p className={styles.teamMemNames}>Krish Rijhwani <br/></p>
                    <p className={styles.teamMemNames}>Vanshika Jain<br/></p>
                    <p className={styles.teamMemNames}>Darpin Mevcha<br/></p>
                    <p className={styles.teamMemNames}>Payas Katyal <br/></p>
                    <p className={styles.teamMemNames}>Raghav Mathur<br/></p>
                    <p className={styles.teamMemNames}>Avi Popli<br/></p>
                    <p className={styles.teamMemNames}>Mehk Khurana <br/></p>
                    <p className={styles.teamMemNames}>Aanya Anand <br/></p>
                    <p className={styles.teamMemNames}>Manas Kanodia<br/></p>
                    <p className={styles.teamMemNames}>Piyush Mahajan<br/></p>
                    <p className={styles.teamMemNames}>Shreyash Sharma<br/></p>
                    <p className={styles.teamMemNames}>Nupur Sharma<br/></p>
                    <p className={styles.teamMemNames}>Trivikram Gupta<br/></p>
                    <p className={styles.teamMemNames}>Kartikey Sharma<br/></p>
                    <p className={styles.teamMemNames}>Ashana Gambhir<br/></p>
                    <p className={styles.teamMemNames}>Maira Bhatia<br/></p>
                    <p className={styles.teamMemNames}>Bharathi Subramanian Nagarajan<br/></p>
                </div>
            </div>
        </div> 
        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>PR & PR & Sponsorship</h2>
            <button className={styles.mobButton} onClick={toggle5}>+</button>
            </div>
            <div style={{display: showMe5?"block":"none"}}>
                <div className={styles.collapseIn}> 
                <p className={styles.teamMemNames}>Kashvi<br/></p>
                <p className={styles.teamMemNames}>Kashvi<br/></p>
                    <p className={styles.teamMemNames}>Dhruv<br/></p>
                    <p className={styles.teamMemNames}>Mahika<br/></p>
                    <p className={styles.teamMemNames}>Avyukth Ravi Kumar<br/></p>
                    <p className={styles.teamMemNames}>Shringarika Gupta<br/></p>
                    <p className={styles.teamMemNames}>Ekansh Tandon<br/></p>
                    <p className={styles.teamMemNames}>Darpin Mevcha<br/></p>
                    <p className={styles.teamMemNames}>Preksha Khandelwal<br/></p>
                    <p className={styles.teamMemNames}>Arnav Prabhakhar<br/></p>
                    <p className={styles.teamMemNames}>Adi Satya Arora <br/></p>
                    <p className={styles.teamMemNames}>Misha <br/></p>
                    <p className={styles.teamMemNames}>Sweta Agrahari<br/></p>
                    <p className={styles.teamMemNames}>Eklavya Nath<br/></p>
                    <p className={styles.teamMemNames}>Srinivas<br/></p>
                    <p className={styles.teamMemNames}>Avyukth Ravi Kumar<br/></p>
                    <p className={styles.teamMemNames}>Shringarika Gupta<br/></p>
                    <p className={styles.teamMemNames}>Ekansh Tandon<br/></p>
                    <p className={styles.teamMemNames}>Darpin Mevcha<br/></p>
                    <p className={styles.teamMemNames}>Preksha Khandelwal<br/></p>
                    <p className={styles.teamMemNames}>Arnav Prabhakhar<br/></p>
                    <p className={styles.teamMemNames}>Adi Satya Arora <br/></p>
                    <p className={styles.teamMemNames}>Misha <br/></p>
                    <p className={styles.teamMemNames}>Sweta Agrahari<br/></p>
                    <p className={styles.teamMemNames}>Eklavya Nath<br/></p>
                    <p className={styles.teamMemNames}>Srinivas<br/></p>
                </div>
            </div>
        </div>
    </section>
    </>
    );  
}
export default team;
