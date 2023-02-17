import Header from '../Header/Header';

const Layout = ({children}: any) => {
    return (        
        <div className="bg-gray-200 relative">
            <Header/>
            {children}            
        </div>        
    )
};

export default Layout;