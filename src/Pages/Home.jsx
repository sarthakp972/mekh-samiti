// import DonationPage from "../Components/DonationPage"
// import AnyaDarshansthal from "../Components/AnyaDarshansthal";
import DurgaMataPage from "../Components/DurgaMataPage";
import HomeContent from "../Components/HomeContent";
import ImageCarousel from "../Components/ImageCarousel";
import SuggestionForm from "../Components/SuggestionForm";
// import MataAarti from "../FirebaseData/Mata_Aarti";
// import UploadPage from "../Components/UploadPage";
// import NavratriDeviPage from "../Components/NavratriDeviPage";
// import Slide from "../FirebaseData/Slide";
// import AddressPage from "../FirebaseData/AddressPage";
// import BankAccount from "../FirebaseData/BankAccount";
// import Video from "../FirebaseData/Video";
function Home() {
  return (
    <div>
   <ImageCarousel/>
   <DurgaMataPage/> 
   <HomeContent/>
   {/* <Video/> */}
   {/* <NavratriDeviPage/> */}
   {/* <SamitiList/> */}
   {/* <BankAccount/> */}
   {/* <AddressPage/> */}
   {/* <Slide/> */}
   {/* <UploadPage/> */}
   {/* <MataAarti/> */}
   {/* <AnyaDarshansthal/> */}
   <SuggestionForm/>
    </div>
  )
}

export default Home
