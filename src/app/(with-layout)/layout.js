import Navbar from '@/Components/Navbar/Navbar';
import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer className='text-center py-5'>
                <small >This is common Footer for all page @sihab uddin molla</small>
            </footer>
        </div>
    );
};

export default WithLayout;