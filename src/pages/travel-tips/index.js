import React, { Component } from 'react';

import colors from '../../assets/theme/colors';
import layout from './../../assets/theme/layout';

import Heading from '../../components/Heading'
import HeroImage from "../../components/imageRepresentation/HeroImage";
import { ListWithImage } from './../../components/imageRepresentation/ListWithImage';

export default class TravelTips extends Component {

    render() {
        return (
            <div style={{ background: colors.lightGrey }}>
                <HeroImage heroUrl={"/img/travel-tips.jpg"} />
                <Heading content={"Travel Tips"} type={"h1"} />

                <Heading content={"Destinations"} type={"h2"} />
                <p>
                    We think, Budapest has such a unique location; whichever direction you choose to go, you will find something interesting to see, live and experiment! You have mountains and many lakes around, the Adriatic Sea is in a comfortably reachable distance when on a road trip, but Ionian, Aegean and Black Sea are not impossible either.  Dream big, take a camper and just follow your heart!
                    Just to give you an idea, we have marked a few interesting places to visit around us; trekking, mountain climbing, rafting, animal watching, wine-tasting, windsurf, sun bathing, horse-riding and many more! Interested?
                </p>

                <Heading content={"On the go"} type={"h2"} />
                <HeroImage heroUrl={"/img/on-the-go.jpg"} />

                <Heading content={"Parking"} type={"h3"} />
                <p>
                    When you are traveling with a campercamper, you will carry some valuables that will stay inside when you park and leave the vehicle for any reason. Probably your stuff is more expensive than the price of few hours in a watched parking. Never leave your belongings in sight and make sure that the car is properly closed.
                </p>
                <p>
                    Always park the camper carefully. Make sure that parking is allowed where you intend to park. If you are not sure, ask somebody or look for another place; better safe than sorry.
                </p>

                <Heading content={"Planning the route"} type={"h3"} />
                <p>
                    Probably the greatest adcampertage of a road trip is your freedom. Liberty to choose which way to go, what see, how long to stay there and where to head next. Still, as you have a given time, it is useful to plan your route a bit and know the best spots around, places where you can spend the night and distances. The mobile phone is an excellent tool on the go. Below you can find a bunch of <b>helpful Apps</b> that can be used even without Internet access.
                </p>

                <Heading content={"Night time"} type={"h3"} />
                <p>
                    It is with you to choose whether you would like to have more commodities and spend the night in a watched camping, or you would like to have more privacy and decide to spend the night in the wild. Both have their adcampertages, so we personally like to combine both. When you are in a camping, you can go to discover the surroundings by feet or bicycle with the peace of mind that the camper and your belongings are safe. In a camping, you can have a nice shower, comfortably wash your clothes and hang them to dry at the camping pitch. You can also have some social life and meet other campers. While camping places provide you comfort, spending the night in the nature has something different to offer to you. It is more private and over all adventurous. It is something we definitely think everyone should try once in a lifetime.
                </p>
                <p>
                    Whether you chose to stay overnight in a camping or in the nature, please, follow the rules. Our basic rules are respect and common sense! Always respect the nature and others!
                </p>
                <span>
                    If you go wild, please consider the following unwritten rules for your own safety and comfort:
                </span>
                <ul>
                    <li>
                        Check weather forecast in adcamperce
                    </li>
                    <li>
                        Provision yourself with enough water and food
                    </li>
                    <li>
                        Make sure that you run enough with the camper so the battery is fully charged to provide you electricity for the light and refrigerator
                    </li>
                    <li>
                        Always carry a flashlight, a (pocket)knife and matches or a lighter
                    </li>
                    <li>
                        Respect other campers or neighbours living in the area
                    </li>
                    <li>
                        If you see locals around the place you intend to stay at for the night, it is better to greet them and even ask permission for staying there
                    </li>
                    <li>
                        Don’t leave any trash behind you! Please take everything with you and throw to the bin when possible
                    </li>
                </ul>
                <span>
                    If you travel in Croatia, this is an IMPORTANT note for you!
                </span>
                <p>
                    <b>Law on the Host Activities in Croatia</b>, dated 01/05/2009, <b>Article 27</b> states that camping (including a simple overnight stay in the vehicle, or parking it outside each dedicated parking space) outside the camps in Croatia is an offense punishable by fine. In the case of such unauthorized camping on private land (land that is not owned by the state, municipal or city), the inspector may decide for an immediate sealing of the vehicle for a period of 60 days (<b>Article 43</b> of the same law). Unauthorized unsealing of the vehicle is an offense.
                </p>

                <Heading content={"Be friend of the environment"} type={"h3"} />

                <p>
                    Alfresko experience couldn’t happen without the surrounding environment, nature and people. As travellers, we think it is extraordinary to be able to go and see hidden places, discover regions that are still not flooded by tourism, get to know the locals and be able to see and experience how they live. But as travellers, we must appreciate and respect this perfect balance we discover in the surrounding nature, and its people. Here, we collected a few tips for you to be more environmental friendly and help to keep the harmony between nature and humans.
                </p>

                <Heading content={"Save on fuel!"} type={"h4"} />
                <ul>
                    <li>
                        Drive at the optimal speed in order to not to burn fuel in excess
                    </li>
                    <li>
                        Walk and cycle around to visit the surroundings and keep the camper for longer distances
                    </li>
                </ul>

                <Heading content={"Do not litter!"} type={"h4"} />
                <ul>
                    <li>
                        If you sleep in the nature always leave the place as you found it, or even cleaner. Don’t leave there anything that does not belong there!
                    </li>
                    <li>
                        Take all garbage with you until you can drop it appropriately!
                    </li>
                    <li>
                        Recycle as much as possible.
                    </li>
                    <li>
                        Try to reduce your waste by using the containers and the textile bags we provide you.
                    </li>
                    <li>
                        Spot the places where you can refill the camper’s water tank for example at mountain springs or public fountains. This way you not just reduce single-use plastics but also save your money.
                    </li>
                </ul>

                <Heading content={"Be extremely careful and cautious with fire!"} type={"h4"} />
                <ul>
                    <li>
                        In most European countries during the summer months is strictly forbidden to set fire.
                    </li>
                    <li>
                        Also be prudent when cooking on the gas cooker
                    </li>
                </ul>

                <Heading content={"Use biodegradable products!"} type={"h4"} />
                <p>
                    We use biodegradable products to clean our campers and to wash the textiles (bed clothes, tea towels, towels), we will also provide you biodegradable dishwashing liquid and surface cleaner. If you bring biodegradable soap, shampoo and detergents with you, you can enjoy even greater freedom.
                </p>

                <Heading content={"Choose local products!"} type={"h4"} />
                <span>Buying food from local farmers has only adcampertages</span>
                <ul>
                    <li>
                        Food will be fresh
                    </li>
                    <li>
                        Fruits and vegetables will be of the season. This means, they have been harvested in the right moment to contain the most nutrients and flavour.
                    </li>
                    <li>
                        By buying local, you save the environment from the pollution that is caused by the transportation of food from one point of the continent to the other.
                    </li>
                    <li>
                        Less packaging! You can bring your own container, plate, bowl, textile bag from the camper and reuse them time after time.
                    </li>
                    <li>
                        You are more likely to get bio food
                    </li>
                    <li>
                        You can try local specialities and above all, it is a great way to get to know people.
                    </li>
                </ul>

                <Heading content={"Useful Apps"} type={"h3"} />
                <HeroImage heroUrl={"/img/useful-apps.jpg"} />

                <div style={layout.container}>
                    <ListWithImage
                        brandName={'Park4night'}
                        brandUrl={'https://play.google.com/store/apps/details?id=fr.tramb.park4night&hl=hu'}
                        imageUrl={'https://scontent.fbud4-1.fna.fbcdn.net/v/t1.0-1/p200x200/23658500_1460634897387620_6004849811590195049_n.png?_nc_cat=103&_nc_ht=scontent.fbud4-1.fna&oh=ffef25ec19766bae361be69587eadadb&oe=5C428E2B'}
                        altText={'Park4night'}
                        text={`Park4night is an application on your smartphone that helps you search for a parking or
                    camping where you can stay overnight. There is always a word explanation or review at about
                    these places, sometimes with photos.
                    You will see a map with all of the car parks and campsites where you can stay with your
                    camper to rest. If you discover a parking space that is not on the App, you can also add, so
                    more people can enjoy this place. The App is free but you can pay for the pro version and use
                    the maps offline.`}
                    > </ListWithImage>

                    <ListWithImage
                        brandName={'Maps.me'}
                        brandUrl={'https://maps.me/'}
                        imageUrl={'https://maps.me/images/logo.svg'}
                        altText={'Maps.me'}
                        text={`Maps.me is a free and open-source mobile maps App for Android, iOS and BlackBerry. You
                    can select a certain area and download this map to your device. Once that process is finished
                    you can use it offline - no internet, mobile data or sim-card needed anymore.`}
                    > </ListWithImage>

                    <ListWithImage
                        brandName={'Google Maps'}
                        brandUrl={'https://www.google.hu/maps'}
                        imageUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/GoogleMaps_logo.svg/2000px-GoogleMaps_logo.svg.png'}
                        altText={'Google Maps'}
                        text={`Google Maps is a web-based service that provides detailed information about geographical
                    regions and sites around the world. In addition to conventional road maps, Google Maps offers
                    aerial and satellite views of many places. In some cities, Google Maps offers street views com-
                    prising photographs taken from vehicles.`}
                    > </ListWithImage>

                    <ListWithImage
                        brandName={'Wikiloc'}
                        brandUrl={'https://www.wikiloc.com/outdoor-navigation-app'}
                        imageUrl={'https://pbs.twimg.com/profile_images/912622919959957511/f5tPUtGd_400x400.jpg'}
                        altText={'Wikiloc'}
                        text={`Wikiloc is a great App to plan your outdoor activities and see the surroundings when not
                    driving. You can choose between running, hiking, cycling, mountain biking, kayaking and up
                    to 45 different activities available.
                    Enjoy free offline topographic base maps from all over the world that work without Internet
                    access. Ideal when you’re out in the wild with no data access.`}
                    > </ListWithImage>
                </div>
            </div >

        )
    }
}