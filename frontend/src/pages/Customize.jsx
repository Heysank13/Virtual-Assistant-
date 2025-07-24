
import { useContext, useRef } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import image3 from "../assets/authBg.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import Card from '../components/Card.jsx';
import { userDataContext } from '../context/UserContext';

function Customize() {

    const {serverUrl,userData, setUserData,frontendImage, setFrontendImage, backendImage, setBackendImage,selectedImage, setSelectedImage} = useContext(userDataContext)

    const navigate = useNavigate()
   
    const inputImage = useRef()

    const handleImage=(e) =>{
        const file=e.target.files[0]
        setBackendImage(file)
        setFrontendImage(URL.createObjectURL(file))

    }
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col'>
      <IoArrowBack className='absolute top-[30px] left-[30px] cursor-pointer text-white w-[25px] h-[25px]' onClick={()=> navigate("/")}/>
        <h1 className="text-white mb-[40px] text-[30px] text-center">Select your <span className="text-blue-600">Assistant Image</span>
        </h1>
        <div className='w-[full] max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>
        <Card image={image1}/>
        <Card image={image2}/>
        <Card image={image3}/>
        <Card image={image4}/>
        <Card image={image5}/>
        <Card image={image6}/>
        <Card image={image7}/>
        <div className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#030326] border-2
        border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-3 hover:border-white flex items-center justify-center ${selectedImage == "input"?"border-4 border-white shadow-2xl shadow-blue-950":null}`} onClick={() =>{
          inputImage.current.click()
          setSelectedImage("input")
          }}>
          {!frontendImage && <LuImagePlus className="text-white w-[25px] h-[25px]" />}
          {frontendImage && <img src={frontendImage} className='h-full object-cover'/>}
        
    </div>
        <input type="file" accept='image/*' ref={inputImage} hidden onChange={handleImage}/>
        </div>
        {selectedImage && <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold cursor-pointer bg-white rounded-full text-[19px]' onClick={() =>navigate("/customize2")}>Next</button>}
    </div>
  )
}

export default Customize