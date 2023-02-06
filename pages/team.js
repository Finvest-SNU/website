
import styles from "../styles/team.module.css";
import Image from 'next/image'
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
    return (
    <>
    <section className={styles.sitebg}>
        <div>
            <h1 className={styles.coreTitle}>The  Core</h1>
        </div>
        <div className={styles.coreCompBox}>
            
            <div >
                <Image className={styles.coreMemImg} src="/image1.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Parth Nahata</h3>
                <h2 className={styles.corePosT}>Treasurer</h2>
            </div>
            
            <div>
                <Image className={styles.coreMemImg} src="/image2.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Parth Nahata</h3>
                <h2 className={styles.corePosT}>Treasurer</h2>
            </div>
            <div>
                <Image className={styles.coreMemImg} src="/image3.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Parth Nahata</h3>
                <h2 className={styles.corePosT}>Treasurer</h2>
            </div>
            <div>
                <Image className={styles.coreMemImg} src="/image4.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Parth Nahata</h3>
                <h2 className={styles.corePosT}>Treasurer</h2>
            </div>
            <div>
                <Image className={styles.coreMemImg} src="/image5.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Parth Nahata</h3>
                <h2 className={styles.corePosT}>Treasurer</h2>
            </div>
            <div>
                <Image className={styles.coreMemImg} src="/image6.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.coreNameT}>Parth Nahata</h3>
                <h2 className={styles.corePosT}>Treasurer</h2>
            </div>
        </div>
    </section>


    <section className={styles.sitebg}>
        <div>
            <h1 className={styles.sCoreTitle}>The  Subcore</h1>
        </div>
        <div className={styles.sCoreCompBox}>
            <div>
                <Image className={styles.sCoreMemImg} src="/image1.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Parth Nahata</h3>
                <h2 className={styles.sCorePosT}>Treasurer</h2>
            </div>
            <div>
                <Image className={styles.sCoreMemImg} src="/image2.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Parth Nahata</h3>
                <h2 className={styles.sCorePosT}>Treasurer</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src="/image3.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Parth Nahata</h3>
                <h2 className={styles.sCorePosT}>Treasurer</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src="/image4.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Parth Nahata</h3>
                <h2 className={styles.sCorePosT}>Treasurer</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src="/image5.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Parth Nahata</h3>
                <h2 className={styles.sCorePosT}>Treasurer</h2>
            </div>    <div >
                <Image className={styles.sCoreMemImg} src="/image6.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Parth Nahata</h3>
                <h2 className={styles.sCorePosT}>Treasurer</h2>
            </div>
        </div>
        <div className={styles.sCoreCompBox2}>
            <div >
                <Image className={styles.sCoreMemImg} src="/image1.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Parth Nahata</h3>
                <h2 className={styles.sCorePosT}>Treasurer</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src="/image2.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Parth Nahata</h3>
                <h2 className={styles.sCorePosT}>Treasurer</h2>
            </div>
            <div >
                <Image className={styles.sCoreMemImg} src="/image3.jpg"alt="Core Team member image" width={180} height={200}/>
                <h3 className={styles.sCoreNameT}>Parth Nahata</h3>
                <h2 className={styles.sCorePosT}>Treasurer</h2>
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
                    <h2 className={styles.teamName}>Content</h2>
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>Content</h2>
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>Content</h2>
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>Content</h2>
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>Content</h2>
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
            <div className={styles.teamCompBox}>
                <div>
                    <h2 className={styles.teamName}>Content</h2>
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
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
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>  
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
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
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
        </div>
        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Public Relations</h2>
            <button className={styles.mobButton} onClick={toggle2}>+</button>
            </div>
            <div style={{display: showMe2?"block":"none"}}>
                <div className={styles.collapseIn}>
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
        </div>
        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Design & Videography</h2>
            <button className={styles.mobButton} onClick={toggle3}>+</button>
            </div>
            <div style={{display: showMe3?"block":"none"}}>
                <div className={styles.collapseIn}>
                    <p className={styles.teamMemNames}>Parth Nahata <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
        </div>
        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Marketing</h2>
            <button className={styles.mobButton} onClick={toggle4}>+</button>
            </div>
            <div style={{display: showMe4?"block":"none"}}>
                <div className={styles.collapseIn}>
                    <p className={styles.teamMemNames}>Marketing <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
        </div> 
        <div className={styles.mobTeam}>
            <div className={styles.mobTeamCompBox}>
            <h2 className={styles.teamName}>Sponsorship</h2>
            <button className={styles.mobButton} onClick={toggle5}>+</button>
            </div>
            <div style={{display: showMe5?"block":"none"}}>
                <div className={styles.collapseIn}> 
                    <p className={styles.teamMemNames}>Sponsorship <br/></p>
                    <p className={styles.teamMemNames}>Mrityunjay Prasad<br/></p>
                    <p className={styles.teamMemNames}>Akshita Jakhar<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                    <p className={styles.teamMemNames}>Tanishq<br/></p>
                </div>
            </div>
        </div>
    </section>
    </>
    );  
}
export default team;