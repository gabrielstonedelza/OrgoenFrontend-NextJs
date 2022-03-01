import vidstyles from '../../styles/showcasestyles/ShowcaseStyles.module.css'

const Vidback = () => {
    return (
        // <section className={vidstyles.maincontainer} id={vidstyles.maincontainer}>
        //     <div className={vidstyles.container}>
        //         <div className={vidstyles.overlay}></div>
        //         <video autoPlay muted loop >
        //             <source src='./My_Movie.mp4' type="video/mp4" />
        //         </video>
        //     </div>;
        // </section>
        <header>
            <div className={vidstyles.vheader} id={vidstyles.vidcontainer}>
                <div className={vidstyles.fullscreenvideowrap}>
                    <video autoPlay muted loop>
                    <source src='./My_Movie.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className={vidstyles.headeroverlay}></div>
            </div>
        </header>
    )
}

export default Vidback