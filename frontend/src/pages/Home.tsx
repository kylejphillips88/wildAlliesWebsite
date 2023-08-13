import AddSignUpDetails from "../components/MailingList";
import { MailingList } from "../models/mailingList";
import VideoLoop from "../components/VideoLoop";
import Introduction from "../components/Introduction";
import Why from "../components/Why";
import How from "../components/How";
import What from "../components/What";
import Projects from "../components/Projects";
import Who from "../components/Who";
import Connect from "../components/Connect";
import ScrollTrigger from "../components/ScrollTrigger";
import { ConnectDetails } from "../models/connect";


function Home(){
    return(
        <div>
            <VideoLoop/>
            <Introduction/>
            <AddSignUpDetails onDismiss={() => {}} onSignUpSaved={(details: MailingList) => {}}/>
            <Why/>
            <What/>
            <How/>
            <Projects/>
            <Who/>
            <Connect onDismiss={() => {}} onDetailsSent={(details: ConnectDetails) => {}}/>
            <ScrollTrigger/>
        </div>
    )
}

export default Home;