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
                    <Markdown source={aboutText[1].content.slice(61,aboutText[1].content.length)} escapeHtml={false} />
                    </MDBCardText>
                </MDBCard>
            </div>
        </Layout>
    )
}

export default Carrer