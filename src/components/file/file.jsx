import Header from '../header/header.jsx';
import Detail from '../detail/detail.jsx';
import Footer from '../footer/footer.jsx';
import { Suspense } from 'react';


function File() {
  return (
    <div>
      <Header />
      <Detail />
      <Footer />
    </div>
  );
}

export default File;