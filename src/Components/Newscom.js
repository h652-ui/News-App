import React from 'react'

const Newscom = (props) => {
        let { title, description, imageUrl, url } = props
        return (
            <>
                <div className="card my-2">
                    <img src = {imageUrl? imageUrl:"https://fosterlawfirmatlanta.com/wp-content/uploads/2020/09/Marketplace-Lending-News.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </>
        )
}

export default Newscom