import styles from '../styles/Home.module.css'
import Header from './components/Header'
import {useState, useEffect} from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {countryList} from './data/country_list.js'
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';

export default function AddPatient() {
   const router = useRouter();
   const [PreviousMRN, setPreviousMRN] = useState("")
   const [FirstName, setFirstName] = useState("")
   const [MiddleName, setMiddleName] = useState("")
   const [LastName, setLastName] = useState("")
   const [DateOfBirth, setDateOfBirth] = useState("")
   const [PhoneNumber, setPhoneNumber] = useState("")
   const [Email, setEmail] = useState("")
   const [Postal, setPostal] = useState("")
   const [GenderId, setGenderId] = useState(0)
   const [MaritalStatusId, setMaritalStatusId] = useState()
   const [OccupationId, setOccupationId] = useState()
   const [CountryId, setCountryId] = useState()
   const [RegionId, setRegionId] = useState()
   const [SubCityId, setSubCityId] = useState()
   const [WoredaName, setWoredaName] = useState("")
   const [ZoneId, setZoneId] = useState()
   const [Kebele,setKebele] = useState("")
   const [HouseNumber,setHouseNumber] = useState("")
   const [PatientStatusId,setPatientStatusId] = useState()
   const [EmergencyFirstName,setEmergencyFirstName] = useState("")
   const [EmergencyMiddleName,setEmergencyMiddleName]= useState("")
   const [EmergencyLastName,setEmergencyLastName] = useState("")
   const [EmergencyGenderId,setEmergencyGenderId] = useState()
   const [EmergencyRelationshipId,setEmergencyRelationshipId] = useState()
   const [EmergencyPhoneNumber, setEmergencyPhoneNumber] = useState("")
   const cookies = new Cookies();
   const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInJvbGUiOjIsInVzZXIiOiJ5YWZldCIsImlhdCI6MTY1NDk2MTA1OSwiZXhwIjoxNjU3NTUzMDU5fQ.R7RiM9OF1XeVW-uba7rIuHT1K9JEp5R-BFTtEW4bgD4"
   const apiURL = "https://hmsapiserver.herokuapp.com/api/v1"
   const authaxios = axios.create({
      baseURL : apiURL,
      headers :{
         Authorization : `Bearer ${accesstoken} `
      }
   })
   
   const handlesubmit = async (e)=>{
      e.preventDefault()
      await authaxios.post(`${apiURL}/patient/`,{
         PreviousMRN:PreviousMRN,
         FirstName:FirstName,
         MiddleName:MiddleName,
         LastName:LastName,
         DateOfBirth:DateOfBirth,
         PhoneNumber:PhoneNumber,
         Email:Email,
         Postal:Postal,
         GenderId:parseInt(GenderId),
         MaritalStatusId:parseInt(MaritalStatusId),
         OccupationId:parseInt(OccupationId),
         CountryId:parseInt(CountryId),
         RegionId:parseInt(RegionId),
         SubCityId:parseInt(SubCityId),
         WoredaName:WoredaName,
         ZoneId:parseInt(ZoneId),
         Kebele:Kebele,
         HouseNumber:HouseNumber,
         PatientStatusId:parseInt(PatientStatusId),
         EmergencyFirstName:EmergencyFirstName,
         EmergencyMiddleName:EmergencyMiddleName,
         EmergencyLastName:EmergencyLastName,
         EmergencyGenderId:parseInt(EmergencyGenderId),
         EmergencyRelationshipId:parseInt(EmergencyRelationshipId),
         EmergencyPhoneNumber:EmergencyPhoneNumber
      }).then(function (response) {
         console.log(response)
         router.push('/')
      }).catch(function (error) {
         console.log(error);
      });
      console.log(CountryId)
   }
   return (
      <div className="">
         <Header />
         <form onSubmit={handlesubmit} className="bg-light pt-3">
            <Container>
               <Row className="mb-3">
                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="previous MRN">
                         <Form.Control 
                           type="text" 
                           placeholder="PreviousMRN" 
                           value = {PreviousMRN}
                           onChange={(e) => setPreviousMRN(e.target.value)}
                        />
                      </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Patient Status">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {PatientStatusId}
                           onChange={(e) => setPatientStatusId(e.target.value)}
                        >
                           <option></option>
                           <option value={1}>Leave</option>
                           <option value={2}>Stay</option>
                           <option value="3">Three</option>
                        </Form.Select>
                     </FloatingLabel>
                  </Col>
               </Row>

               <Row className="mb-3">
                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="First Name">
                         <Form.Control 
                           type="text" 
                           placeholder="firstname" 
                           value = {FirstName}
                           onChange={(e) => setFirstName(e.target.value)}
                        />
                      </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Middle Name">
                        <Form.Control 
                           type="text" 
                           placeholder="middlename"
                           value = {MiddleName}
                           onChange={(e) => setMiddleName(e.target.value)}
                        />
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Last Name">
                        <Form.Control 
                           type="text" 
                           placeholder="lastname"
                           value = {LastName}
                           onChange={(e) => setLastName(e.target.value)}
                        />
                     </FloatingLabel>
                  </Col>
               </Row>

               <Row className="mb-3">
                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Gender">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {GenderId}
                           onChange={(e) => setGenderId(e.target.value)}
                        >
                           <option></option>
                           <option value={1}>Male</option>
                           <option value={2}>Female</option>
                        </Form.Select>
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Martial Status">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {MaritalStatusId}
                           onChange={(e) => setMaritalStatusId(e.target.value)}
                        >
                           <option></option>
                           <option value={1}>Single</option>
                           <option value={2}>Married</option>
                           <option value={3}>Divorced</option>
                           <option value={4}>widowed</option>
                        </Form.Select>
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Occupation">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {OccupationId}
                           onChange={(e) => setOccupationId(e.target.value)}
                        >
                           <option></option>
                           <option value={1}>Doctor</option>
                           <option value={2}>Enginer</option>
                           <option value={3}>Teacher</option>
                           <option value={4}>Nurse</option>
                        </Form.Select>
                     </FloatingLabel>
                  </Col>
               </Row>
               
               <Row className="mb-3">
                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Date Of Birth">
                         <Form.Control 
                           type="text" 
                           placeholder="Data of Birth" 
                           value = {DateOfBirth}
                           onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                      </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Phone Number">
                        <Form.Control 
                           type="text" 
                           placeholder="phoneNumber" 
                           value = {PhoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Email">
                        <Form.Control 
                           type="email"
                           placeholder="email" 
                           value = {Email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Postal">
                         <Form.Control 
                           type="text" 
                           placeholder="postal" 
                           value = {Postal}
                           onChange={(e) => setPostal(e.target.value)}
                        />
                      </FloatingLabel>
                  </Col>
               </Row>

               <Row className="mb-3">
                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Country">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {CountryId}
                           onChange={(e) => setCountryId(e.target.value)}
                        >
                           <option></option>
                           {countryList.map((count,index)=>(
                              <option key={index} value={1}>{count.country}</option>
                           ))}
                        </Form.Select>
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Region">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {RegionId}
                           onChange={(e) => setRegionId(e.target.value)}
                        >
                           <option></option>
                           <option value={1}>Addis Ababa</option>
                           <option value={2}>Oromiya</option>
                           <option value={3}>Afar</option>
                           <option value={4}>Somaliya</option>
                        </Form.Select>
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Sub City">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {SubCityId}
                           onChange={(e) => setSubCityId(e.target.value)}
                        >
                           <option></option>
                           <option value={1}>Yeka</option>
                           <option value={2}>Bole</option>
                           <option value={3}>Arada</option>
                           <option value={4}>Akaki</option>
                        </Form.Select>
                     </FloatingLabel>
                  </Col>
               </Row>

               <Row className="mb-3">
                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Zone">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {ZoneId}
                           onChange={(e) => setZoneId(e.target.value)}
                        >
                           <option></option>
                           <option value={1}>1</option>
                           <option value={2}>2</option>
                           <option value={3}>3</option>
                           <option value={4}>4</option>
                        </Form.Select>
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Woreda">
                         <Form.Control 
                           type="text" 
                           placeholder="Woreda" 
                           value = {WoredaName}
                           onChange={(e) => setWoredaName(e.target.value)}
                         />
                      </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Kebele">
                        <Form.Control 
                           type="text" 
                           placeholder="Kebele" 
                           value = {Kebele}
                           onChange={(e) => setKebele(e.target.value)}
                        />
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="House Number">
                        <Form.Control 
                           type="text" 
                           placeholder="houseNumber" 
                           value = {HouseNumber}
                           onChange={(e) => setHouseNumber(e.target.value)}
                        />
                     </FloatingLabel>
                  </Col>

               </Row>

               <Row className="mb-3">
                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="First Name">
                         <Form.Control 
                           type="text" 
                           placeholder="firstname" 
                           value = {EmergencyFirstName}
                           onChange={(e) => setEmergencyFirstName(e.target.value)}
                         />
                      </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Middle Name">
                        <Form.Control 
                           type="text" 
                           placeholder="middlename" 
                           value = {EmergencyMiddleName}
                           onChange={(e) => setEmergencyMiddleName(e.target.value)}
                        />
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="Last Name">
                        <Form.Control 
                           type="text" 
                           placeholder="lastname" 
                           value = {EmergencyLastName}
                           onChange={(e) => setEmergencyLastName(e.target.value)}
                        />
                     </FloatingLabel>
                  </Col>
               </Row>

               <Row className="mb-3">
                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Gender">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {EmergencyGenderId}
                           onChange={(e) => setEmergencyGenderId(e.target.value)}
                        >
                           <option></option>
                           <option value={1}>Male</option>
                           <option value={2}>Female</option>
                        </Form.Select>
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingSelect" label="Relationship">
                        <Form.Select 
                           aria-label="Floating label select example"
                           value = {EmergencyRelationshipId}
                           onChange={(e) => setEmergencyRelationshipId(e.target.value)}  
                        >
                           <option></option>
                           <option value={1}>Father</option>
                           <option value={2}>Mother</option>
                           <option value={2}>Uncle</option>
                        </Form.Select>
                     </FloatingLabel>
                  </Col>

                  <Col sm>
                     <FloatingLabel controlId="floatingInput" label="PhoneNumber">
                        <Form.Control 
                           type="text" 
                           placeholder="PhoneNumber"
                           value = {EmergencyPhoneNumber}
                           onChange={(e) => setEmergencyPhoneNumber(e.target.value)} 
                        />
                     </FloatingLabel>
                  </Col>
               </Row>

               <Button type="submit" variant="primary">Submit</Button>
            </Container>
         </form >
      </div>
  )
}

