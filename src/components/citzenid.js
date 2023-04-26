import './styles/admin.css'
import Side from './side';
import React, { useState } from 'react';
import Header from "./header";
function Citizen() {

    let token = localStorage.getItem("token")

    const [usersd, setUserd] = useState([]);
    const [userkey, setUserkey] = useState('');
    const [find, setFind] = useState('')

    const [show, toggleShow] = useState(false);
    async function takekey(key) {
        setUserkey(key)
    }
    const [pre, setPre] = useState(false)
    const [messa, setMessa] = useState("NaN")
    async function search(userkey) {
        setRegister({ isRegister: false })
        setIsLoading(true)
        setPre(false)
        setMessa("NaN")
        fetch(`https://backendssh.vercel.app/admin/citizen/` + userkey, {
            method: "get", headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Authorization': token,

            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();

            })
            .then((userData) => {
                setUserd(userData.user)
                setRegister({ isRegister: true })
                setIsLoading(false)
                setPre(userData.user.precedent)

            })
            .catch((err) => {
                let cit = {
                    "_id": "NAN",
                    "first_name": "NAN",
                    "last_name": "NAN",
                    "gender": "NAN",
                    "company_name": "NAN",
                    "address": "NAN",
                    "city": "NAN",
                    "county": "NAN",
                    "phone1": "NAN",
                    "phone2": "NAN",
                    "email": "NAN",

                }
                setUserd(cit)
                setFind("Not Found")
                setRegister({ isRegister: true })
                setIsLoading(false)
                setMessa("nouser")

            });

    };
    const [register, setRegister] = useState({
        isRegister: true
    });
    const [isLoading, setIsLoading] = useState(false);
    function onClear() {
        setUserkey("")
    }
    return (<>

        {!register.isRegister ?
            <>
                <div>
                    <div className="blr"> </div><div className="app">
                        {isLoading ? (<>
                            <div className="loading-screenr"></div>

                            <div className="blendingr">
                                <div className="blending-spinnerr"></div>
                                <h3 className='cenn'>Please wait It will take a while! </h3>


                            </div>

                        </>
                        ) : null}</div>
                </div></> :
            <div className="split right">

                <div className='fieldse' >
                    <legend>Get Some One By ID</legend>
                    <input className='inpuu' type="search" placeholder="Please Enter National ID" onChange={(e) => {
                        setFind("")
                        toggleShow(false); takekey(e.target.value)
                    }} />
                    <input className='inpuu' type="button" value="Search" onClick={() => { toggleShow(!show); onClear(); search(userkey); }} disabled={!userkey} />

                    {(messa === "NaN") ?
                        <div>
                            {show &&

                                <div>


                                    {(pre === true) ?


                                        <div>

                                            <h1>Information</h1>

                                            <span className=''> <p>{"Name : "}{usersd.first_name} {usersd.last_name}</p><br /></span>
                                            <p>{"ID : "}{usersd._id}</p><br />

                                            <p>{"Gender  : "}{usersd.gender}</p><br />

                                            <span className=''>  <p>{"Company Name : "}{usersd.company_name}</p><br /></span>
                                            <p>{"Address : "}{usersd.address}</p><br />
                                            <p>{"City : "}{usersd.city}</p><br />
                                            <p>{"Country : "}{usersd.county}</p><br />



                                            <p>{"Phone1 : "}{usersd.phone1}</p><br />

                                            <p>{"Phone2 : "}{usersd.phone2}</p><br />

                                            <p>{"E-mail : "}{usersd.email}</p><br />

                                            <p>{"Web : "}{usersd.web}</p><br />

                                            <h1>Crimes</h1>

                                            {usersd.previousCrimes.map((item, index) => (
                                                <div key={index}>

                                                    <p>{"ID : "}{item._id}</p><br />

                                                    {item.Crimes.map((item, index) => (
                                                        <div key={index}>
                                                            <p>{"Crime1 : "}{item.crime1}</p><br />

                                                            <p>{"Date of the crime: "}{item["Date of the crime"]}</p><br />

                                                            <p>{"Country of the crime: "}{item["Country of the crime"]}</p><br />
                                                            <p>{"Address of the crime: "}{item["Address of the crime"]}</p><br />
                                                            <p>{"Years in prison: "}{item["Years in prison"]}</p><br />

                                                        </div>




                                                    ))}



                                                </div>))}


                                            <h1>Fingers</h1>
                                            <div className="image-wrapper">

                                                {usersd.fingers.map((item, index) => (
                                                    <div key={index}>

                                                        <div className="media">
                                                            <div className="overlay"></div>
                                                            <img src={item} alt="" />
                                                            <div className="image-details">

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>




                                        </div>

                                        :

                                        <div>

                                            <h1>Information</h1>
                                            <span className=''> <p>{"Name : "}{usersd.first_name} {usersd.last_name}</p><br /></span>
                                            <p>{"ID : "}{usersd._id}</p><br />

                                            <p>{"Gender  : "}{usersd.gender}</p><br />

                                            <span className=''>  <p>{"Company Name : "}{usersd.company_name}</p><br /></span>
                                            <p>{"Address : "}{usersd.address}</p><br />
                                            <p>{"City : "}{usersd.city}</p><br />
                                            <p>{"Country : "}{usersd.county}</p><br />



                                            <p>{"Phone1 : "}{usersd.phone1}</p><br />

                                            <p>{"Phone2 : "}{usersd.phone2}</p><br />

                                            <p>{"E-mail : "}{usersd.email}</p><br />

                                            <p>{"Web : "}{usersd.web}</p><br />


                                            <h1>Fingers</h1>
                                            <div className="image-wrapper">

                                                {usersd.fingers.map((item, index) => (
                                                    <div key={index}>

                                                        <div className="media">
                                                            <div className="overlay"></div>
                                                            <img src={item} alt="" />
                                                            <div className="image-details">

                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>




                                        </div>}

                                </div>

                            }
                        </div> :
                        <div>
                            {find &&
                                <div><span className='mess'>{find}</span> </div>
                            }</div>
                    }





                </div  >        </div  >
        }
    </>

    )


}
export default Citizen;