import React from "react";

class LoadingComponent extends React.Component {
  constructor(props){
        super(props);
  }
  render() {
    return (
      <div style={{display: `${this.props.display}`}}>
        <div id="loadingComponent" style={{
            width: '100vw', 
            height: '100vh', 
            backgroundColor: 'black', 
            opacity: '30%',
            margin: 'auto', 
            position: 'fixed', 
            top: 0,
            left: 0,
            zIndex: 5000
        }}>
        </div>
        <i class="fas fa-spinner fa-pulse" style={{
            position: 'absolute', 
            top: '50%',
            left: '50%',
            color: '#dc3545',
            fontSize: 'xxx-large',
            zIndex: 5001
        }}></i> 
      </div>
    )
  };
}

export default LoadingComponent;