import React, { Component } from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBJumbotron, MDBTypography } from 'mdbreact';
import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import Popup from "reactjs-popup";

import {   MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '5px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

let data=[
    {
        imgurl:"guide-to-enterprise-application-integration_01-cover.png",
        title:"Application Integration",
        main:"Disparate systems, information, formats… The list can be long… Most likely as your business has grown, so has your “collection” of “things” and “formats” of information. Navigating through your inventory can prove tricky when you need to get the right information to the right systems and people. Sometimes what may seem trivial is not the case.",
        extra:"More often than not, our Clients have a firm grasp on where information sits and how to access it. However, ensuring that your applications integrate with data sources, formats and mediations can be an art form that takes an outside perspective to create. \n \n HT Global Integrators, have worked with numerous systems to ensure transactions between systems is efficient, well thought and adheres to standards and best practices to reduce system bloat and optimize results. \n \n Whether you are moving information for transactional purposes, storing data or making information more widely available within your organization; HT Global Integrators have the skills to guide you to success. \n \n HT Global Application Integration services have helped customers bridge these gaps for over 10 years. Our expertise has empowered customers across numerous industries streamline process, find efficiencies and enhance collaboration internally. \n \n Our best practices and methodologies assess the current state of our customer’s environment and map out strategic implementations that align business operations and information technology. HT Global integration specialists gather business requirements through structured analysis techniques to translate into information technology efficiencies. \n \n Understanding bring the expertise you need to augment or completely execute mission critical development projects for your organization. Our knowledge of development languages, patterns, best practices and potential roadblocks will guide you to success."
    },
    {
        imgurl:"business-intelligence.jpg",
        title:"Business Intelligence",
        main:"Whether it’s Data Warehouse design, dimensional modeling or business intelligence development, Solution IT consultants have multiple years of experience. Our BI experts have in-depth experience in the leading BI consulting technologies, combined with Applications expertise. Our BI consultants have designed, implemented, and optimized data warehouses and datamarts using leading database technologies such as Oracle, Microsoft SQL Server, Teradata and DB2.",
        extra:"Our expertise includes consultants with specific experience in the various components that make up the business intelligence (BI) offerings, including: \n \n Warehouse Methodologies \n \n Database Implementation and Tuning \n \n Extraction Transformation and Loading (ETL) \n \n OLAP and ROLAP \n \n Managed Enterprise Reporting \n \n Ad-hoc Query and Reporting \n \n Architects, Data Architects, Data Modelers/Analysts, Developer \n \n Our BI Consulting Experts have been helping customers to implement BI Consulting solutions across all vertical applications – Budgeting and Forecasting, Financial Reporting, Sales and Marketing, Supply Chain and Human Resources. \n \n Solution IT provides BI professionals for: \n \n SAP BI \n \n Business Objects (BOBJ) \n \n OBIEEBusiness Intelligence \n \n Microsoft BI \n \n Cognos \n \n MicroStrategy \n \n Informatica \n \n Datastage \n \n Garbage in, Garbage out. Most organizations, large or small have data that is the life-blood of their organization. This data is the foundation of your operations and increasingly, companies are looking to leverage data for analysis, understanding and forecasting operations and overall health of the company. \n \n Having data is the first step, knowing what you what to do with it is another. How to get from one to the other takes expertise and experience. \n \n Our Business Intelligence consultants help our Clients decipher their data and organize information to yield powerful insights and meaning to their most valuable asset; Data. The skills and technology associated with BI is an iterative process that continuously evolves as your business changes. \n \n Smart decisions are the building blocks of great performance and our strategy guides Customers through the initial ideation to roadmap a technology execution plan integrated with the goals of your business. Our actionable strategic plan establishes a framework with our Customers to bring BI technology to life while keeping Line of Business stakeholders in constant communication to the strategic direction through an interactive feedback process. \n \n Business Intelligence Assessments: Aligning and targeting key BI improvements for specific business areas and functions. This offering addresses known pain points by identifying the landscape of needs and incrementally delivering quick and visible business returns. \n \n Business Intelligence mentoring and training: Whether you have existing skills in-house our not, HT Global enables our Customers to embrace BI technology as an ongoing discipline internally. Through mentoring and training of your staff, new solutions emerge as new business opportunities present themselves."
    },
    {
        imgurl:"checklist-1622517_1920.png",
        title:"Quality assurance & Testing Services",
        mi:"QA / Testing Services \n \n In today's demanding business scenario it is important and expected to deliver high quality systems in less time and fewer resources. It is getting difficult to manage an in-house testing team and often testing is the function that is less focused on despite being the main criteria behind any successful application development.",
        main:"UNITED IT Testing Services helps companies with its comprehensive set of testing solutions to deliver high quality application within agreed timeframe. Our testing methodologies and solutions are an integrated part of software development lifecycle. It not only helps large organizations to cut cost associated with development and testing activities but also helps achieve predictable and improved quality levels. We provide end-to-end testing services to ensure that customer applications perform to their defined specifications.",
        extra:"Our suite of testing services includes: \n \n  • Functional Testing \n- Functional testing ensures that the application meets the functional requirements and performs as expected by the business. The focus is mainly on clear definitions of business criticality, identification of end-to-end functionality, and identification of internal interfaces. Independent functional testing includes: \n \n Regression Testing \n \n- It is imperative to ensure that all application modifications behave as intended and ensure that bugs are identified at the development stage itself.\n \n Component Testing \n \n- It is quite crucial to check if subsystem components are complying with specifications. \n \n Risk-Based Testing \n \n - Critical business functions are checked and ensured that they perform as per specification and business needs. \n \n Test Automation \n \n - Automated testing not only speeds up the testing process but offer faster test cycles. We are committed to cut cost by identifying right testing tools for the right processes. Are efforts are focused towards doing the right analysis and determine the best testing solution that will produce greatest results. Even though we have very well defined manual testing process but automated testing makes its mark in regression testing and this helps us to achieve strict deadlines and deliver quality software that meets stringent quality requirements. \n \n Performance Testing \n \n - Thorough requirement analysis is always the key to success for any application development initiative. We always begin our performance-testing projects keeping in mind the total requirement specification. We work on the detailed plan to optimize performance and fine tune the application's performance environment. \n \n We create detailed workload models and create authentic scenarios for volume tests, stress tests, as well as load, spike, and endurance tests. Aspects like the application's load and usage, application's limits, maximum concurrent users are areas which we cover extensively to understand the performance tuning requirements and develop the plan to anticipate bottlenecks, identify gaps in non-function requirements and the possible future needs of the application."
    },
    {
        imgurl:"laptop-2838918_1920.jpg",
        title:"IT Staffing",
        main:"In today’s highly competitive and ever-changing IT market, hiring the right candidate can make the difference between success and failure of your mission critical projects. You need an experienced partner that can navigate you through the complexities involved and demands of ‘Right-Sourcing’.",
        extra:"With Staffing proficiency, our IT staffing solutions help some of the top Fortune companies accelerate their hiring strategy. Avian has developed and perfected a globally distributed delivery model that sources, screens and employs only the highest quality candidate from a diverse pool of IT professionals at the best turn-around time. This vast experience and our innovative staffing solutions enable us to be top-of-the heart choice for our clients. Looking to fast-track your employment strategy? Connect with Us today!"
    },
    {
        imgurl:"training-3828299_1920.jpg",
        title:"Training",
        main:"HT Global is a leader in providing training and education in disciplines that meet all our software and business process needs. We offer training in key technologies to modernize our software development skills and innovation in the organization.",
        extra:"Every organization aspires to offer training programs, which meet the industry standards and bring out the best in their employees. For a company, every employee is a potential leader in his / her own domain. Well-trained and groomed employees are the key to the success of any organization. \n \n At HT Global, we understand the market needs better than anyone else and equip the professional with variety of ammunitions that would help them succeed in their respective industry, We conduct practical hands-on workshops and seminars, which provide software developers with the skills they require to accomplish today's greatest development challenges. \n \n Our instructors and course designers are primarily programmers and technical leads, each of them bringing several years of professional development experience. Our unique consultative approach to teaching ensures that the students receive benefits well beyond what exists in course materials. Different learning methods are utilized in delivery in order to ensure effectiveness like self- assessment Session, breakout sessions, Multi Media presentations, group discussions and other stimulating learning methodologies. \n \n We are expertise in training for Workday, IBM WebSphere product suite (WebSphere MQ Series, WebSphere Message Broker, WebSphere Administration and WSRR), Oracle Apps, SAP, Java/J2EE, Business Objects, Informatica, Cognos, QA and .Net Technologies.",
        high:"Training Highlights \n \n • We have state - of - the - art - training centers in Michigan, Colorado, North Carolina, Florida with well-equipped Labs, High Definition Projectors providing real time environment. \n \n • Our Trainers are best in the industry who have worked with various Fortune 100 companies and have deep knowledge of their core subjects. \n \n • Extensive Course Material provided to all our trainees and Assignments after every session.\n \n • Placement Assistance for students. \n \n We offer Training in various technologies mentioned below \n \n Microsoft Technologies \n \n C#, ASP.NET, VB.NET, Advanced.NET, WPF, WCF, Ajax, SharePoint 2007, SharePoint 2010, SharePoint Administration SQL server ,SQL Tuning, SQL server DBA, SQL Server BI(SSRS,SSAS,SSIS), Microsoft Dynamics, Silverlight3.0, BizTalk server \n \n JAVA \n \n Core JAVA, Advanced JAVA, J2EE, JSF, JNDI, JMS, EJB, and Ice faces spring and Hibernate, Struts, JBOSS, GWT \n \n Administration \n \nUNIX, SOLARIS, LINUX, SAN, Tivoli Storage Manager (TSM), VMWARE, System Administrator, Server Administrator, Microsoft Exchange 2010 Administration \n \n Data warehousing \n \n Data warehousing Data stage, Informatica, Teradata, Teradata DBA Cognos , CognosTM1, Cognos Planning Business Objects, BODI, OBIEE, OWB MS-BI, AB Initio, Micro Strategy Business Intelligence, Business Analyst, Pentaho, Oracle Data Integrator (ODI) \n \n  Hyperion \n \n 3Hyperion ESS Base, Hyperion Planning, Hyperion Financial Management (HFM) Hyperion Financial Reporting (HFR) , Hyperion Interactive Reporting (Brio) Hyperion Web Analysis, Hyperion Spread Services, Hyperion Master Data Management (HMDM) \n \n Salesforce \n \n Salesforce, salesforce CRM, salesforce Advanced \n \nERP \n \n PeopleSoft, SAP, Oracle Apps and Workday."
    }
]

export default function Services() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
        <Layout>
    <MDBContainer className="mt-5 text-center">
    <MDBTypography  tag='h1' variant="h1-responsive" >Services</MDBTypography>
  <MDBRow>
    <MDBCol>
      <MDBJumbotron  style={{backgroundColor:"#ffffff"}}>
      <MDBCard >
    <MDBCardImage className="img-fluid" src={require("../pics/handshake-2009195_1920.png")} waves />
    
  </MDBCard>
        <p className="lead">
        An idea is born. A new way to service internal or external customers. A better way to process information or reduce cost. Whatever the driver, you have ideas to better your business.

        </p>
        <hr className="my-2" />
        <p>
        Planning, designing, architecting and developing those solutions are each key milestones to your success. These are or will be the applications that run your business and you cannot afford to piece the project together, rework what was already done, or function without a well-documented system when the project is completed.
        </p>
        <hr className="my-2" />
      </MDBJumbotron>
    </MDBCol>
  </MDBRow>
  
</MDBContainer>
<MDBContainer>
<MDBRow>
    {data.map((d,i)=>{
       console.log(d)
       return(
        
            <MDBCol md='6' >
        <MDBCard style={{marginTop:"3vh"}}>
          <MDBCardImage className="img-fluid" src={require(`../pics/${d.imgurl}`)}
            waves />
          <MDBCardBody>
     <MDBCardTitle>{d.title}</MDBCardTitle>
            <MDBCardText>
                {d.main}
            </MDBCardText>
            
            <Popup
                trigger={<MDBBtn color="primary">Read More</MDBBtn>}
                modal
                closeOnDocumentClick
            >
                <div style={{whiteSpace:"pre-line",overflowY:"scroll",height:"55vh",width:"auto"}}> 
                
                <p>{d.extra} </p>
                <p>{d.high}</p>
                
                </div>
            </Popup>
           
          </MDBCardBody>
        </MDBCard>
      
      </MDBCol>
        
    
       )
  
    })}

</MDBRow>
</MDBContainer>

     
   
    </Layout>
      
    </div>
  );
}