
import React from "react";

import { MDBCard,MDBContainer, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Layout from "../components/layout";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      categories: []
    };
  }
 
 


  render() {
    const { categories } = this.state;
    return (
     
        <Layout>
             <div className="wrapper">

          
<div className="main">
<div  className="container-lg text-dark">
    <h1 style={{marginTop:"15vh",textAlign:"center"}} className="text-dark">Contact Us</h1>
</div>

<MDBContainer>
<MDBRow>

<MDBCol size="12" > <MDBCard style={{backgroundColor:"#ffffff",marginTop:"3vh"}}>

<MDBCardBody cascade className="text-center">
<MDBCardTitle className="text-dark" >
    <h3 className="text-dark" style={{fontFamily:"roboto"}}>Contact Here</h3>
</MDBCardTitle>
<MDBCardText className="text-dark">
    <p>
    USA address(Corporate Head Quarters): 915 Ashbrooke way, Knoxville, TN 37923  INDIA Address(India Office):  SR Nagar, HYD
    </p>
    <a href="mailto:info@htglobalsystems.com">Email: info@htglobalsystems.com</a>
</MDBCardText>

</MDBCardBody>
</MDBCard></MDBCol>

</MDBRow>

</MDBContainer>




</div>


  

</div>



        </Layout>
    );
  }
}

export default Contact;
