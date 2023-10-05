import DashboardSiteBar from '@/Components/DashboardSitebar/DashboardSiteBar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex gap-5 container mx-auto'>
            <DashboardSiteBar />
            {children}
        </div>
    );
};

export default DashboardLayout;