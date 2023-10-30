import Logo from './../assets/img/logo.png';
const FinComponent=()=>{
    return(
            <div className= {`container-fluid ${styles.background} pt-5`} >
                <div className={styles.logoContainer}>
                    <img src="https://res.cloudinary.com/diynkxbpc/image/upload/v1675792784/logo_nsq7nz.png" className={`img-fluid ${styles.logo1}`}/>
                    <img src="https://res.cloudinary.com/diynkxbpc/image/upload/v1675793185/x_de3fws.png"className={`img-fluid ${styles.logo2}`}/>
                    <img src="https://res.cloudinary.com/diynkxbpc/image/upload/v1675792685/2_1_whsufe.png" className={`img-fluid ${styles.logo3}`}/>
                </div>  
                <div className={`${styles.snifyCon}`}>
                    <p className={styles.snifty}>SNIFTY</p>
                    <p className={styles.snifty1}>SNIFTY</p>
                    <p className={styles.snifty}>SNIFTY</p>
                </div>     
                <div className="container-fluid">
                    <div className={`row ${styles.box}`}>
                        <div className={` col-3 mt-lg-1 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button}>₹ 3002</button>
                        </div>
                        <div className={` col-3 mt-lg-1 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button1}>₹ 3002</button>
                        </div>
                        <div className={` col-3 mt-lg-1 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button}>₹ 3002</button>
                        </div>
                        <div className={` col-3 mt-lg-1 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button1}>₹ 3002</button>
                        </div>
                        <div className={` col-3    mt-lg-4 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button1}>₹ 3002</button>
                        </div>
                        <div className={` col-3    mt-lg-4 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button}>₹ 3002</button>
                        </div>
                        <div className={` col-3     mt-lg-4 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button}>₹ 3002</button>
                        </div>
                        <div className={` col-3    mt-lg-4 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button}>₹ 3002</button>
                        </div>
                        <div className={` col-3    mt-lg-4 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button}>₹ 3002</button>
                        </div>
                        <div className={` col-3    mt-lg-4 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button}>₹ 3002</button>
                        </div>
                        <div className={` col-3    mt-lg-4 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button1}>₹ 3002</button>
                        </div>
                        <div className={` col-3   mt-lg-4 ${styles.box1}`}>
                            <p className={styles.shop}>Anna Cafe</p>
                            <button className={styles.button1}>₹ 3002</button>
                        </div>
            
                    </div>
                </div>
            </div>
    )
};
export default FinComponent;