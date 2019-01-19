import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', width: '60vw', marginTop: '5vh', justifyContent: 'space-evenly' }}>
                    <div className="card " style={{ width: "25vw", height: "50vh", marginLeft: '1%', backgroundColor: 'rgb(254, 239, 240)', border: 'none' }}>
                        <div className='card' style={{ width: 'inherit', height: 'inherit', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', position: 'absolute', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <h1 style={{ color: 'mediumblue', fontSize: '100%' }}>M.A.S.H.</h1>
                        </div>
                    </div>
                    <div className="card " style={{ width: "25vw", height: "50vh", marginLeft: '1%', backgroundColor: 'rgb(254, 239, 240)', border: 'none' }}>
                        <div className='card' style={{ width: 'inherit', height: 'inherit', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', position: 'absolute', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <h1 style={{ color: 'mediumblue', fontSize: '100%' }}>FaceSpace</h1>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', width: '60vw', justifyContent: 'space-evenly', marginTop: '5%' }}>
                    <div className="card " style={{ width: "25vw", height: "50vh", marginLeft: '1%', backgroundColor: 'rgb(254, 239, 240)', border: 'none' }}>
                        <div className='card' style={{ width: 'inherit', height: 'inherit', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', position: 'absolute', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <h1 style={{ color: 'mediumblue', fontSize: '100%' }}>SLO</h1>
                        </div>
                    </div>
                    <div className="card " style={{ width: "25vw", height: "50vh", marginLeft: '1%', backgroundColor: 'rgb(254, 239, 240)', border: 'none' }}>
                        <div className='card' style={{ width: 'inherit', height: 'inherit', margin: 5, marginLeft: 15, marginTop: 15, flexDirection: 'column', position: 'absolute', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                            <h1 style={{ color: 'mediumblue', fontSize: '100%' }}>this.website</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
