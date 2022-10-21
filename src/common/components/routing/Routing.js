import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "../../../main/Main";
import {Skills} from "../../../skills/Skills";
import {Projects} from "../../../projects/Projects";
import {Contacts} from "../../../contacts/Contacts";


export const Routing = () => {
    return (<div>
        <Routes>
            <Route path="/main" element={<Main/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="*" element={<Navigate to="/main"/>}/>
        </Routes>
    </div>);
};