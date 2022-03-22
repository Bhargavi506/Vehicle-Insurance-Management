import React,{useEffect} from "react";
import {jumbotron,Container,Button } from "reactstrap";
const Home = ()=>{
    useEffect(() => {
        document.title="Home || Safty Life";
    },[]);
    return(
        <div>
            <jumbotron classname="text-center bg-primary" outline>
                <h1 >Vehicle Insurance</h1>
                <p>Motor Vehicle Insurance is the most important document for all vehicle owners/drivers. Its main objective is to give
                     complete complete protection against physical damage or loss sustained bythe insured vehiclefrom natural and 
                     man-made calamities. </p>
                <Container>
                    <Button color="primary">Vehicle Insurance</Button>
                </Container>
            </jumbotron>
        </div>

    );

}
export default Home;
