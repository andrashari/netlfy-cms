import React, { Component } from 'react';

import colors from '../../../assets/theme/colors';
import layout from './../../../assets/theme/layout';

import Heading from '../../../components/Heading';
import Gallery from './../../../components/imageRepresentation/Gallery';
import { HeroImage } from './../../../components/imageRepresentation/HeroImage';

export default class InspirationPost extends Component {

    images = [
        { src: 'https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?dpr=1&auto=format&crop=faces&fit=crop&w=310&h=310', orientation: 'square' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
        { src: 'https://images.unsplash.com/photo-1471079502516-250c19af6928?dpr=1&auto=format&crop=faces&fit=crop&w=240&h=150', orientation: 'landscape' },
    ]

    style = {
        image: {
            margin: 'auto',
            display: 'flex',
        }
    }

    render() {
        return (
            <div style={{ background: colors.lightGrey }}>
                <div style={layout.container}>
                    <HeroImage heroUrl={"/img/sunsetherowide.jpg"} />
                    <Heading content={"LILLA & PABLO (15 DAYS AROUND THE BALKAN)"} type={"h1"} style={"normal"} />
                    <Gallery images={this.images}></Gallery>
                    <p>
                        La escena en la que se establece la portada es casi tan emocionante como aquel regalo de Gabo. Estaban Toni
                        y Beatriz con la autora de El amante ante una mesa llena de fotografías que la Duras había puesto allí para que
                        fuera elegida la que sería adecuada para la cubierta. “Era un libro duramente autobiográfico, requería una
                        fotografía suya”. Y de pronto Beatriz de Moura ve asomar lo que parecía un retrato de la joven Duras, de la
                        época en que sucede esa tremenda historia de amor. “Su cara se iluminó. La foto era de aquella cara suya, era
                        ella verdaderamente, una niña atenta y temerosa del mundo. '¿Está dispuesta a poner su cara en la portada?',
                        le dije. '¿Y la de quién si no?', me dijo. Y entonces nos hizo levantar para que fuéramos a la calle a comer”.
                    </p>
                    <p>
                        La escena en la que se establece la portada es casi tan emocionante como aquel regalo de Gabo. Estaban Toni
                        y Beatriz con la autora de El amante ante una mesa llena de fotografías que la Duras había puesto allí para que
                        fuera elegida la que sería adecuada para la cubierta. “Era un libro duramente autobiográfico, requería una
                        fotografía suya”. Y de pronto Beatriz de Moura ve asomar lo que parecía un retrato de la joven Duras, de la
                        época en que sucede esa tremenda historia de amor. “Su cara se iluminó. La foto era de aquella cara suya, era
                        ella verdaderamente, una niña atenta y temerosa del mundo. '¿Está dispuesta a poner su cara en la portada?',
                        le dije. '¿Y la de quién si no?', me dijo. Y entonces nos hizo levantar para que fuéramos a la calle a comer”.
                    </p>
                    <p>
                        La escena en la que se establece la portada es casi tan emocionante como aquel regalo de Gabo. Estaban Toni
                        y Beatriz con la autora de El amante ante una mesa llena de fotografías que la Duras había puesto allí para que
                        fuera elegida la que sería adecuada para la cubierta. “Era un libro duramente autobiográfico, requería una
                        fotografía suya”. Y de pronto Beatriz de Moura ve asomar lo que parecía un retrato de la joven Duras, de la
                        época en que sucede esa tremenda historia de amor. “Su cara se iluminó. La foto era de aquella cara suya, era
                        ella verdaderamente, una niña atenta y temerosa del mundo. '¿Está dispuesta a poner su cara en la portada?',
                        le dije. '¿Y la de quién si no?', me dijo. Y entonces nos hizo levantar para que fuéramos a la calle a comer”.
                        “Era un libro duramente autobiográfico, requería una
                        fotografía suya”. Y de pronto Beatriz de Moura ve asomar lo que parecía un retrato de la joven Duras, de la
                        época en que sucede esa tremenda historia de amor. “Su cara se iluminó. La foto era de aquella cara suya, era
                        ella verdaderamente, una niña atenta y temerosa del mundo. '¿Está dispuesta a poner su cara en la portada?',
                        le dije. '¿Y la de quién si no?', me dijo. Y entonces nos hizo levantar para que fuéramos a la calle a comer”.
                    </p>

                    <img src="https://placehold.it/640x480" alt="" style={this.style.image} />

                    <p>
                        La escena en la que se establece la portada es casi tan emocionante como aquel regalo de Gabo. Estaban Toni
                        y Beatriz con la autora de El amante ante una mesa llena de fotografías que la Duras había puesto allí para que
                        fuera elegida la que sería adecuada para la cubierta. “Era un libro duramente autobiográfico, requería una
                        fotografía suya”. Y de pronto Beatriz de Moura ve asomar lo que parecía un retrato de la joven Duras, de la
                        época en que sucede esa tremenda historia de amor. “Su cara se iluminó. La foto era de aquella cara suya, era
                        ella verdaderamente, una niña atenta y temerosa del mundo. '¿Está dispuesta a poner su cara en la portada?',
                        le dije. '¿Y la de quién si no?', me dijo. Y entonces nos hizo levantar para que fuéramos a la calle a comer”.
                    </p>

                    <p>
                        La escena en la que se establece la portada es casi tan emocionante como aquel regalo de Gabo. Estaban Toni
                        y Beatriz con la autora de El amante ante una mesa llena de fotografías que la Duras había puesto allí para que
                        fuera elegida la que sería adecuada para la cubierta. “Era un libro duramente autobiográfico, requería una
                        fotografía suya”. Y de pronto Beatriz de Moura ve asomar lo que parecía un retrato de la joven Duras, de la
                        época en que sucede esa tremenda historia de amor. “Su cara se iluminó. La foto era de aquella cara suya, era
                        ella verdaderamente, una niña atenta y temerosa del mundo. '¿Está dispuesta a poner su cara en la portada?',
                        le dije. '¿Y la de quién si no?', me dijo. Y entonces nos hizo levantar para que fuéramos a la calle a comer”.
                    </p>
                </div>
            </div >
        )
    }
}