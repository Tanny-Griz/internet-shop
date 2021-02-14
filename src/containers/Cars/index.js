import React  from 'react'

const Cars = ({posts, loading}) => {
    if(loading) {
        return (
            <>
                <p>loading...</p>
            </>        
        )
    }

    const imgUrl = "../../img/"
    
    return (
        <>
            {posts.map((item, index) => {
                if ( index % 4 == 0 && index != 0){
                    return (
                        <div key={index + "#"} style={{display: 'flex', justifyContent: 'center'}}>
                            <img src={imgUrl + 'banner1.png'} alt="banner" />
                        </div>      
                    )            
                } else {
                    return (
                        <div className="holder-card" key={index + '@'} >
                            <div className="item-card">
                                <div className="card-img">
                                    <img src={imgUrl + item.id + '.png'} alt={item.title} />
                                </div>
                                <div className="card-info">
                                    <h2 className="card-info-title">{item.manufacturer + ' - ' + item.model + ' ' + item.year}</h2>
                                    <span className="card-info-price">$ {item.price}</span>
                                    <div className="card-info-stats">
                                        <span><i className="far fa-calendar-alt"></i>{item.year}</span>
                                        <span><i className="fas fa-tachometer-alt"></i>{item.milliage} Mi</span>
                                        <span><i className="fas fa-gas-pump"></i>{item.fuel_type}</span>
                                        <span><i className="fas fa-cogs"></i>{item.transmission}</span>
                                    </div>
                                    <p className="card-info-description">
                                        {'ca. 6,7 l/100km (komb.), ca. 179 g CO₂/km (komb.) EZ 06/2009, 200.000&nbsp;km, 176kW (239 PS)' + item.milliage + ', ' + item.transmission + ', ' + item.fuel_type}
                                    </p>
                                </div>
                            </div>
                        </div> 
                    )
                }
            }
            )}
        </>

    )
}

export default Cars
