import { useAuth } from './Session/AuthContext'


function Home() {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <p>Home</p>
            <p>{user ? user.uid:'no user'}</p>
        </div>
    )
}

export default Home