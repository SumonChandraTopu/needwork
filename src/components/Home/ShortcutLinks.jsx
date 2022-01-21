import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const ShortcutLinks = () => {
    return (
        <div className=''>
             <div className="d-flex shortcut">
             <Link to="#" className="marketing  px-2  text-dark">
                     <h3 className='links-title'>Search Engine <br /> Optimisation  <span className='shortcut-span'>02</span></h3>
                     
                 </Link>
                 <Link to="#" className="seo  px-2  text-dark">
                     <h3 className='links-title'>Search Engine <br /> Optimisation  <span className='shortcut-span'>02</span></h3>
                     
                 </Link>
                 <Link to="#" className="web  px-2  text-dark">
                     <h3 className='links-title'>Web Design & <br /> Development <span className='shortcut-span'>03</span></h3>
                     
                 </Link>
                 <Link to="#" className="graphic  px-2  text-dark">
                     <h3 className='links-title'>Graphic Design <span className='shortcut-span'>04</span></h3>
                     
                 </Link>
                
             </div>
        </div>
    );
};

export default ShortcutLinks;