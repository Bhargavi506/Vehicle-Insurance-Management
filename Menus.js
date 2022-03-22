import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {Link,Router} from 'react-router-dom';

const Menus = () =>{
    return(

        <ListGroup>

            <Link
            className="list-group-item list-group-item-action" 
            tag="a" to="/" action>
                Home
            </Link>

            <Link
            className="list-group-item list-group-item-action" tag="a" to="/admin-login" action>
                 Admin
            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/user-login" action>
                   UserLogin
            </Link>

            
            </ListGroup>
    );
        
};

export default Menus;

