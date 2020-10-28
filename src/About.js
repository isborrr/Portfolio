import React from 'react';
const About = () => {
    return (
        <>
            <div class="intro">
                <p><center><h3>My name is Ismael Boro.</h3></center></p>
                <p><h4>I am a graduate from <strong>Cuny LaGuardia community
                college</strong>, and computer science is my major.</h4></p>
                <p> <h4>I also completed  a 6 months Web development program
                at <strong>Code the Dream institute</strong> where I learned
                Html, JavaScript, Bootstrap, CSS and react.</h4>
                </p>
            </div>

            <div class="education">
                <p></p><center><strong><h1 className='badge badge-primary text-wrap'>EDUCATION</h1></strong></center><p></p>
                <h3>
                    <ul>
                        <li>
                            <p>Laguardia Community College </p>
                        </li>
                        <p><strong>GPA: 3.75</strong></p>

                        <li>
                            <p>Code the Dream</p>
                        </li>

                        <li>
                            <p>teamtreehouse.com</p>
                        </li>
                    </ul>
                </h3>
            </div>
            <div class="progr_language">
                <h1 className='badge badge-primary text-wrap'>Programming languages</h1>
                <h3>HTML - JavaScipt - CSS - Java - C++</h3>

            </div>
            <div class="leftdiv">
                <ul>
                    <li className='tapMargin'>
                        <p> The love for science , <strong>mathematics</strong> ,
                            <strong>philosophy</strong> , <strong>critical thinking</strong> and <strong>drawing</strong>
                            are things that have always
                             motivated my thoughts and give me the energy to encounter all situations .
                        </p>
                    </li>
                    <li>
                        <p> "It takes courage to grow up and become who you really are.”  Famous quotation of the
                             Americain poet <strong>Estlin Cummings</strong> .
                        </p>
                    </li>
                    <li>
                        <p>which means that all of us have dreams and we  want to accomplish our wishes, but dreams
                        will came true only for those who keep doing , stand
                        up and try again after failures, learn from mistakes ,stay humble and
                        handle success when it came to us.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="goal">
                <p> My main goal is to become a web programmer , work </p>
                <p>with companies where I will use  all the  knowledge</p>
                <p> that I learned  to do great jobs. </p>
            </div>
            <div className="comment">
                <p class="font-weight-bold"> <h2>Looking forward to read your comment </h2></p>
                <p>Thank you for taking the time to read a little about my person. </p>
            </div>
            <div id="C10">
                <p>Email:<strong>boro.ismaela@gmail.com</strong> </p>
                <p>Contact:<strong>+13476155308</strong></p>
            </div>
        </>
    );
}


export default About;