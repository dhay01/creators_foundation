// import React from "react";
// import "./assets/css/App.css"
// import {Layout} from "antd";
//
// import Navbar from "./components/navbar/navbar";
// import Hero from "./components/hero/hero"
// import Newscards from "./components/newsCards/newscards"
// import Sponsers from "./components/sponsers/sponsers"
// import Abouthome from "./components/abouthome/about_home"
// import Footer from "./components/footer/footer";
// import Homepage from "./pages/HomePage"
// function App() {
//     return (
//         <Layout className="mainLayout">
//             <div className="App">
//                 <Navbar/>
//                 <>
//                     <Hero/>
//                 </>
//                 <>
//                     <Newscards/>
//                 </>
//                 <>
//                     <Sponsers/>
//                 </>
//                 <>
//                     <Abouthome/>
//                 </>
//
//                     <Footer/>
//
//
//
//             </div>
//         </Layout>
//
//     );
// }
//
// export default App;
import React from 'react';
import AppRouter from './AppRouter';

function App() {
    return <AppRouter />;
}

export default App;
