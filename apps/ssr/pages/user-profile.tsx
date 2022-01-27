

export interface UserProfilePageProps {
    username: string,
}

export function UserProfilePage(props: UserProfilePageProps) {
    const { username } = props
  return (
    <h1>{username}</h1>
  );
}

export default UserProfilePage;

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    
    return {
        props: {
            username: 'erias',
        }
    }
}