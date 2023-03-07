import { HTMLAttributes, ReactNode } from 'react';
import Header from './Header'


export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
        
    );
};

export default Layout;
