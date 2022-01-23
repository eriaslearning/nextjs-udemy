import React from 'react';
import Link from 'next/link';

function index() {
    const users = [
        {'id': 'erias', 'name': 'Elias'},
        {'id': 'ahmed', 'name': 'Ahmed'},
        {'id': 'max', 'name': 'Maximilian'}
    ];
    return (
        <div>
            <h1>Every user:</h1>

            {users.map((user) => (
                <li key={user.id}>
                    <Link href={{
                        pathname: '/user/[user]',
                        query: {user: user.id}
                    }}>{user.name}</Link>
                </li>
            ))}
        </div>
    )
}

export default index
