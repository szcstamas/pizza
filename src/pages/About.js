import React from 'react'
import AboutBackground from '../assets/multiplePizzas.jpeg'
import '../styles/About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='about'>

            <div className="aboutTop" style={{ backgroundImage: `url(${AboutBackground})` }} ></div>
            <div className="aboutContainer">
                <h1>Rólunk</h1>
                <p>
                    <i>A Webler Pizzéria 2008-ban nyitotta meg kapuit Budapest központjában.</i>
                </p>
                <p>
                    A magyar és olasz konyha receptjeire és hagyományaira építkezünk. Ételeinket – mind helyben fogyasztás, mind házhoz szállítás esetén – a rendelés felvételét követően kezdjük el készíteni, és frissen, melegen szállítjuk ki, ill. szolgáljuk fel.</p>
                <p>
                    Pizzáinkat olasz receptek alapján háziasan, helyben dagasztott tésztából sütjük. A szakácsok az Önök szeme láttára készítik el a kiválasztott pizzát. Ha alapanyagaink engedik, elkészítjük az ízlésüknek megfelelőt is.</p>
                <p>
                    Legfontosabb célunk a színvonalas vendéglátás, a minőségi pizza elkészítésétől a gyors házhoz szállításig, rendkívül kedvező áron, folyamatosan megújuló kínálat mellett. Pizzáinkat kizárólag saját készítésű, minőségi alapanyagokból és egyedi recept alapján készítjük. A tészta nem tartalmaz tojást illetve tejterméket. Sok helyen elterjedt növényi eredetű sajtok helyett, jó minőségű Gouda sajtot használunk amely még ízesebbé teszi a pizzáinkat. Paradicsomos alapunkat is kizárólag kiváló minőségű paradicsomsűrítményből, egyedi fűszerezéssel tesszük ízletesebbé. Vastag vagy Vékony ? Az igazi Olasz pizza legfőbb jellemzője, hogy a tészta mindig vékony. Nem ritka hogy a feltét(ek) vastagabb(ak) a tésztánál. Nálunk megtalálhatjátok kedvenc pizzáitokat normál illetve vékony tésztával egyaránt.</p>
            </div>
        </motion.div>
    )
}

export default About
