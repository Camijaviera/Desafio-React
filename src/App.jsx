import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
const App=()=>{
  
  return(
    <div className="d-flex flex-column justify-content-center align-items-center gap-2">
    
    <Header title="Mi Galería de imágenes con React"/>
    <Card url="https://www.petclic.es/wikipets/wp-content/uploads/sites/default/files/library/blood_hound_-_razas_de_perros.jpg" title="Blood Hound" description="Fotografía de perro Blood Hound"/>
    <Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBVUMqqx_12HFV8iKe7PmVghRBLbFnFsyeA&usqp=CAU" title="Pastor Alemán" description="Fotografía cachorro de Pastor Alemán"/>
    <Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7Kc-gj_OQ-RNwz2UxUSCVFICajjWK4fEag&usqp=CAU" title="Basset Hound" description="Fotografía de perro Basset Hound"/>
    <Footer />
    </div>
  )
};

export default App;