import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function SingleUser() {
    const router = useRouter();
    console.log(router.query);
    const user = router.query.user;
    return (
        <div>
            <h1>The specific user: {user} and {user}</h1>
            <Link href="/user">USer</Link>
        </div>
    )
}

export default SingleUser
