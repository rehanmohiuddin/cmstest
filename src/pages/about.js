
import React from "react";

import { MDBCard,MDBContainer, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Layout from "../components/layout";


class about extends React.Component {
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
    <h1 style={{marginTop:"15vh",textAlign:"center"}} className="text-dark">About Us</h1>
</div>

<MDBContainer>
<MDBRow>

<MDBCol size="12" > <MDBCard style={{backgroundColor:"#ffffff",marginTop:"3vh"}}>

<MDBCardBody cascade className="text-center">
<MDBCardTitle className="text-dark" >
    <h1 className="text-dark" style={{fontFamily:"roboto"}}>Company Overview</h1>
</MDBCardTitle>
<MDBCardText className="text-dark">
HT Global Systems Inc is a leading Global Consulting and IT services company, providing a broad array of solutions customized for a range of key verticals and horizontals. From strategy consulting right through to implementing IT solutions for customers, providing innovative business and technology services that deliver measurable results.
</MDBCardText>

</MDBCardBody>
</MDBCard></MDBCol>

</MDBRow>
<MDBRow>

<MDBCol size="12" > <MDBCard style={{backgroundColor:"#ffffff",marginTop:"3vh"}}>

<MDBCardBody cascade className="text-center">
<MDBCardTitle className="text-dark" >
    <h1 className="text-dark" style={{fontFamily:"roboto"}}>Our Vision</h1>
</MDBCardTitle>
<MDBCardText className="text-dark">
    <p style={{textAlign:"left"}} className="text-dark">Our vision is to become a strong partner for many clients across the world with constant focus towards quality and maintain high standards by continually evolving with the latest tools and technologies.</p>
    <h1 className="text-dark" style={{fontFamily:"roboto"}}>Mission</h1>
    <p style={{textAlign:"left",whiteSpace:"pre-line"}} className="text-dark">{"Our mission is to understand the significance of your goals and partner to provide best in class services by leveraging our domain and technical expertise \n \n • Share your vision to deliver best in class solutions \n \n • Provide solid career platform and workplace for our employees \n \n • Promote innovation through Information Technology solutions"}</p>
   

</MDBCardText>
<MDBCardText className="text-dark">
    <h1 className="text-dark" style={{fontFamily:"roboto"}}>Core Values</h1>
    <p style={{textAlign:"left",whiteSpace:"pre-line",fontStyle:"bold"}} className="text-dark"><b>{"DRIVING CHANGE: \n \n Driving positive change in current trends and practices with our creative ideas and strategy, wherever we exist and enter. \n \n TRUST: \n \n Respecting and constantly improving in the confidence our clients has on us. \n \n ETHICS:\n \n Creating a culture of honesty, ownership in responsibilities and open-mindedness for an ethical business and work environment. \n \n OUTPERFORMANCE: \n \n Looking for opportunities to excel and successfully performing it to break our own records. \n \n SPEED AND AGILITY:\n \n We act with speed and agility. We achieve results at a rate faster than our competitors. \n \n PASSION: \n \n We are passionate about our clients and perform for them at a high level of achievement and contribution. We put the client first in everything we do and are relentless in implementing better ways of getting results. \n \n INTEGRITY: \n \n We conduct our business with uncompromising integrity. We are open, honest and direct in our dealings. \n \n RESPECT: \n \n We have trust and respect for individuals - We approach our work with the belief that people want to do a good job-and will do so, when given the right tools and support. \n \n INNOVATION: \n \n We deliver meaningful innovation. We are the services company that delivers the useful and the significant. \n \n TEAMWORK: \n\n We achieve our results through teamwork. Effective collaboration is key to our success Why HT Global Why HT Global \n \n At HT Global, we believe our responsibilities also extend beyond business. We go beyond to care for our employees that are working hard to improve the quality of the delivery and meeting client needs. We also stand distinctly from our competitors in the market to provide the best compensation and benefits. At Azure Tech, we know each of us has got lives outside of the work we perform and that is why we care to provide utmost satisfaction to our employees and clients who choose us as their partner. We strive for the best and walk hand in hand till we make our dreams come true. \n \n We work 24/7/365 Trained Managers Satisfaction Guaranteed Professional Approach Superior Customer Service Meet Customer Requirements Provide Competitive pricing on our services."}</b></p>
   

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

export default about;
