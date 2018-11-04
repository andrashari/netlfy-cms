import React from 'react'
import PropTypes from 'prop-types'
import BookingForm from './../../components/forms/BookingForm';
import Heading from './../../components/Heading';
import Gallery from './../../components/imageRepresentation/Gallery';
import {
    DriveIcon,
    HeadLampIcon,
    TentIcon,
    SleepIcon,
    TowelIcon,
    BarbecueIcon,
    GasCartridgeIcon,
    ChildSeatIcon,
    HighwayPassIcon,
    BicycleIcon
} from './../../components/svgs/icons';

const style = {
    card: {
        border: '1px solid black',
        padding: 0
    },
    image: {
        width: '100%',
        maxHeight: '300px'
    }
}

export const VanPageTemplate = ({
    name,
    thumbnail,
    description,
    drive,
    sleep,
    basicSpecs,
    included,
    extras,
}) => {

    const images = [
        { src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=1&auto=format&crop=faces&fit=crop&w=310&h=310', orientation: 'square' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
    ]

    return (
        <section className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-8">
                        <img src={thumbnail} style={style.image} />
                    </div>
                    <div className="column is-4" >
                        <BookingForm />
                    </div>
                    <div className="columns is-full" >
                        <Heading content={name} type={"h1"} />
                        <p>{description}</p>
                        <Gallery images={images}></Gallery>
                        <p>{drive.$numberInt}</p>
                        <p>{sleep.$numberInt}</p>
                        <ul>
                            {basicSpecs.map((spec, index) => spec ? <li key={index} >{spec}</li> : null)}
                        </ul>
                        <ul>
                            {included.map((included, index) => included ? <li key={index} >{included}</li> : null)}
                        </ul>
                        <ul>
                            {extras.map((extra, index) => extra ? <li key={index} >{extra}</li> : null)}
                        </ul>
                    </div>
                    <div>
                        <Heading content={'Extras'} type={"h2"} />
                        <HeadLampIcon />
                        <TentIcon />
                        <SleepIcon />
                        <TowelIcon />
                        <BarbecueIcon />
                        <GasCartridgeIcon />
                        <ChildSeatIcon />
                        <HighwayPassIcon />
                        <BicycleIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}

VanPageTemplate.propTypes = {
    van: PropTypes.object
}

const VanPage = ({ van }) => {
    return (
        <VanPageTemplate
            name={van.name}
            thumbnail={van.thumbnail}
            description={van.description}
            drive={van.drive}
            sleep={van.sleep}
            basicSpecs={van.basicSpecs}
            included={van.included}
            extras={van.extras}
        />
    )
}

VanPage.propTypes = {
    van: PropTypes.object
}

export default VanPage
