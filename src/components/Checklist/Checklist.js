import { useContext, useState } from "react";
import AppContext from "../AppContext";

export default function Checklist() {
    const userContext = useContext(AppContext);
    const [newUserList, setNewUserList] = useState(userContext);
    // const [selectedUser, setSelectedUser] = useState([])
    function userChange(index) {
        const newUsers = [...newUserList];
        newUsers[index].isChecked = !newUsers[index].isChecked;
        setNewUserList(newUsers);
        console.log("newUserList", newUserList);
    }

    // const checkedUsers = newUserList.filter((item)=>{
    //     if(item.isChecked) {
    //         return true
    //     }
    // })
    return (
        <div>
            <ul className="checkbox-list">
                {
                    newUserList.map((item, index) => {
                        return (
                            <li key={index}>
                                <label>
                                    <input type="checkbox" checked={item.isChecked} onChange={() => userChange(index)} />
                                    {item.name}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>

            <ul className="checkbox-list">
                {
                    newUserList.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.name} - {item.isChecked == true ? "Yes" : "No"}
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}