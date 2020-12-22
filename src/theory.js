// 1.Q>Answer:-> add(2,3)
// const add=(a,b)=>{
//     return (a+b)
// }
// add(2,3)
// add(2)(3)
// var add = function(x) {
//     return function(y) { return x + y; };
// }


// 2.Q>Answer:->pass data from child to parent component in React
// Parent:
// <div className="parent">
//      <Child onSelect={this.handleLanguage} /> 
// </div>
// Child:
// handleLangChange = () => {
//     var element = this.Item.value;
//     this.props.onSelect(element);            
// }


// 3.Q>Answer:->jsx(javaScript XML)
//xml just lick a htmlfile,without jsx we can render,React doesn’t require using JSX, but most people find it helpful ,It also allows React to show more useful error and warning messages.
//for exmple render use jsx:-
// class Hello extends React.Component {
//     render() {
//       return <div>Hello {this.props.toWhat}</div>;
//     }
//   }
// for exmple render use without jsx:-
// class Hello extends React.Component {
//     render() {
//       return React.createElement('div', null, `Hello ${this.props.toWhat}`);
//     }
//   }//so we can say that without jsx rendering proces is complicated.


//4.Q>Answer:->state:->if we can required any value store in any component then that time we can use state.and we can easy store any value in state
//for example:-> 
// class Test extends React.Component {    
//     constructor() {    
//         this.state = {      
//             id: 1,      
//             name: "test"    
//         };  
//     }    
// props:->Props is short for properties and they are used to pass data between React components. React’s data flow between components is uni-directional (from parent to child only).
//exmple:->
// class ParentComponent extends Component {    
//     render() {    
//         return (        
//             <ChildComponent name="First Child" />    
//         );  
//     }
// }

// const ChildComponent = (props) => {    
//     return <p>{props.name}</p>; 
// };




//6.Q>Answer:->higher-order component (HOC) 
//higher-order component (HOC) is an advanced technique in React for reusing component logic.higher-order component is a function that takes a component and returns a new component.
//exmple:-const NEWComponent = higherOrderComponent(Component);


//8.Q>Answer:->input parameters of connect function
//the connect() function connects a React component to a Redux store.
//connect accepts four different parameters
// 1.mapStateToProps
// 2.mapDispatchToProps
// 3.mergeProps
// 4.options
// .mapStateToProps:->have two parameter
// mapStateToProps (state, object) =>{return Object}

// .mapDispatchToProps (dispatch, object) =>{return Object}



//9.Q>Answer:->lifecycle methods in hooks
//import React, { useEffect } from "react";

// const Component = () => {
    //componentDidMount
//   useEffect(() => {
//     console.log("componentDidMount");
//   }, []);

//componentDidUpdate
// useEffect(() => {
//     console.log("componentDidUpdate");
//   });

//componentWillUnmount
// useEffect(() => {
//     return () => {
//             console.log("componentWillUnmount");
//         }
//   }, []);


//   return <h1>Hello </h1>;
// };