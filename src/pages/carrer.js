import React from "react"
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import Layout from "../components/layout"
import { MDBCard, MDBCardText } from "mdbreact"

const Carrer = () => {
    console.log(aboutText)
    return (
        <Layout>
             <h1 style={{textAlign: `center`, marginBottom: `40px`}}>Carrers At HT GLOBAL SYSTEMS</h1>
            <div className="page-content">
                <MDBCard style={{backgroundColor:"#fffff"}}>
               
                    <MDBCardText>
                    <Markdown source={aboutText[0].content.slice(21,aboutText[0].content.length-1)} escapeHtml={false} />
                    </MDBCardText>
                </MDBCard>
            </div>
        </Layout>
    )
}

export default Carrer