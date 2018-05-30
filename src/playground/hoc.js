//HIGHER ORDER COMPONENTS
//GOAL: TO REUSE CODE
//ADVANTAGES:
//CAN RENDER HIJACKING
//PROP MANIPULATION
//ABSTRACT STATE
import React from 'react';
import ReactDOM from 'react-dom';

//The typical 
const Info = (props) => (  
    <div>
        <h2> Info</h2>
        <p> The Info is: {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
   return (props) => ( 
   <div>
  {props.isAuthenticated ? 
  (<WrappedComponent {...props} />) : ( <p> Please login! </p>)}
   </div>
   );
}


const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo info="Please Login To see info" isAuthenticated={false} />, document.getElementById('app'));




// ReactDOM.render(<AdminInfo info="There are the details" />, document.getElementById('app'));
// const withAdminWarning = (WrappedComponent) => {
    //     return (props) => (
        //         <div>
        //             <p> This is private info. Please dont share</p>
        //             <WrappedComponent {...props}/>
        //         </div>
        //     );
        // };
        // const AdminInfo = withAdminWarning(Info);