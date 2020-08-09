import React from "react";
import { MDBCard,MDBCardTitle,MDBCardBody,MDBCardText,MDBRow,MDBCol,MDBJumbotron,MDBBtn,MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Layout from "../components/layout";
import { colors } from "@material-ui/core";

const Home = () => {
  return (
   <Layout>
         <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={4}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={require("../pics/staff.jpg")}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive text-dark">Staff</h3>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={require("../pics/solution44.jpg")}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Solutions</h3>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={require("../pics/training.jpg")}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Training</h3>
           
          </MDBCarouselCaption>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src={require("../pics/ideas1.jpg")}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Ideas</h3>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>

    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h3 className="display-4">Company Overview</h3>
            <p className="lead">
            HT Global Systems Inc is a leading Global Consulting and IT services company, providing a broad array of solutions customized for a range of key verticals and horizontals. From strategy consulting right through to implementing IT solutions for customers, providing innovative business and technology services that deliver measurable results.
            </p>
            <hr className="my-2" />
            <h3 className="display-4">Vision</h3>
            <p>
            Our vision is to become a strong partner for many clients across the world with constant focus towards quality and maintain high standards by continually evolving with the latest tools and technologies.
            </p>
            <p className="lead">
              <MDBBtn color="primary" href="/contact">Contact Us</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      <MDBCol>
      <MDBCard style={{ width: "100%",textAlign:"left" }}>
        <MDBCardBody>
          
          <MDBCardText>
          As a staffing and recruitment professional for over many years, I have seen many changes in the industry. Over that time, I’ve witnessed a transformation in the way organizations view staffing services. Today, we see more and more companies using staffing services as a strategic tool, rather than just for temporary fill-ins.
          </MDBCardText>

          <MDBCardText style={{}}>
          We are a full-service staffing firm dedicated to making the staffing process easier for our clients by delivering higher quality candidates and comprehensive staffing solutions. It is our hope that through our varied services, we can help our clients increase productivity and reduce staffing costs.
        </MDBCardText>

        <MDBCardText style={{}}>
        At HT Global Systems, our focus is on helping companies create proactive workforce plans. Our goal is to help our clients use staffing strategically to increase capacity, overcome hiring freezes, access specialized talent, better manage increased workloads, and enhance overall productivity.
        </MDBCardText>

        <MDBCardText style={{}}>
        We understand that success in business begins with people. Here at HT Global Systems, we've compiled what we think is one of the industries best staffing teams. Our consultants have many years of experience in staffing and are dedicated to finding the most talented and capable people for your positions.
        </MDBCardText>

        <MDBCardText style={{}}>
        We welcome an opportunity to help take your business or your career to new levels.
        </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBContainer>
    
   </Layout>
   
  );
}

export default Home;