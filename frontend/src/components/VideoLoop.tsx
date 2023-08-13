import styles from "../styles/home.module.css";
import video1 from "../assets/homepageVideo.mp4";

const VideoLoop = () => {
    return(
        <div id="home">
            <video 
                className={styles.video}
                src={video1} 
                autoPlay={true}
                loop={true}
                muted={true}
            />
        </div>
    )
}

export default VideoLoop;