import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Velocis_white_logo from "../Images/Velocis_white_logo.png";
import "../App.css";

import { BASEURL } from "../Utility/Config";
import { useEffect, useState } from "react";
import "rc-time-picker/assets/index.css";
import axios from "axios";
// import { toast , ToastContainer} from "react-toast";

import TimePicker from "rc-time-picker";
import moment from "moment";
import ImageWithMarker from "./Konva/ImageWIthMarkers";
import Footer from "./Footer";
import Swal from "sweetalert2";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavbarComponent = () => {
  const imageUrl =
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"; // Replace with your image URL

  
  
  const [time, setTime] = useState();
  const [actualData,  setActualData] = useState();
  const [sendData, setSendData] = useState()

  const onChange = (e) => {
    console.log("line 29",e)
    const filterTime = moment(e).format("DD-MMM-YYYY H:mm:ss")
    setTime(moment(e).format("DD-MMM-YYYY H:mm:ss"));
    let exactData = actualData?.filter(x=> x?.timeStamp === filterTime)

    console.log(exactData, 'exactData');

    if(exactData === undefined || exactData === "" || exactData.length === 0){
    //  Swal.fire(`No data available for this time`);
      toast.error("Data not avialable at this time",{
        progress:undefined 
      })
    }

    setSendData(exactData)

  };
 


  useEffect(() => {
    axios
      .get(BASEURL + "/timestamp")
      .then((response) => {
      
        let data = [];

        response.data.map((item) => data.push({
          timeStamp:  moment(item.timeStamp).format("DD-MMM-YYYY H:mm:ss"),
          outputs : item.outputs,
          _id: item._id
        }));
          
        setActualData(data);

        console.log("DATA line 26", data);
      })
      .catch((err) => {
        console.log("ERROR");
      });
  }, []);

  return (
    <>
   
      <Navbar className="navbar-bg-color" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Velocis_white_logo}
              width="120"
              height="30"
              className="d-inline-block align-top logo-spacing"
            />
          </Navbar.Brand>

          <TimePicker
          className="input-spacing"
            onChange={(e) => onChange(e)}
            value={time ? moment(time, "DD-MMM-YYYY H:mm:ss") : null}
            showSecond={true}
          />
        </Container>
      </Navbar>
      
        <ToastContainer 
          position="bottom-right"
         autoClose={2000}
          hideProgressBar={true}
        />
      {/* <ToastContainer delay={2000}/> */}
     <ImageWithMarker imageUrl={imageUrl} data={sendData}/>
     <Footer />
    </>
  );
};

export default NavbarComponent;
