import Footer from "./Footer";
import NavigationBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <NavigationBar />
            {children}
            <Footer />
        </>
    );
}