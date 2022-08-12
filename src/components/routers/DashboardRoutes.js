import React from 'react';
import {Navbar} from '../../components/ui/NavBar'
import {Routes, Route} from 'react-router-dom';
import {MarvelScreen} from '../../components/marvel/MarvelScreen';
import {HeroScreen} from '../../components/heroes/HeroScreen';
import {DcScreen} from '../../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Routes>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/heroe/:heroeId" element={<HeroScreen />} />
                    <Route path="/dc" element={<DcScreen />} />


                    <Route path="*" element={<MarvelScreen/>}/>
                </Routes>
            </div>
        </>
    )
}
