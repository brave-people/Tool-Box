import { useParams } from 'react-router-dom'

function Profile() {
    const { userId } = useParams()

    return (
        <div className="container mt-5">
            <h2>{`${userId}의 Profile Page`}</h2>
        </div>
    )
}

export default Profile
