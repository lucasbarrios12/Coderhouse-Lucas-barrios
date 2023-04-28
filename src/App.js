
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components

import Header from "./components/Header/Header";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer"


//Context
import { ItemsProvider } from "./context/ItemsContext";
//Pages
import Inicio from "./Pages/inicio/Inicio";
import About from "./Pages/About/About";
import Generos from "./Pages/genero/Generos";
import Cart from "./Pages/Cart/Cart";
import Comprafinal from "./Pages/Compra/Comprafinal";
import Contacto from "./Pages/Contacto/Contacto";

//firebase

// import { db } from "./components/Firebase/FirebaseConfig";
// import { collection, query, where, getDocs } from "firebase/firestore";


const App = () => {
  // const [peliculas, SetPeliculas] = useState([])

  // const q = query(collection(db, "peliculas"))

  // useEffect(() => {
  //   const getPeliculas = async() => {
  //     const querySnapshot = await getDocs(q);
  //     const docs = [];
  //     querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     //console.log(doc.id, " => ", doc.data());
  //     docs.push({...doc.data(), id: doc.id})
  //   });
  //   console.log(docs)
  // };
  // getPeliculas()


  // }, [])
    return(
      <ItemsProvider>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/about" element={<About />} />
              <Route path="/details/:id" element={<ItemDetailContainer />} />
              <Route path="/genero/:genero" element={<Generos />} />
              <Route path="/comprafinal" element={<Comprafinal />} /> 
              <Route path="/cart" element={<Cart/>} />

            </Routes>
          </div>
        </Router>
      </ItemsProvider>
      
    )
};


export default App;
