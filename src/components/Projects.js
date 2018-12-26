import React, { Component } from 'react';

class ProjectsDropdown extends Component {
    render() {
        return (<div style={{ display:'flex', flexDirection: 'row' }}>           
            <h1 style={{ display: 'flex', width:'15vw', margin: 0, fontSize: '1.5em', color: '#F73F6E', cursor: 'pointer',  border: '1px solid mediumblue', paddingLeft: '15px'  }}>M.A.S.H.</h1>
            <h1 style={{ display: 'flex', width:'15vw', margin: 0, fontSize: '1.5em', color: '#F73F6E', cursor: 'pointer', border: '1px solid mediumblue', paddingLeft: '15px'  }}>SLO</h1>
            <h1 style={{ display: 'flex', width:'15vw', margin: 0, fontSize: '1.5em', color: '#F73F6E', cursor: 'pointer', border: '1px solid mediumblue', paddingLeft: '15px'  }}>Personal website</h1>
        </div>         
        );
    }
}

export default ProjectsDropdown;

                // <div >
                //     <div style={{ width:'fit-content', border: '1px solid white', }}><h2>M.A.S.H.</h2></div>
                //     <div style={{ width:'fit-content', border: '1px solid white', }}><h2>SLO</h2></div>
                //     <div style={{ width:'fit-content', border: '1px solid white', }}><h2>The very website you're looking at now...</h2></div>
                // </div> 