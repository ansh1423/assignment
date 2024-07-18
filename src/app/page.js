import Caring from "@/components/Home/caring";
import Community from "@/components/Home/community";
import Helping from "@/components/Home/helping";
import Lesson from "@/components/Home/lesson";
import Libero from "@/components/Home/libero";
import Management from "@/components/Home/management";
import Ourclient from "@/components/Home/ourclient";
import Unseen from "@/components/Home/unseen";
import Footer from "@/components/layout/footer";
import Footer1 from "@/components/layout/footer1";
import Navbar from "@/components/layout/navbar";
// import Navbar from "@/src/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
 // ExampleComponent.jsx
 <div className="bg-white">
     <Navbar/>
     <Lesson/>

     <Ourclient/>
     <Community/>
     <Management/>
     <Unseen/>
     <Helping/>
     <Caring/>
     <Libero/>
      {/* <Footer/> */}
      {/* <Footer1/> */}
      </div>
  );
};
