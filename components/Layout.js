import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto my-10">{children}</main>
      <Footer />
    </>
  );
}
