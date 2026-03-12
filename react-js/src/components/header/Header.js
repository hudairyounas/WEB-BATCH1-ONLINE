import React, { use } from "react";
import "./header.css"

function Header() {


    //? looping in jsx
    // let customClass = "abc";
    // if (Math.random() > 0.5) {
    //     customClass = "def";
    // }

    let userData = [
        {
            name: "John Doe",
            email: "john.doe@example.com",
            dob: "01/01/1990"
        },
        {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            dob: "02/02/1991"
        },
        {
            name: "Bob Johnson",
            email: "bob.johnson@example.com",
            dob: "03/03/1992"
        },
    ]


    return (
      <>
        {/* <h1 className={Math.random() > 0.5 ? "abc" : "def"}>Header Component</h1> */}
        {/* <ul>
            {arr.map((item) => {
                return <li key={item}>{item}</li>
            })}
        </ul> */}
        {/*? 12GB */}

        <table style={{width: "100%"}}>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>DOB</td>
            </tr>
            {userData.map((user) => (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.dob}</td>
                </tr>
            ))}

        </table>
      </>
    );
}

export default Header;