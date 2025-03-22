import "./globals.css";
import Header from "./_component/header/page";
import Footer from "./_component/footer/page";

export const metadata = {
  title: "Groove to move",
  description: "Patna best dance studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/stylesheet/style.css" />
      </head>
      <body
        className="home page-template page-template-elementor_canvas page page-id-1010 ehf-template-hello-elementor ehf-stylesheet-hello-elementor jkit-color-scheme elementor-default elementor-template-canvas elementor-kit-120 elementor-page elementor-page-1010 e--ua-blink e--ua-chrome e--ua-webkit"
      >
        {/* <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/img.jpg')",
          }}
        >
          
        </div> */}

        {/* <Header /> */}
          {children}
          <Footer />


      </body>
    </html>
  );
}
