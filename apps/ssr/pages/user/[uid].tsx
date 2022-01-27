import React from 'react'

export interface UserIdPageProps {
    userId: any,
}

function UserIdPage(props: UserIdPageProps) {
    const { userId } = props
    return (
        <h1>{userId}</h1>
    )
}

export default UserIdPage

export async function getServerSideProps(context: any) {
    const { params } = context;
    const userId = params.uid;

    return {
        props: {
            userId: 'userId - ' + userId,
        }
    }
}