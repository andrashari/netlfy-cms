import React, { Component } from 'react';

import colors from '../../assets/theme/colors';

import Layout from "../../components/layout"
import Heading from '../../components/Heading'
import HeroImage from "../../components/imageRepresentation/HeroImage";
import Section from "../../components/layout/Section";

export default class TermsAndConditions extends Component {
    render() {
        console.log(this.props);
        return (
            <Layout>
                <div style={{ background: colors.lightGrey }}>
                    <Heading content={"Alfresko Campers Terms & Conditions"} type={"h1"} maxWidth={{ maxWidth: '100%' }} />
                    <Section style={{ paddingBottom: 0 }}>
                        <p style={{ marginBottom: 0 }}>
                            The renter, hereinafter also referred to as ‘you’ or ‘hirer’ accepts Alfresko Campers’, also mentioned as ‘we’, ‘us’, Terms and Conditions expressed herein at the time of the online booking.
                        </p>
                        <p>
                            Alfresko Campers reserves the right to modify the present Terms and Conditions at any time without advance notice. In case of modification, the applicable conditions will remain the same as on the day you accepted Alfresko Campers’ Terms and Conditions as part of your online booking.
                        </p>
                        <p>
                            No right of Alfresko Campers under this agreement nor any of your obligations hereunder may be waived except in writing by Alfresko Campers.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"1.	Rental agreement"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            Alfresko Campers is the owner of the vehicle subject of the Rental Agreement. Subject to the Terms & Conditions, Alfresko Campers agrees to hire the vehicle to the renter and the renter agrees to hire the vehicle from Alfresko Campers for the rental duration stated in the Rental Agreement.
                        </p>
                        <p>
                            Alfresko Campers hands over the vehicle in roadworthy conditions, clean and with the listed equipment in the Rental Agreement.
                        </p>
                        <p>
                            By the time of pick-up, the renter must be at least 21 years old and must show the following documents:
                        </p>
                        <ul>
                            <li>
                                a valid drivers’ licence (class B) for the rental duration held for minimum a year
                            </li>
                            <li>
                                a secondary form of ID showing your address; or a bank statement/utility bill issued on the Renter’s name and no older than 60 days, that proofs your address.
                            </li>
                            <li>
                                Passport in case the renter is from outside the European Union.
                            </li>
                        </ul>
                        <p>
                            Driving licences issued outside the European Union, must be clearly identifiable as a driving licence; otherwise an International driving licence will be required. If your driving licence is not issues with Latin letters, you require also an International drivers licence.
                            <u> It is the driver’s responsibility to ensure that he/she has the appropriate driving licence for the countries he/she intends to travel to. </u>
                            If your driver’s licence is not from Europe, please contact us before you book and we will check if your licence can be accepted by our insurer.
                        </p>
                        <p>
                            All the above mentioned documents must be original; no copies are accepted. Alfresko Campers has the right to keep a photocopy of your documents for 1 year.
                        </p>
                        <p>
                            The vehicle can be driven only by the persons who are listed in the Rental Agreement are compliant with the requisites stated in Alfresko Campers’ Terms and Conditions. By the time of the online booking you are asked to choose the number of extra drivers. Alfresko Campers does not charge you for the first extra driver, following extra drivers are charged 30 EUR per extra driver per rental. Alfresko Campers allows maximum 4 drivers (the renter and 3 extra drivers).
                        </p>
                        <p>
                            All drivers of the vehicle must be present at the time of pick-up with their valid identification card, passport if from outside the EU, and driving licence for control and for photocopy. Extra drivers will not sign the Rental Agreement; therefore, it is the renter’s responsibility to make sure that all drivers are entirely aware of the content of the Rental Agreement, have read and accepted Alfresko Campers’ Terms and Conditions, and comply with all its requirements.
                        </p>
                        <p>
                            You are responsible of keeping the vehicle and its accessories protected and safe at all times. Also, you are fully responsible for not letting to drive the vehicle by an unauthorized person and not exceeding the maximum weight by overloading the vehicle.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"2.	Rental Duration "} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            The minimum rental period is of minimum 3 days in low season, minimum 4 days in middle season and minimum 5 days in high season. In middle and high season, in between two existing bookings, hirers shorter than 4 and 5 days may be available on request basis.
                        </p>
                        <p>
                            Low season: 1st April – 30th April & 1st October – 31st October.
                        </p>
                        <p>
                            Middle season: 1st May – 14th June & 1st September – 30th September
                        </p>
                        <p>
                            High season: 15th June – 31st August
                        </p>
                        <p>
                            The first day and the last day of the rental period are considered as full days of rental.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"3.	Rental price and payment"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            All rental prices are given in Euros (€) and transactions made in Euros. Alfresko Campers is not responsible for international banking fees, nor for exchange rate fluctuations and neither covers any difference result of the change of currency conversion rate between paying and refunding the security deposit. Please, make sure before initiating the payment that you have more than enough funds on your bank account as bank exchange rates may vary from bank to bank and currency conversion websites.
                        </p>
                        <p>
                            When you rent a vehicle from Alfresko Campers, you agree to pay Rental charges (3.1), Security deposit (3.2) and incurred fines, penalties and tolls (3.3).
                        </p>
                        <Heading style={{ paddingBottom: '20px' }} content={"3.1 Rental charges (vehicle, insurance, optional extras)"} type={"h4"} />
                        <p>
                            You will make your reservation on <a href="https://alfreskocampers.com"></a>alfreskocampers.com website. You will choose the vehicle type, pick-up and return dates and times (in between: Hire Period) and optional extras and send the booking request to Alfresko Campers. We will check availability and send you the payment instructions within 48 hours from the receipt of your request. The renter has 48 hours to complete the payment, otherwise the request will be cancelled and the vehicle will appear as available again for booking. Once payment has been completed successfully, Alfresko Campers will send you the Booking Confirmation. You can choose to complete the payment via PayPal on our website or by bank transfer.
                        </p>
                        <Heading style={{ paddingBottom: '20px' }} content={"3.2.	Security deposit"} type={"h4"} />
                        <p>
                            Alfresko Campers asks from the Renter 500 EUR or 150.000 HUF security deposit, which can be paid when you complete the full payment of your reservation through our website, or in cash on arrival. On the pick-up day you can only pay the security deposit in cash; accepted currencies are EUR and Hungarian Forint.
                        </p>
                        <p>
                            The security deposit will be returned to you after the vehicle drop-off, if there is no visible damage on the vehicle, no equipment is missing and you did not breach any point of this Terms and Conditions. If the payment of the security deposit was made in cash, the refund will be also in cash at the moment of drop-off, and in the same currency as it was paid in. If the payment of the security deposit was made via PayPal or bank transfer, the refund will be made after the drop-off via bank transfer, however the transaction might take up to 10 working days.
                        </p>
                        <p>
                            In the event of any accident or incident during your hire, you agree that Alfresko Campers takes and holds the security deposit amount, until a resolution has been decided by Alfresko Campers insurer. If a 3rd party is involved and is then proven to be fully liable by Alfresko Campers insurer, your security deposit will be returned. On the contrary, if you result to be liable of the incident or if the incident comes under the exclusions (see Exclusions in point 5. Insurance and Damage of this Terms and Conditions) then the security deposit stated in the Rental Agreement will be held by Alfresko Campers. If you result liable and the cost of the damage is higher than the security deposit retained by Alfresko Campers, you will be required to pay the difference.
                        </p>
                        <Heading style={{ paddingBottom: '20px' }} content={"3.3.	Fines, penalties, tolls"} type={"h4"} />
                        <p>
                            You are liable of paying all fines, penalties incurred during the rental period and tolls. The renter is responsible of paying the motorway tolls in Hungary and abroad. You must pay the appropriate authority any fines and costs if and when the authority demands this payment. If you refuse to, you will be responsible for paying Alfresko Campers the fine and also the incurred administration charges. You agree to pay all charges, including court costs incurred in relation to the vehicle during the Rental Period you used it.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"4.	Modification of the rental duration"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            Extension of the rental duration is only possible with Alfresko Campers’ prior agreement. If Alfresko Campers grants its consent to an extension of the rental duration, you have to pay the extra amount charged for the extension immediately on the online booking platform, following Alfresko Campers’ instructions. Once Alfresko Campers receives the price of the extra day(s), you will be sent a new Booking Confirmation stating the extended rental period and showing the new return date.
                        </p>
                        <p>
                            If you choose to alter the rental period after you received the Booking Confirmation, Alfresko Campers reserves the right to revise and amend the rates offered and to charge the additional time at the full daily hire rate.
                        </p>
                        <p>
                            If the vehicle is not available for the requested period of extension, it must be returned at the original time and date specified in the Booking Confirmation email, or in the Rental Agreement, if no extension was requested after the vehicle has been picked up and Rental Agreement signed. In case the vehicle is not returned on time, after 60 minutes, Alfresko Campers charges 100 EUR late fee <u>for each additional day</u> plus the cost of the daily rental <u>for each additional day</u> until the vehicle is returned, can treat the vehicle as stolen and report the loss to the authorities and can request the renter to cover the caused damages, including the loss of income of Alfresko Campers while the vehicle is being used for the unauthorized time.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"5.	Cancelation policy"} type={"h3"} />
                        <Heading content={"a.	Cancelation fee"} type={"h4"} />
                        <p style={{ marginBottom: 0 }}>
                            In case you would choose to cancel your reservation, Alfresko Campers reserves the right to charge you a cancellation fee that’s amount depends on when you notify Alfresko Campers. All notifications must be in written.
                        </p>
                        <ul>
                            <li>
                                -	Cancellations made more than 6 weeks (42 days) before the pick-up date, all payments will be refunded to you except 5% administration fee.
                            </li>
                            <li>
                                -	Cancellations made between 42 and 15 days prior to the pick-up date will be charged 50% of the total hire cost as a cancellation fee.
                            </li>
                            <li>
                                -	Cancellations made within 14 days of the pick up or ‘no shows’ will be charged 100% of the total hire cost as a cancellation fee.
                            </li>
                        </ul>
                        <p>
                            Security deposit, if paid in advance, together with the booking, is always returned after the booking has been cancelled, however Alfresko Campers retains 5% administration fee.
                        </p>
                        <Heading content={"b.	Late pick-up/early return/late return"} type={"h4"} />
                        <p>
                            Would you like to shorten the rental period on or after the pick-up day, for example by collecting the vehicle later than stated in the Booking Confirmation or by interrupting the rental period and/or returning the vehicle before the end date stated in the Rental Agreement, Alfresko Campers will not be able to refund you the cost of the unused days.
                        </p>
                        <p>
                            If you don’t return the vehicle maximum 60 minutes later than the date and time stated in the Rental Agreement or a later time posteriorly agreed by Alfresko Campers, Alfresko Campers has the right to charge you 100 EUR late fee <u>for each additional day</u> plus the cost of the daily rental <u>for each additional day</u> until the vehicle is returned. In this case, Alfresko Campers can use the security deposit paid by the Renter. Furthermore, you will be charged for any additional costs that Alfresko Campers incurs as a result of the vehicle not being returned on time.
                        </p>
                        <p>
                            In case of you arriving late to pick up the vehicle, please contact us as soon as you know about your delay. If you don’t inform Alfresko Campers about your delay and don’t agree in a new pick-up time, Alfresko Campers will consider a 14 hours’ delay as ‘no show’ and will extinguish your rental, cancel your Booking Confirmation and not refund you any money. In case of ‘no show’, the vehicle will appear as available online for the whole rental period you planned; ready to be booked again by another person.
                        </p>
                        <Heading content={"c.	Cancelation by Alfresko Campers"} type={"h4"} />
                        <p>
                            If Alfresko Campers is forced to cancel your booking due to any unforeseen reason (breakdown, accident, loss, late return by the previous renter, etc.), you will be refunded the amount that Alfresko Campers already received from you. Alfresko Campers can’t compensate you for any other loss you incur due to this cancellation.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"6.	Vehicle pick-up and return"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            Vehicle pick-up and return is at Alfresko Campers’ premises, if otherwise not stated. Collection of the vehicle is at the date and time confirmed on the Booking Confirmation.
                        </p>
                        <p>
                            You can arrive to collect the vehicle and drop it off every day between 2-7 pm.
                        </p>
                        <p>
                            You acknowledge and agree that the vehicle is delivered to you in good operating and roadworthy conditions, without any damage or defects (mechanical or otherwise) other than those noted on the Rental Agreement, which you also acknowledge accurately reflects the conditions and cleanliness of the vehicle at the time of pick-up.
                        </p>
                        <p>
                            You must return the vehicle in the same condition as it was at the time of the pick-up and documented in the Rental Agreement. You remain responsible of the vehicle, its condition and its equipment until the vehicle is returned, inspected by Alfresko Campers and the Return Agreement is signed by both parties (you and Alfresko Campers).
                        </p>
                        <p>
                            If any visible damage is caused to the vehicle, your security deposit might be retained until the Alfresko Campers insurer confirms the value of the damage.
                        </p>
                        <p>
                            Alfresko Campers can refuse to provide a vehicle to anyone who is, in the opinion of Alfresko Campers’ representative, unfit to drive or does not meet eligibility requirements or is abusive. In such circumstances no refund will be due.
                        </p>
                        <p>
                            You must return the vehicle to Alfresko Camper’s premises, if otherwise not stated, by the agreed return date and time on the Rental Agreement
                        </p>
                        <p>
                            If you don’t bring back the vehicle on time without prior consent of Alfresko Campers, you are breaking the conditions of the Rental Agreement. In this case Alfresko Campers may treat the vehicle as stolen and report it to the authorities.
                        </p>
                        <p>
                            The vehicle must be returned with the same amount of fuel as on pick-up and documented in the Rental Agreement, otherwise you will be charged 100 EUR penalty.
                        </p>
                        <p>
                            Alfresko Campers may retake possession of the vehicle without prior demand and at your expense if you breach the Rental Agreement, or if the vehicle is illegally parked, used in violation of any law or is, in Alfresko Camper’s opinion, apparently abandoned. If possession is retaken, any unexpired days of the hire period will be extinguished without any refund to you, and any recovery, towing, and reparation fees and penalties charged to you.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"7.	Cleaning"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            The vehicle is handed over clean and must be returned in a clean and presentable condition for the next hire. You will be charged a minimum of 100 EUR cleaning fee, if the vehicle’s interior (no garbage, sand, mud, and other dirt) and equipment (including gas cooker, kitchenware clean & fridge emptied and cleaned) are not clean. Only if the renter adds the 20 EUR cleaning fee to the booking, Alfresko Campers takes over the cleaning from the renter.
                        </p>
                        <p>
                            It is AT ALL TIMES strictly forbidden to smoke inside all Alfresko Campers’ vehicles and rooftop tents! If, in Alfresko Campers‘ opinion, you have been smoking in the vehicle or tent, you will be charged 300 EUR penalty above the value of the damage caused.
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"8.	Insurance and damage "} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            The insurance of Alfresko Campers vehicles covers incidents occurred in the full territory of the following countries:
                        </p>
                        <p>
                            Albania, Andorra, Austria, Belgium, Bosnia Herzegovina, Bulgaria, Cyprus, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Iceland, Kosovo, Latvia, Liechtenstein, Lithuania, Luxemburg, Macedonia, Malta, Monaco, Montenegro, Netherlands, Norway, Poland, Portugal, Rumania, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, United Kingdom, Vatican.
                        </p>
                        <p>
                            All Alfresko Campers are insured with obligatory third party Insurance and extra Collision Insurance with an excess of 100 000 Hungarian Forints. Insurance covers damage caused on other vehicles only if the driver complies with the obligations stated in this Terms and Conditions and the damage is not excluded by Alfresko Campers’ insurer.
                        </p>
                        <p>
                            <b>Exclusions:</b> The below listed damages are excluded from Alfresko Campers’ insurance and the renter acknowledges that is responsible for all costs incurred:
                        </p>
                        <ul>
                            <li>
                                Not identified drivers
                            </li>
                            <li>
                                More than permitted passengers
                            </li>
                            <li>
                                Damage occurred outside of agreed area of use
                            </li>
                            <li>
                                Participating on speed competition or training
                            </li>
                            <li>
                                Driving in territories affected by war, areas of demonstration and if damage caused on the vehicle is related to terror attack.
                            </li>
                            <li>
                                Driving without a valid driver’s licence
                            </li>
                            <li>
                                Driving under effects of alcohol and/or drugs or any substance that reduces driving ability
                            </li>
                            <li>
                                Any damage caused by careless or negligent driving or by not respecting the current road regulations and rules
                            </li>
                            <li>
                                Driving on unsealed roads
                            </li>
                            <li>
                                Driving without fastened seat belts
                            </li>
                            <li>
                                Falling asleep at the wheel
                            </li>
                            <li>
                                Damage in the interior of the vehicle
                            </li>
                            <li>
                                Damage in the interior of the vehicle
                            </li>
                            <li>
                                Stationary incidents
                            </li>
                            <li>
                                Accident with animals
                            </li>
                            <li>
                                Roof/Underbody coverage
                            </li>
                            <li>
                                Theft/Break-ins
                            </li>
                            <li>
                                Water damage
                            </li>
                            <li>
                                Closed-in, lost and broken keys
                            </li>
                            <li>
                                Incorrect fuel
                            </li>
                        </ul>
                        <p>
                            In the event that Alfresko Campers insurer, for any reason, refuses to pay the damage, the renter is obliged to pay the cost of the caused damage.
                        </p>
                        <p>
                            In case of an accident or damage caused, you must report it immediately but to the local authorities and as soon as possible, but within 8 hours to Alfresko Campers. The Renter must do everything possible in order to ascertain all details of the incident and obtain the most accurate information possible about the involved contraries (e.g. plate number, name, address, phone number, email address of owner/driver and the witnesses, sketch of the accident, photographs, etc.). The Renter has to hand over to Alfresko Campers all documentation, including the documentation prepared by the police, the accident report, sketch of the accident and the damages on the vehicle, all signed by all parties involved.
                        </p>
                        <p>
                            If details of the contrary vehicles and drivers are not identified and reported, the hirer will be liable for the full cost of the occurred damage (repair, recovery, etc.)
                        </p>
                    </Section>
                    <Section style={{ paddingBottom: 0 }}>
                        <Heading style={{ paddingBottom: '20px' }} content={"9.	Roadside assistance"} type={"h3"} />
                        <p style={{ marginBottom: 0 }}>
                            Alfresko Campers offers all vehicles with 24/7 Roadside Assistance in all European countries covered by its insurer. The following incidents are not covered by Alfresko Campers roadside assistance and its cost needs to be paid by the hirer:
                        </p>
                        <ul>
                            <li>
                                Damage caused by negligence or human error
                            </li>
                            <li>
                                Any recovery from unsealed roads
                            </li>
                            <li>
                                Wrong Fuel
                            </li>
                            <li>
                                Vehicle run out of fuel
                            </li>
                            <li>
                                Tyre changes
                            </li>
                            <li>
                                Lost, damaged or locked-in keys
                            </li>
                            <li>
                                Discharged batteries caused by incorrect usage
                            </li>
                        </ul>
                        <p>
                            In case of any incident (breakdown or accident), you agree to report it Alfresko Campers forthwith. Alfresko Campers will arrange the roadside assistance for you. In case the tow truck driver cannot fix the problem, the vehicle is towed to the nearest repair workshop. The reparation can only start after Alfresko Camper authorizes it. The expenses of any repair undertaken without the authorisation of Alfresko Campers will not be reimbursed to you, furthermore the renter is liable to pay any damage that later occurs to the vehicle due to this unauthorized repair.
                        </p>
                        <p>
                            Fees for excess towing might be paid by the hirer.
                        </p>
                        <p>
                            If the mechanical workshop confirms to Alfresko Campers that the breakdown is no fault of the hirer, and:
                        </p>
                        <ul>
                            <li>
                                If the vehicle will be repaired the same or the next day, you can request the reimbursement of the price of that day rental.
                            </li>
                            <li>
                                In the unlikely event that the vehicle cannot be fixed and the hire needs to be cancelled, Alfresko Campers will refund the remaining days hire and assist you in reaching the nearest onward travel point.
                            </li>
                        </ul>
                        <p>
                            You will be reimbursed the cost of the mechanical repair if you supply Alfresko Campers with the original receipt and contact details of the mechanical workshop.
                        </p>
                        <p>
                            All vehicles of Alfresko Campers are regularly checked and handed over with full fuel tank, with the required lubricant and liquid levels and with the necessary equipment regulated by law. However, please note that we cannot guarantee the vehicles and either cannot guarantee a replacement car. Alfresko Campers cannot compensate you for any other expense you might incur due to a breakdown or accident.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"10.	Theft and loss"} type={"h3"} />
                        <p>
                            Alfresko Campers’ insurer does NOT cover theft or loss of the vehicle! By signing the Rental Agreement, you agree to take good care of Alfresko Campers’ vehicle, its accessories and key, to protect it from damage and loss, and to carry all the documents and key of the vehicle on you at all times.
                        </p>
                        <p>
                            The renter agrees to protect the vehicle against possible break-in and theft; therefore, to close it any time outside of use, to not to leave valuable objects to the view, to leave the vehicle as much as possible in secure and watched parking and to take extra precaution any time leaving it alone.
                        </p>
                        <p>
                            In the event of the vehicle being stolen or lost during the hire period, the Rental Agreement will be terminated immediately and Alfresko Campers will demand the full cost of the vehicle from the renter. You will not be refunded the remaining rental days.
                        </p>
                        <p>
                            In the case of loss or theft of the licence plate or traffic licence, the renter must pay to Alfresko Campers the cost of its replacement.
                        </p>
                        <p>
                            Loss or theft of keys will result in a charge of 200 EUR plus any courier/postage costs. Alfresko Campers will post you replacement keys but is not in the position of reimbursing any loss of hire days or refund you any additional costs incurred due to your negligence.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"11.	Limited mileage"} type={"h3"} />
                        <p>
                            Alfresko Campers limits the daily distance you can drive by maximum 300 km-s per day. You will be charged 0,30 EUR for each additional km-s made.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"12.	Use of the vehicle: Maintenance and responsibility"} type={"h3"} />
                        <p>
                            By signing the Rental Agreement, you agree to take good care of Alfresko Campers’ vehicle, its accessories and key. You must always lock the vehicle when not using it, park it in secured parking place when leaving it unattended, protect it against bad weather, make sure that you use the correct fuel, check water and oil levels frequently, and control tire pressure and if all lights are working.
                        </p>
                        <p>
                            Alfresko Campers will hand over the vehicle with the appropriate oil and water levels, but during the rental period it is your responsibility to maintain the correct fluid levels. Please check it frequently! Alfresko Campers will reimburse you the engine oil purchased if you supply us the original receipt. Failure to maintain appropriate fluid levels may result in engine damage, and means a breach of your obligations under the Rental Agreement. The damage occurred to the engine will be charged to you if you are discovered to be negligent.
                        </p>
                        <p>
                            The vehicle is provided to you with a full set of tyres in good condition. In the event that any of them is damaged for any reason other than normal wear and tear, you are obliged to report to Alfresko Campers and after its consent to replace it at your own expense with a tyre of the same dimensions, type and wear characteristics.
                        </p>
                        <p>
                            You must stop the vehicle if any of the instrument panel warning lights are on indicating mechanical problem, or if you become aware of anything else which may indicate a mechanical problem of the vehicle. You must contact us immediately if there is any issue with the vehicle.
                        </p>
                        <p>
                            You will be liable for any offence committed during the rental period which relates in any way to your use of the vehicle. Upon the request of the Police or any official body, Alfresko Campers may have to transfer your personal data.
                        </p>
                        <p>
                            Renter acknowledges that it is forbidden to use the vehicle in the following cases:
                        </p>
                        <ol>
                            <li>
                                In any manner which would result in the breach of the Rental Agreement
                            </li>
                            <li>
                                For racing, pace making, rallying, speed testing, driving tuition, test driving
                            </li>
                            <li>
                                Towing any vehicle, trailer or other object
                            </li>
                            <li>
                                For the purpose of transporting goods other than the ones reasonably expected of a leisure rental
                            </li>
                            <li>
                                For transporting any illegal and dangerous substances, e.g. explosives, drugs, weapons, etc.
                            </li>
                            <li>
                                In any manner violating customs rules and regulations, and for any illegal transportation
                            </li>
                            <li>
                                For transportation of persons, objects and money for remuneration
                            </li>
                            <li>
                                On unsealed /dirt roads
                            </li>
                            <li>
                                In water: submersion in water, contact with salt water, driving through flooded areas and beach driving are forbidden
                            </li>
                            <li>
                                For carrying more passengers than what is permitted by law.
                            </li>
                            <li>
                                Outside of the permitted European countries by a Alfresko Camper’s insurer
                            </li>
                            <li>
                                Sell, sub-rent, lend or mortgage the vehicle or any of its parts
                            </li>
                            <li>
                                Give anyone any legal rights over the vehicle
                            </li>
                            <li>
                                Continue driving in case of lack of liquids e.g. engine oil, cooling water, etc.
                            </li>
                            <li>
                                Driving under effects of alcohol and/or drugs or any substance that reduces driving ability
                            </li>
                        </ol>
                        <p>
                            Furthermore, you are not allowed to install accessories and stickers, or to do any alterations or additions to Alfresko Camper’s vehicle.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"IMPORTANT NOTE FOR THOSE TRAVELLING IN <b>CROATIA</b>"} type={"h3"} />
                        <p>
                            <b>Law on the Host Activities in Croatia</b>, dated 01/05/2009, <b>Article 27 </b> states that camping (including a simple overnight stay in the vehicle, or parking it outside each dedicated parking space) outside the camps in Croatia is an offense punishable by fine. In the case of such unauthorized camping on private land (land that is not owned by the state, municipal or city), the inspector may decide for an immediate sealing of the vehicle for a period of 60 days (<b>Article 43</b> of the same law). Unauthorized unsealing of the vehicle is an offense.
                        </p>
                        <p>
                            In case of law violation, the renter is fully liable for all costs generated (fees, penalties and transportation of the vehicle after the sealing period expires, etc.) including the loss of income of Alfresko Campers while the vehicle remains sealed, due to the unavailability. The Renter has to pay to Alfresko Campers the rental fee during the 60 days of sealing.  The Renter is also responsible for any damage to the vehicle during the period of sealing due to vandalism, burglary, theft, intrusion of water, rodents or any other damage that may occur to Alfresko Campers as a result of your failure to comply with the law.
                        </p>
                        <p>
                            By signing the Rental Agreement, you agree to comply with the above mentioned law.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"13.	Optional Extras"} type={"h3"} />
                        <p>
                            When completing the online booking you can add optional extras for a certain cost to the basic accessories of the vehicle. The total rental price will include the cost of the optional extras.
                        </p>
                        <span>
                            Currently offered optional extras by Alfresko Campers are:
                        </span>
                        <ul>
                            <li>
                                Child seat
                            </li>
                            <li>
                                Compact barbecue
                            </li>
                            <li>
                                Extra gas cartridge
                            </li>
                            <li>
                                Bicycle
                            </li>
                            <li>
                                Hammock
                            </li>
                            <li>
                                Tent
                            </li>
                            <li>
                                Sleeping bag
                            </li>
                            <li>
                                Head lamp
                            </li>
                            <li>
                                Towel
                            </li>
                            <li>
                                Electric heater
                            </li>
                            <li>
                                Solar shower
                            </li>
                        </ul>
                        <p>
                            If you would like to modify the optional extras after you received the Booking Confirmation, please notify Alfresko Campers as soon as possible in writing. The renter can request the modification and cancellation of the optional extras until 14 days before the pick-up date. In case of cancellation of the extra equipment, its cost minus 5% administration charge will be returned to you by bank transfer. You are not eligible for refund of the booked optional extra, within 14 days to the pick-up date, on the pick-up day and in case of early drop-off.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"14.	Equipment"} type={"h3"} />
                        <p>
                            All equipment (including optional extras) provided with the vehicle are checked with you prior to despatch. It is your responsibility to notify Alfresko Campers about any spotted damage or defect. If no such notification is given, then it will be presumed that the equipment is in good working order and fit for its purpose.
                        </p>
                        <p>
                            You will be showed the correct use of the vehicle’s accessories and equipment, and you should follow those instructions carefully and keep the equipment in good condition. The hirer will be fully responsible for any loss or damage to the equipment, and must pay the replacement or reparation cost of the stolen, lost and damaged accessories and equipment if the misuse by the renter is proofed. In case of doubt/question about the use of the vehicles’ accessories, please contact Alfresko Campers.
                        </p>
                        <p>
                            Replacement charges of Alfresko Campers equipment and accessories. Only applies to the equipment listed in your Rental Agreement.
                        </p>
                        <ul>
                            <li>
                                Fridge: 300 EUR
                            </li>
                            <li>
                                Gas cooker: 30 EUR
                            </li>
                            <li>
                                Compact BBQ: 30 EUR
                            </li>
                            <li>
                                Child seat: 150 EUR
                            </li>
                            <li>
                                Duvet, pillow, bed sheets: 20 EUR each
                            </li>
                            <li>
                                Rooftop tent: 1000 EUR
                            </li>
                            <li>
                                Tent: 100 EUR
                            </li>
                            <li>
                                Sleeping bag: 100 EUR
                            </li>
                            <li>
                                Bicycle: 150 EUR
                            </li>
                            <li>
                                Folding bike: 150 EUR
                            </li>
                            <li>
                                Hammock: 20 EUR
                            </li>
                            <li>
                                Head lamp: 20 EUR
                            </li>
                            <li>
                                Towel: 10 EUR
                            </li>
                            <li>
                                Camping adapter: 20 EUR
                            </li>
                            <li>
                                Camping table: 20 EUR
                            </li>
                            <li>
                                Camping chairs: 15 EUR
                            </li>
                            <li>
                                Electric heater: 30 EUR
                            </li>
                            <li>
                                220 V extension cord: 20 EUR
                            </li>
                            <li>
                                Fist Aid kit: 15 EUR
                            </li>
                            <li>
                                Warning triangle: 10 EUR
                            </li>
                            <li>
                                Reflective west: 10 EUR
                            </li>
                            <li>
                                Jack: 50 EUR
                            </li>
                            <li>
                                Jumper cable: 20 EUR
                            </li>
                            <li>
                                Fire extinguisher: 15 EUR
                            </li>
                            <li>
                                Traffic licence: 200 EUR
                            </li>
                            <li>
                                Car key: 200 EUR
                            </li>
                            <li>
                                Car license plate: 100 EUR
                            </li>
                        </ul>
                        <p>
                            In the event of any failure of the equipment the hirer shall immediately notify Alfresko Campers.
                        </p>
                        <p>
                            You agree not to claim Alfresko Campers for any loss or damage to your personals belongings weather is due to Alfresko Campers negligence or not.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"15.	Liability & loss"} type={"h3"} />
                        <p>
                            By accepting Terms and Conditions, you acknowledge that Alfresko Campers has no liability in respect of any injury, loss or damage arising from the use of the vehicle, nor shall it be liable for any indirect loss or damage which was not foreseeable by both parties.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"16.	Pets"} type={"h3"} />
                        <p>
                            You can bring your pet with you for an additional fee of 50 EUR per pet/rental. It is the Renter’s responsibility to follow the rules and restrictions on how to travel with a pet in the countries you intend to travel to, for example necessary equipment, valid passport, vaccination booklet. The pet allowed to travel with you shall be kept under control at all times and shall never left unsupervised in the vehicle. Alfresko Campers is not liable for the physical integrity or loss of your pet.
                        </p>
                        <p>
                            If it is discovered that a pet has travelled in the vehicle without Alfresko Campers prior consent and/or if the vehicle is returned in an unclean state after a pet has travelled in the vehicle, you will be charged a 200 EUR fine.
                        </p>
                    </Section>
                    <Section>
                        <Heading style={{ paddingBottom: '20px' }} content={"17.	Complaints"} type={"h3"} />
                        <p>
                            In case you disagree with us and would like to place a complaint, please do it in writing with exact details and relevant evidence no later than 10 business after you have dropped off the vehicle. Alfresko Campers will provide you a response within 30 working days of receiving your complaint.
                        </p>
                        <p>
                            If, upon receiving our response, you are still dissatisfied and have further queries, you must notify us in writing within 5 working days of receiving our response.
                        </p>
                    </Section>
                </div>
            </Layout>
        )
    }
}