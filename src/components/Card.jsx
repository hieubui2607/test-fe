

const Card = ({ icon, title, description }) => {
    return (
        <div className='card-word'>
            <img src={icon} alt={icon} className='icon-word mb-3' />
            <h5 className='title-word mt-3'>{title}</h5>
            <p className='description mt-3 m-0'>{description}</p>
        </div>
    )
}

export default Card