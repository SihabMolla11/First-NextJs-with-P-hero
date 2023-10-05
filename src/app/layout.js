import { Poppins } from 'next/font/google';
import './globals.css';
;
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700", "900"],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'First Next Js Project',
  description: 'This is My First Next Js Project With P-Hero',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
