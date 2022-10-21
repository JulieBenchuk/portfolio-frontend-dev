import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Description} from "../../../description/Description";
import {Skills} from "../../../skills/Skills";
import {Projects} from "../../../projects/Projects";
import {Contacts} from "../../../contacts/Contacts";

export const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/description" element={<Description/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="*" element={<Navigate to="/description"/>}/>
            </Routes>
        </div>
    );
};