import React from "react"
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import Layout from "../components/layout"
import { MDBCard, MDBCardText } from "mdbreact"

const Carrer = () => {
    return (
        <Layout>
             <h1 style={{textAlign: `center`, marginBottom: `40px`}}>Carrers At HT GLOBAL SYSTEMS</h1>
            <div className="page-content">
                <MDBCard style={{backgroundColor:"#fffff"}}>
                <Markdown source={aboutText[0].title} escapeHtml={false} />
                    <MDBCardText>
                    <Markdown source={aboutText[0].body} escapeHtml={false} />
                    </MDBCardText>
                </MDBCard>
            </div>
        </Layout>
    )
}

export default Carrer