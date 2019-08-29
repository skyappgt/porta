import React from 'react';
//import { hot } from 'react-hot-loader';

import Main from '../components/Main';
import Side from '../components/Side';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experiencia from '../components/Experiencia';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';


import useGetinfo from '../hooks/useGetinfo';

const App = () => {
    const datos = useGetinfo();
    console.log(datos);
    return datos.length == 0 ? <h1>Cargando..</h1> : (
        <Main>
            <Side>
                <About 
                 avatar = {datos.avatar}
                 name = {datos.name}
                 profession = {datos.profession}
                 bio = {datos.bio}
                 address = {datos.address}
                 social = {datos.social}
                />
            </Side>
            <Info>
                <Education 
                    datos = {datos.education}
                />
                <Experiencia 
                    datos = {datos.experience}
                />
                <Certificate 
                    datos = {datos.certificate}
                />
                <Skills 
                    datos = {datos.skills}
                />
            </Info>
        </Main>
    );
 
};


export default App;

