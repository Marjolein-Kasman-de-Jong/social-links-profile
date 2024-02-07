import './ProfileCard.css';
import users from '../constants/users';
import SocialLink from './SocialLink';

function ProfileCard( {userId} ) {

    const currentUser = users.find((user) => {
        return user.userId === userId;
    })

    return (
        <>
            <article className='profile-card'>
                <span>
                    <img className='avatar' src={currentUser.avatar} alt={currentUser.name} />
                </span>
                <hgroup>
                    <h2 className='username'>{currentUser.name}</h2>
                    <p className="location">{`${currentUser.city}, ${currentUser.country}`}</p>
                </hgroup>
                <blockquote className='user-quote'>
                    "{currentUser.quote}"
                </blockquote>
                <div className="user-quotes">
                    {
                        currentUser.socials.map((social) => {
                            return <SocialLink key={social} buttonText={social} />
                        })
                    }
                </div>
            </article>
        </>
    )
}

export default ProfileCard;