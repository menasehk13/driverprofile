import React,{useState} from 'react'
import { TextField,InputAdornment,IconButton,Button, MenuItem} from "@mui/material"
import PhotoCamera from '@mui/icons-material/PhotoCamera'

const RegisterDriver = () => {
    const [gender, setgender] = useState('Male');
    const [active, setActive] = useState(4);
    const [service, SetService] = useState("motor");
    const [driverimage,SetDriverImage] = useState(null)
    const [registerImage, setregisterImage] = useState(null)
    const [driverLicence, setdriverLicence] = useState(null)
     const [insuranceImage, setinsuranceImage] = useState(null)
     const handledriverImage =(e)=>{
        if (e.target.files && e.target.files[0]) {
            SetDriverImage(URL.createObjectURL(e.target.files[0]));
          }
     }
     const handleRegisterImage =(e)=>{
        if (e.target.files && e.target.files[0]) {
            setregisterImage(URL.createObjectURL(e.target.files[0]));
          }
     }
     const handleLicenceImage =(e)=>{
        if (e.target.files && e.target.files[0]) {
            setdriverLicence(URL.createObjectURL(e.target.files[0]));
          }
     }
     const handleInsuranceImage =(e)=>{
        if (e.target.files && e.target.files[0]) {
            setinsuranceImage(URL.createObjectURL(e.target.files[0]));
          }
     }
    const handleChange = (event) => {
      setgender(event.target.value);
    };
    const handleClick = (index,service) =>{
     setActive(index)
     SetService(service)
    }

    return (
        <div className='w-full h-[90vh] overflow-y-scroll flex flex-row justify-center'>
            <div className='flex flex-col  items-center m-5 p-5 font-poppins'>
                <h1 className='capitalize font-[23px] font-medium'>Driver Details</h1>
                <div clasName='flex flex-col justify-center'>
                        <div className='w-[300px] h-[160px] shadow-md rounded-md m-2 flex justify-center align-middle items-center text-[#888080] text-xs object-contain'>
                                
                                <img src={driverimage} alt="preview image" className='max-w-[100%] max-h-[100%] inline-block'    />

                        </div>
                        <div className="btn_upload m-2 relative inline-block overflow-hidden text-[#fff] bg-[#3ead] rounded-2xl  text-center py-[12px] px-[22px] z-3 whitespace-nowrap display-none">
                        <input type="file" onChange={handledriverImage} id="upload_file" className="absolute w-[100%] h-[100%] left-0 top-0 cursor-pointer opacity-0"/>
                        Upload Image
                        </div>
                        </div> 
                <div className="flex flex-row justify-center items-center align-middle">
                    <TextField 
                    required
                    type='text'
                    margin="normal"
                    auto-complete = 'name'
                    label='First Name'
                    sx={{width:300,pr:2}}>
                    </TextField>
                    <TextField 
                    required
                    type='text'
                    margin="normal"
                    auto-complete = 'name'
                    label='Last Name'
                    sx={{width:300,pr:2}}>
                    </TextField>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <TextField 
                    required
                    type='text'
                    margin="normal"
                    auto-complete = 'name'
                    label='PhoneNumber'
                    sx={{width:300,pr:2}}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+251 </InputAdornment>,
                      }}>
                    </TextField>
                    <TextField 
                      
                    type='email'
                    margin="normal"
                    auto-complete = 'email'
                    label='Email'
                    sx={{width:300,pr:2}}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">optinal</InputAdornment>,
                      }}>
                    </TextField>
                </div>
                <div className="flex flex-row justify-center items-center">
                <TextField
              margin="normal"
              required
              sx={{width:300,pr:2}}
              name="password"
              label="Password"
              type={"password"}
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              sx={{width:300,pr:2}}
              name="gender"
              label="Gender"
              id="gender"
              value={gender}
              onChange={handleChange}
              select
            >
                    <MenuItem value={'Male'}>Male</MenuItem>
                   <MenuItem value={'Female'}>Female</MenuItem>
            </TextField>
                  
                </div>

                <h1 className='capitalize font-[23px] font-medium mt-7'>Service Type</h1>
                <div className='flex flex-row gap-2 justify-center align-middle m-2'>
                <span className={active === 4 ? "rounded-[5px] bg-[#3ead] font-bold inline-block align-middle text-center capitalize py-[6px] px-[23px] outline-none text-white" : "rounded-[5px] bg-[#eaedf1] font-normal inline-block align-middle text-center capitalize py-[6px] px-[23px] outline-none text-white"}
                    onClick={() => handleClick(4, "motor")}>
                        Motor
                </span>
                <span className={active === 3 ? "rounded-[5px] bg-[#3ead] font-bold inline-block align-middle text-center capitalize py-[6px] px-[23px] outline-none text-white" : "rounded-[5px] bg-[#eaedf1] font-normal inline-block align-middle text-center capitalize py-[6px] px-[23px] outline-none text-white"}
                    onClick={() => handleClick(3, "premium")}>
                        Premium
                </span>
                <span className={active === 2 ? "rounded-[5px] bg-[#3ead] font-bold inline-block align-middle text-center capitalize py-[6px] px-[23px] outline-none text-white" : "rounded-[5px] bg-[#eaedf1] font-normal inline-block align-middle text-center capitalize py-[6px] px-[23px] outline-none text-white"}
                    onClick={() => handleClick(2, "plus")}>
                        Plus
                </span>
                <span className={active === 1 ? "rounded-[5px] bg-[#3ead] font-bold inline-block align-middle text-center capitalize py-[6px] px-[23px] outline-none text-white" : "rounded-[5px] bg-[#eaedf1] font-normal inline-block align-middle text-center capitalize py-[6px] px-[23px] outline-none text-white"}
                    onClick={() => handleClick(1, "economy")}>
                        Economy
                </span>
                </div>
                <h1 className='capitalize font-[23px] font-medium mt-7'>vehicle Detail</h1>
                <div className="flex flex-row justify-center items-center align-middle">
                    <TextField 
                    required
                    type='text'
                    margin="normal"
                    label='Production year'
                    auto-complete = 'year'
                    sx={{width:300,pr:2}}>
                    </TextField>
                    <TextField 
                    required
                    type='text'
                    margin="normal"
                    auto-complete = 'car'
                    label='Model'
                    sx={{width:300,pr:2}}>
                    </TextField>
                </div>
                <TextField 
                    required
                    type='text'
                    margin="normal"
                    auto-complete = 'licencePlate'
                    label='Licence Plate'
                    sx={{width:300,pr:2}}>
                    </TextField>
                    <h1 className='capitalize font-[23px] mt-3 font-medium'>Driver Documents</h1>
                    <div className='w-full flex flex-row justify-center align-middle items-center'>
                        <div clasName='flex flex-col justify-center'>
                        RegistrationDocument *
                        <div className='w-[300px] h-[160px] shadow-md rounded-md m-2 flex justify-center align-middle items-center text-[#888080] text-xs'>
                               
                                <img src={registerImage} alt="preview image" className='max-w-[100%] max-h-[100%] inline-block'  />

                        </div>
                        <div className="btn_upload m-2 relative inline-block overflow-hidden text-[#fff] bg-[#3ead] rounded-2xl  text-center py-[12px] px-[22px] z-3 whitespace-nowrap display-none">
                        <input type="file" onChange={handleRegisterImage} id="upload_file" className="absolute w-[100%] h-[100%] left-0 top-0 cursor-pointer opacity-0"/>
                        Upload Image
                        </div>
                        </div> 
                        <div clasName='flex flex-col justify-center'>
                        Driver Licence  *
                            <div className='w-[300px] h-[160px] shadow-md rounded-md m-2 flex justify-center align-middle items-center text-[#888080] text-xs'>
                                   
                                    <img src={driverLicence} alt="preview image" className='max-w-[100%] max-h-[100%] inline-block'  />

                            </div>
                            <div className="btn_upload m-2 relative inline-block overflow-hidden text-[#fff] bg-[#3ead] rounded-2xl  text-center py-[12px] px-[22px] z-3 whitespace-nowrap display-none">
                            <input type="file" onChange={handleLicenceImage} id="upload_file" className="absolute w-[100%] h-[100%] left-0 top-0 cursor-pointer opacity-0"/>
                            Upload Image
                            </div>
                        </div> 
                        <div clasName='flex flex-col justify-center'>
                        Insurance  *
                            <div className='w-[300px] h-[160px] shadow-md rounded-md m-2 flex justify-center align-middle items-center text-[#888080] text-xs'>
                                   
                                    <img src={insuranceImage} alt="preview image" className='max-w-[100%] max-h-[100%] inline-block'  />

                            </div>
                            <div className="btn_upload m-2 relative inline-block overflow-hidden text-[#fff] bg-[#3ead] rounded-2xl  text-center py-[12px] px-[22px] z-3 whitespace-nowrap display-none">
                            <input type="file" onChange={handleInsuranceImage} id="upload_file" className="absolute w-[100%] h-[100%] left-0 top-0 cursor-pointer opacity-0"/>
                            Upload Image
                            </div>
                        </div> 
                    </div>
                    <Button sx={{width:'200',height:'70'}} className='text-black'> Submit </Button>
                  
            </div>
        </div>
    )
}

export default RegisterDriver
