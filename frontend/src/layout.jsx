import { Outlet } from "react-router-dom";
import  Header from "./component/header"
import Footer from "./component/footer"

const Layout=()=>{
    return(
        <>
       <Header/>
       <Outlet/>
       <Footer/> 
        </>
    )
}
export default Layout;