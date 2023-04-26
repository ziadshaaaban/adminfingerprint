import './styles/upload.css'
import Header from "./header";
import { useState, useEffect } from 'react';
import { Toastcont, toast } from 'react-toastify';
import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router-dom';

function Upload() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/")
        }


    }, [])
    let token = localStorage.getItem("token")

    const [fingerprint, setFingerprint] = useState("")
    const [finger, setFinger] = useState("")
    const [errorMessage1, setErrorMessage1] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const [errorMessage3, setErrorMessage3] = useState('');
    const [errorMessage4, setErrorMessage4] = useState('');
    const usero = {
        "_id": "NaN",
        "user": "NaN",
        "userId": "NaN",
        "transactionType": "NaN",
        "transactionImagePath": "NaN",
        "result": "NaN",
        "transactionImage1Path": "NAN", "transactionImage2Path": "NAN"
    }
    const [userone, setUserone] = useState(usero)
    const mes = "no"

    const [trmess, setTrmess] = useState(mes)

    const [data, setData] = useState([]);
    const [test, setTest] = useState('NAN')
    const [notm, setNotm] = useState("no")
    const pers = {
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
        "web": "NAN", "fingers": [
            "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN", "NAN",]
        , "previousCrimes": [
            {
                "_id": "NAN",
                "Crimes": [
                    {
                        "crime1": "NAN",
                        "Date of the crime": "NAN",
                        "Country of the crime": "NAN",
                        "Address of the crime": "NAN",
                        "Years in prison": "NAN"
                    }
                ]
            }
        ]

    }
    const mat = { "result": "NAN" }

    const [matchth, setMatchth] = useState(pers)
    const [matchtwo, setMatchtwo] = useState(mat)

    const [trconfirm, settrconfirm] = useState([]);

    const [geender, setGeender] = useState({
        "gender": "NaN",
        "male_percentage": 0,
        "female_percentage": 0,
        "hand_position": "NAN",
        "right_percentage": 0,
        "left_percentage": 0
    })


    async function one() {
        setSec({ isSec: false });


        setIsLoading(true)
        // let item = { "fingerprint": fingerprint };
        const formData = new FormData();
        formData.append('fingerprint', fingerprint);
        let result = await fetch("http://localhost:8080/admin/transactionOne", {
            method: "POST",
            body: formData,

            headers: {
                "Accept": "application/json",
                // "Content-type": 'multipart/form-data',
                'Authorization': token,
            },
        });
        result = await result.json();
        setIsLoading(false)

        setSec({ isSec: true });


        if (result.transactionReport) {
            settrconfirm(result.transactionReport)
            setGeender(result.transactionReport.informationEstimated)
            setTest(result.transactionReport.transactionType)
            setNotm(result.transactionReport.result)
            setUserone(result.transactionReport)

            if (result.transactionReport.isMatched) {
                setMatchtwo(result.transactionReport.isMatched)

            }


            if (result.transactionReport.PersonMatched) {
                setMatchth(result.transactionReport.PersonMatched);
            }
        } if (result.message) {
            setTrmess(result.message)
        }

    } async function two() {
        setSec({ isSec: false });

        setIsLoading(true)
        const formData = new FormData();
        formData.append('fingerprint', fingerprint);
        formData.append('fingerprint', finger);

        // let item = { fingerprint: fingerprint };
        // let ietmm = { fingerprint: finger };
        let result = await fetch("http://localhost:8080/admin/transactionTwo", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                // "Content-type": "application/json",
                'Authorization': token,
            },
            body: formData
        });
        result = await result.json();
        setIsLoading(false)
        setSec({ isSec: true });

        if (result.message) {
            setTrmess(result.message)
        }

        if (result.transactionReport) {
            settrconfirm(result.transactionReport)
            setGeender(result.transactionReport.informationEstimated)
            setTest(result.transactionReport.transactionType)
            setNotm(result.transactionReport.result)
            setUserone(result.transactionReport)

            if (result.transactionReport.isMatched) {
                setMatchtwo(result.transactionReport.isMatched)

            }


            if (result.transactionReport.PersonMatched) {
                setMatchth(result.transactionReport.PersonMatched);
            }

        }

    }
    async function three() {
        setSec({ isSec: false });

        setIsLoading(true)
        const formData = new FormData();
        formData.append('fingerprint', fingerprint);
        // let item = { fingerprint: fingerprint };
        let result = await fetch("http://localhost:8080/admin/transactionThree", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                // "Content-type": "application/json",
                'Authorization': token,
            },
            body: formData
        });
        result = await result.json();
        setIsLoading(false)
        setSec({ isSec: true });

        if (result.message) {
            setTrmess(result.message)
        }

        if (result.transactionReport) {
            settrconfirm(result.transactionReport)
            setGeender(result.transactionReport.informationEstimated)
            setTest(result.transactionReport.transactionType)
            setNotm(result.transactionReport.result)
            setUserone(result.transactionReport)

            if (result.transactionReport.isMatched) {
                setMatchtwo(result.transactionReport.isMatched)

            }


            if (result.transactionReport.PersonMatched) {
                setMatchth(result.transactionReport.PersonMatched);
            } setIsLoading(false)

        }


    }
    async function four() {
        setSec({ isSec: false });

        setIsLoading(true)
        const formData = new FormData();
        formData.append('fingerprint', fingerprint);
        // let item = { fingerprint: fingerprint };
        let result = await fetch("http://localhost:8080/admin/transactionFour", {
            method: "POST",

            body: formData,
            headers: {
                "Accept": "application/json",
                // "Content-type": 'multipart/form-data',
                'Authorization': token,
            },
        });
        result = await result.json();
        setIsLoading(false)
        setSec({ isSec: true });

        if (result.message) {
            setTrmess(result.message)
        }

        if (result.transactionReport) {
            settrconfirm(result.transactionReport)
            setGeender(result.transactionReport.informationEstimated)
            setTest(result.transactionReport.transactionType)
            setNotm(result.transactionReport.result)
            setUserone(result.transactionReport)

            if (result.transactionReport.isMatched) {
                setMatchtwo(result.transactionReport.isMatched)

            }


            if (result.transactionReport.PersonMatched) {
                setMatchth(result.transactionReport.PersonMatched);
            }

        }

    }
    function showForg(forg) {
        toast.info(forg, {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-message'
        });
    };
    const [forg, setForg] = useState("");
    function onClear() {
        setFingerprint("")
        setFinger("")
        setForg("")
        setMatchth(pers)
        setMatchtwo(mat)
        setTrmess(mes)
        setUserone(usero)
        toggleShow(false)
        settrconfirm(usero)
        setNotm("no")
        setTest("NAN")
        setGeender({
            "gender": "NaN",
            "male_percentage": 0,
            "female_percentage": 0,
            "hand_position": "NAN",
            "right_percentage": 0,
            "left_percentage": 0
        })
        setSec({ isSec: false });

    }
    const [register, setRegister] = useState({
        isRegister: false
    });
    const [sec, setSec] = useState({
        isSec: false
    });
    const [show, toggleShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [imagePreview, setImagePreview] = useState(null);
    const [imagePreview2, setImagePreview2] = useState(null);

    if (fingerprint) {
        const reader = new FileReader();

        reader.onload = () => {
            setImagePreview(reader.result);
        };

        reader.readAsDataURL(fingerprint);
    }
    if (finger) {
        const reader = new FileReader();

        reader.onload = () => {
            setImagePreview2(reader.result);
        };

        reader.readAsDataURL(finger);
    }

    return (


        <>
            {!register.isRegister ?
                <div>

                    <section>

                        <div className="box">
                            <h1>Crimnals</h1>
                            <h5>(Compare with people have previous crimes)</h5>

                            <input type="file" className='up' onChange={(e) => setFingerprint(e.target.files[0])} />
                            <button className='new' onClick={() => { showForg(forg); one(); onClear(); setRegister({ isRegister: true }); }}>Search</button>
                            {errorMessage1 && <div className="invalid">{errorMessage1}
                            </div>}
                        </div>
                        <div className="box">
                            <h1>Suspicious</h1>
                            <h5>(compare image from crime scene with image of suspect person)</h5>

                            <input type="file" className='up' onChange={(e) => setFingerprint(e.target.files[0])} />
                            <input type="file" className='up' onChange={(e) => setFinger(e.target.files[0])} />
                            <button className='new' onClick={() => { showForg(forg); two(); onClear(); setRegister({ isRegister: true }); }}>Check Matches</button>
                            {errorMessage2 && <div className="invalid">{errorMessage2}
                            </div>}
                        </div>
                        <div className="box">
                            <h1>Global</h1>
                            <h5>(Compare with global DB)</h5>
                            <input type="file" className='up' onChange={(e) => setFingerprint(e.target.files[0])} />
                            <button className='new' onClick={() => { showForg(forg); three(); onClear(); setRegister({ isRegister: true }); }}>Search</button>
                            {errorMessage3 && <div className="invalid">{errorMessage3}
                            </div>}
                        </div>
                        <div className="box">
                            <h1>Info!</h1>
                            <h5>Get Estimated Information's (GENDER , HAND, FINGER)</h5>
                            <input type="file" className='up' onChange={(e) => setFingerprint(e.target.files[0])} />
                            <button className='new' onClick={() => { showForg(forg); four(); onClear(); setRegister({ isRegister: true }); }}>Get Details</button>
                            {errorMessage4 && <div className="invalid">{errorMessage4}
                            </div>}
                        </div>
                    </section></div>
                :

                <div>

                    <div>

                        <div>

                            {!sec.isSec ?

                                <div >

                                    <div className="blr">
                                    </div><div className="appr">
                                        {isLoading ? (<>


                                            <div className="loadr">
                                                <h3 className='cen'>Please wait It will take a while! </h3>


                                                <div className="blending-spinnerr"></div>
                                            </div>

                                        </>
                                        ) : null}</div></div>
                                :
                                <div>

                                    {((test === 'one{Compare with people have previous crimes}' || test === 'Three{Compare with global DB}') & notm === 'not matched') ?
                                        <div>


                                            <div className="cont">
                                                <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />

                                                {imagePreview && (
                                                    <img className='round' src={imagePreview} alt="preview" />
                                                )}

                                                <div>  <h4> Result : Not Match</h4>
                                                    <h5> User : {userone.user} </h5>

                                                    <h5> transactionType : {userone.transactionType} </h5>

                                                    <br></br>
                                                    <div className="buttons">

                                                        {/* <button className="main-btn secondary" onClick={() => { toggleShow(!show) }}>
                                                            More
                                                        </button> */}
                                                        <br></br>
                                                    </div>                                                <br></br>

                                                </div>

                                                <div className="skills">
                                                    <h1 className='lon'>INFO !</h1>
                                                    <hr />
                                                    <ul>
                                                        <li>Gender : {geender.gender}</li>
                                                        <li>Male percentage : {geender.male_percentage}</li>
                                                        <li> Female Percentage : {geender.female_percentage} </li>
                                                        <li>Hand Position : {geender.hand_position} </li>
                                                        <li> Right Percentage : {geender.right_percentage} </li>
                                                        <li>  Left Percentage : {geender.left_percentage} </li>
                                                    </ul>
                                                </div>

                                                <br></br>
                                            </div>

                                        </div> : null
                                    }
                                    <div>


                                        <div>
                                            {(trmess === 'please upload image!') || (trmess === 'their is an error happen!') || (trmess === 'please upload images!') || (trmess === 'please upload the second image!') ||
                                                (trmess === 'Please wait admin to confirm the transaction to see the report of transaction') ? <div>


                                                <div className="alert warning-alert alrt">
                                                    <h3>{trmess}</h3>
                                                    <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="close" />
                                                </div>


                                            </div> : null
                                            }</div>

                                        <div>
                                            {((test === 'one{Compare with people have previous crimes}') & notm === 'matched') ?
                                                <div>
                                                    <div className="cont">
                                                        <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />

                                                        {imagePreview && (
                                                            <img className='round' src={imagePreview} alt="preview" />
                                                        )}

                                                        <div>  <h4> Result :  Match</h4>
                                                            <h5> User : {userone.user} </h5>

                                                            <h5> transactionType : {userone.transactionType} </h5>

                                                            <br></br>
                                                            <div className="buttons">

                                                                {/* <button className="main-btn secondary" onClick={() => { toggleShow(!show) }}>
                                                            More
                                                        </button> */}
                                                                <br></br>
                                                            </div>                                                <br></br>

                                                        </div>
                                                        <div className="skills">
                                                            <h1 className='lon'>INFO !</h1>
                                                            <hr />

                                                            <span className=''> <p>{"Name : "}{matchth.first_name} {matchth.last_name}</p><br /></span>
                                                            <p>{"Gender  : "}{matchth.gender}</p><br />

                                                            <span className=''>  <p>{"Company Name : "}{matchth.company_name}</p><br /></span>
                                                            <p>{"Address : "}{matchth.address}</p><br />

                                                            <p>{"City : "}{matchth.city}</p><br />
                                                            <p>{"County : "}{matchth.county}</p><br />


                                                            <p>{"Phone1 : "}{matchth.phone1}</p><br />
                                                            <p>{"Phone2 : "}{matchth.phone2}</p><br />
                                                            <p>{"E-mail : "}{matchth.email}</p><br />
                                                            <p>{"Web : "}{matchth.web}</p><br />

                                                            <h1>Crimes</h1>

                                                            {matchth.previousCrimes.map((item, index) => (
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

                                                                {matchth.fingers.map((item, index) => (
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




                                                        </div></div>

                                                </div>
                                                : null
                                            }</div>


                                        <div>
                                            {((test === 'Three{Compare with global DB}') & notm === 'matched') ?
                                                <div>


                                                    <div className="cont">
                                                        <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />

                                                        {imagePreview && (
                                                            <img className='round' src={imagePreview} alt="preview" />
                                                        )}

                                                        <div>  <h4> Result :  Match</h4>
                                                            <h5> User : {userone.user} </h5>

                                                            <h5> transactionType : {userone.transactionType} </h5>

                                                            <br></br>
                                                            <div className="buttons">

                                                                {/* <button className="main-btn secondary" onClick={() => { toggleShow(!show) }}>
                                                            More
                                                        </button> */}
                                                                <br></br>
                                                            </div>                                                <br></br>

                                                        </div>



                                                        <div className="skills">
                                                            <h1 className='lon'>INFO !</h1>
                                                            <hr />


                                                            <span className=''> <p>{"Name : "}{matchth.first_name} {matchth.last_name}</p><br /></span>
                                                            <p>{"Gender  : "}{matchth.gender}</p><br />

                                                            <span className=''>  <p>{"Company Name : "}{matchth.company_name}</p><br /></span>
                                                            <p>{"Address : "}{matchth.address}</p><br />

                                                            <p>{"City : "}{matchth.city}</p><br />
                                                            <p>{"County : "}{matchth.county}</p><br />


                                                            <p>{"Phone1 : "}{matchth.phone1}</p><br />
                                                            <p>{"Phone2 : "}{matchth.phone2}</p><br />
                                                            <p>{"E-mail : "}{matchth.email}</p><br />
                                                            <p>{"Web : "}{matchth.web}</p><br />


                                                            <h1>Fingers</h1>
                                                            <div className="image-wrapper">

                                                                {matchth.fingers.map((item, index) => (
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
                                                        </div></div></div>


                                                : null
                                            }</div>

                                    </div>
                                    <div>
                                        {(test === 'Two{compare image from crime scene with image of suspect person}' & matchtwo.result === 'Not match') ? <div>
                                            <div className="cont">

                                                <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />

                                                {imagePreview && (
                                                    <img className='round' src={imagePreview} alt="preview" />
                                                )}
                                                {imagePreview && (
                                                    <img className='round' src={imagePreview2} alt="preview" />
                                                )}
                                                <div>  <h4> Result : Not Match</h4>
                                                    <h5> User : {trconfirm.user} </h5>

                                                    <h5> transactionType : {trconfirm.transactionType} </h5>

                                                    <br></br>
                                                    <br></br>

                                                </div>

                                            </div>


                                        </div> : null
                                        }</div>
                                    <div>
                                        {(test === 'Two{compare image from crime scene with image of suspect person}' & matchtwo.result === 'Match') ? <div>

                                            <div className="cont">

                                                <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />

                                                {imagePreview && (
                                                    <img className='round' src={imagePreview} alt="preview" />
                                                )}
                                                {imagePreview && (
                                                    <img className='round' src={imagePreview2} alt="preview" />
                                                )}
                                                <div>  <h4> Result :  Match</h4>
                                                    <h5> User : {trconfirm.user} </h5>

                                                    <h5> transactionType : {trconfirm.transactionType} </h5>

                                                    <br></br>
                                                    <br></br>

                                                </div>


                                            </div>

                                        </div> : null
                                        }</div>


                                    <div>

                                        {(test === "Four{Get Estimated Information's From FingerPrint Like (GENDER , HAND, FINGER)}") ? <div>


                                            <div className="cont">
                                                <CloseButton aria-label="Hide" onClick={() => { setRegister({ isRegister: false }); onClear(); }} className="clos" />

                                                {imagePreview && (
                                                    <img className='round' src={imagePreview} alt="preview" />
                                                )}
                                                <div>
                                                    <h5> User : {trconfirm.user} </h5>

                                                    <h5> transactionType : {trconfirm.transactionType} </h5>

                                                    <br></br>
                                                    <div className="buttons">


                                                        <br></br>
                                                    </div>                                                <br></br>

                                                </div>

                                                <div className="skills">
                                                    <h1 className='lon'>INFO !</h1>
                                                    <hr />
                                                    <ul>
                                                        <li>Gender : {geender.gender}</li>
                                                        <li>Male percentage : {geender.male_percentage}</li>
                                                        <li> Female Percentage : {geender.female_percentage} </li>
                                                        <li>Hand Position : {geender.hand_position} </li>
                                                        <li> Right Percentage : {geender.right_percentage} </li>
                                                        <li>  Left Percentage : {geender.left_percentage} </li>
                                                    </ul>
                                                </div>

                                                <br></br>
                                            </div>

                                        </div> : null
                                        }</div>

                                </div>

                            }



                        </div>




                    </div>







                </div>
            }
        </>

    );



}
export default Upload;