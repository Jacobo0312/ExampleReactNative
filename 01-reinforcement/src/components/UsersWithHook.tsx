import React from 'react'
import { useUser } from '../hooks/useUser';
import { User } from '../interfaces/reqRes';

export const UsersWithHook = () => {

    const { users, next, previous } = useUser();

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

            <button className="btn btn-primary m-2" onClick={previous}>
                Previous
            </button>

            <button className="btn btn-primary" onClick={next}>
                Next
            </button>


        </div>
    )


}
