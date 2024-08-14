import React from "react";


//Example for simple state 

// class ReactState extends React.Component{
//     constructor(){
//             super();
//             this.state = { Mywebsite: "Welcome to my page" }
//     }
//     render(){
//         return( <h1>{this.state.Mywebsite}</h1> )
//     }
// }
// export default ReactState;




//Set State

//step 01; here  we create the the state 'object' that contains some info
class Setstate extends React.Component{
    constructor(){
        super();
        this.state = { information : "this in temp date before change" , content : " this messege shows the setstate example"}
    }
    //Step 03;  here we update the above content 
    addData= () =>{
        this.setState({information : "this is the new information"})
    }

    //Step 02; it shows the operation
    render(){
        return(
            <div>
                <h1>{this.state.information}</h1>
                <h2>{this.state.content}</h2>
                <button type="button" onClick={this.addData}>Click me</button>
            </div>
        )
    }
}
export default Setstate;