import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Modern Marketing Associates | Hyderabad Building Materials Distributor",
  description:
    "Modern Marketing Associates delivers AAC blocks, cements, tiles, plumbing systems, and site consumables across Telangana with dependable logistics support.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} site-body`}>
        <div className="site-shell">
          <Header />
          {children}
          <footer className="footer">
            <div className="container footer-grid">
              <div>
                <strong>Modern Marketing Associates</strong>
                <p>Family-run distributor | 24/7 coordination desk</p>
              </div>
              <ul>
                <li>Head Office: 16-8-240/3, Mani Homes Apartments, Malakpet, Hyderabad</li>
                <li>Yard: 22-6-669, Modern Complex, Opp. Mir Chowki PS, Mandi Mir Alam, Hyderabad 50002</li>
                <li>
                  Phone: <a href="tel:+919392995580">+91 9392995580</a>
                </li>
                <li>
                  Email: <a href="mailto:modern78665@gmail.com">modern78665@gmail.com</a>
                </li>
              </ul>
              <p className="footer-note">Copyright (c) {new Date().getFullYear()} Modern Marketing Associates. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}