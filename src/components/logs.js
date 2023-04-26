import './styles/admin.css'
import Side from './side';
import React, { useEffect, useState } from 'react';
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.min.css';

function Logs() {
    const [data, setData] = useState([]);
    let token = localStorage.getItem("token")
    const [five, setFive] = useState({
        isFive: false
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);
    async function getData() {
        setFive({ isFive: false });

        fetch(`https://backendssh.vercel.app/admin/login/logs`, {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                'Authorization': token,

            }
        })
            .then((response) => response.json())
            .then((actualData) => {
                setFive({ isFive: true });

                setIsLoading(false);

                setData(actualData.loginLogs);
            })
            .catch((err) => {
                console.log(err.message);
            });

    };


    return (



        <>


            <div>
                {!five.isFive ?
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
                    </div> :

                    <div className="split right">
                        <div className='fieldse' >

                            <div className="table-responsive">

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>UserName</th>
                                            <th>Password</th>

                                            <th>ID</th>
                                            <th>Date</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="user-info">
                                                            <div className="user-info__basic">
                                                                <h5 className="mb-0">{item.username}</h5>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="user-info">
                                                            <div className="user-info__basic">
                                                                <h5 className="mb-0">{item.password}</h5>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="user-info">
                                                            <div className="user-info__basic">
                                                                <h5 className="mb-0">{item._id}</h5>

                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="user-info">
                                                            <div className="user-info__basic">
                                                                <h5 className="mb-0">{item.date}</h5>

                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>))}



                                    </tbody>

                                </table>

                            </div>



                        </div  >
                    </div>}</div>

        </>
    )
}
export default Logs;