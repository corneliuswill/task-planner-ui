import React from 'react';

//import { API } from '../api';

function Health() {
    // const getLists = () => {
    //     API.getLists().then(data => (console.log('getLists response:', data)));
    // }

    // const getTasks = () => {
    //     API.getTasks().then(data => (console.log('getTasks response:', data)));
    // }

    // const getUser = () => {
    //     API.getUser().then(data => (console.log('getUser response:', data)));
    // }

    return (
        <>
            <h2>Services</h2>
            <h3>Base URL: </h3>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Resource</th>
                    <th scope="col">Method</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>/lists</td>
                    <td>GET</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>/lists</td>
                    <td>GET</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td colSpan="2"></td>
                    <td></td>
                    </tr>
                </tbody>
                </table>

            <h2>URL Constructors</h2>
        </>
    )
}

export default Health;