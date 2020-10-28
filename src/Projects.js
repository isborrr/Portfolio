import React from 'react';
function  Projects ({ Name, Descriptions, Images }) {
    return (
        <div className="contain">
            <div className='webProgramming'>
                <ul> <div className="registration">
                        <div className='info'>
                        <li><h3><strong>{ Name} </strong></h3></li>
                            <p>
                                    {Descriptions}
                            </p>
                        </div>
                        <div className='picture'>
                            <img src={Images.url} className="pic" alt="logo" />
                        </div>
                     </div>
                </ul>         
            </div>
        </div>  
    );
}
export default Projects;
