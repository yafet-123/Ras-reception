import Header from '../components/Header'
import {AiOutlineRight} from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from "next/router";
import axios from "axios";
import {useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export async function getServerSideProps(context) {
	const {params,req,res,query} = context
	const {patient_id} = params
	const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInJvbGUiOjIsInVzZXIiOiJ5YWZldCIsImlhdCI6MTY1NDk2MTA1OSwiZXhwIjoxNjU3NTUzMDU5fQ.R7RiM9OF1XeVW-uba7rIuHT1K9JEp5R-BFTtEW4bgD4"
	const apiURL = "https://hmsapiserver.herokuapp.com/api/v1"
	const authaxios = axios.create({
		baseURL : apiURL,
		headers :{
			Authorization : `Bearer ${accesstoken} `
		}
	})
	const data = await authaxios.get(`${apiURL}/patient/${patient_id}`)
  	return {
    	props: {
	    	patient:data.data,
	    }, // will be passed to the page component as props
	}
}

export default function IndividualPatient({patient}){
	console.log(patient)
	return(
		<div>
			<Header/>
			<div className="bg-light">
				<Container >
					<Row >
						<div className="m-3 d-flex justify-content-between align-items-center">
							<h1>MRN <span>{patient.MRN}</span></h1>
							<p>Created BY: <span>{patient.CreatedBy}</span> </p>
							<p>Registered At: <span>{patient.RegistrationDate}</span></p>
						</div>
					</Row>

					<Row>
						<Col>
							<h5 className="text-center">Personal Information</h5>
							<div className="bg-white border p-3 rounded">
								<div className="d-flex justify-content-between">
									<p>Previous MRN</p>
									<p>{patient.PreviousMRN}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Full Name</p>
									<p>{patient.Name}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Gender</p>
									<p>{patient.Gender}</p>
								</div>


								<div className="d-flex justify-content-between">
									<p>Date Of Birth</p>
									<p>{patient.DateOfBirth}</p>
								</div>


								<div className="d-flex justify-content-between">
									<p>Phone Number</p>
									<p>{patient.PhoneNumber}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Email</p>
									<p>{patient.Email}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Postal</p>
									<p>{patient.Postal}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Marital Status</p>
									<p>{patient.MaritalStatus}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Occupation</p>
									<p>{patient.Occupation}</p>
								</div>
							</div>
						</Col>

						<Col>
							<h5 className="text-center">Address Info</h5>
							<div className="bg-white border p-3 rounded">
								<div className="d-flex justify-content-between">
									<p>Country</p>
									<p>{patient.Country}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Region</p>
									<p>{patient.Region}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Gender</p>
									<p>{patient.Gender}</p>
								</div>


								<div className="d-flex justify-content-between">
									<p>Zone</p>
									<p>{patient.Zone}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Sub City</p>
									<p >{patient.SubCity}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Woreda</p>
									<p>{patient.Woreda}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Kebele</p>
									<p>{patient.Kebele}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>House Number</p>
									<p>{patient.HouseNumber}</p>
								</div>
							</div>
						</Col>
					</Row>

					<Row>
						<Col>
							<h5 className="mt-3 text-center">Emergency Contact Info</h5>
							<div className="bg-white border p-3 mb-3">
								<div className="d-flex justify-content-between">
									<p>Name</p>
									<p>{patient.Emergency_Contact}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Gender</p>
									<p>{patient.Emergency_Contact_Gender}</p>
								</div>

								<div className="d-flex justify-content-between">
									<p>Relationship</p>
									<p>{patient.Emergency_Contact_Relationship}</p>
								</div>


								<div className="d-flex justify-content-between">
									<p>Phonenumber</p>
									<p>{patient.Emergency_Contact_Phonenumber}</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>				
		</div>
	)	
}



