import React, { useEffect, useState,useRef } from 'react'
import { reqResApi } from '../api/reqRes';
import {ReqResList,User} from '../interfaces/reqRes';



export const Users = () => {


    const [users, setUsers] = useState<User[]>([])
    const pageRef = useRef(0)
    

    useEffect(() => {
        //Call apis
        getUsers();

    }, [])


    const  getUsers = async() => {
        await reqResApi.get<ReqResList>('/users', {
            params: {
                page:pageRef.current
            }
        })
            .then(resp => {

                if (resp.data.data.length > 0) {
                    setUsers(resp.data.data);
                    pageRef.current++;
                } else {
                    alert('No more records');
                }
            }
            )

         
        }



    const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt='' style={{ width: 35, borderRadius: 100 }} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )

    }


    return (
        <div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map(renderItem)
                    }
                   

                </tbody>
            </table>

            <button className="btn btn-primary" onClick={()=>getUsers()}>
                Next
            </button>    


        </div>
    )
}
