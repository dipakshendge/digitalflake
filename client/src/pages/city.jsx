import React from 'react';

const City = () => {
    return (
        <div>
            <h2>State</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>State Name</th>
                        <th>State Code</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>123</td>
                        <td>Maharashtra</td>
                        <td>MH15</td>
                        <td><span className="status active">Active</span></td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>124</td>
                        <td>Telangana</td>
                        <td>TN24</td>
                        <td><span className="status active">Active</span></td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>125</td>
                        <td>Gandhinagar</td>
                        <td>GJ07</td>
                        <td><span className="status inactive">Inactive</span></td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default City;
