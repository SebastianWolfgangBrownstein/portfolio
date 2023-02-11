import { HTMLAttributes, ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'

export const Layout = ({ children }) => {
    return (
        <body className="">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </body>
        
    );
};

export default Layout;
