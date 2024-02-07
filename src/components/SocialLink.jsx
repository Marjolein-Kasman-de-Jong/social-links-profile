import './SocialLink.css';

function SocialLink(props) {
    return (
        <>
            <button className='social-link-button' type='button'>{props.buttonText}</button>
        </>
    )
}

export default SocialLink;