import Footer from "@/src/components/footer";
import Header from "@/src/components/navbar";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return(
        <div>
            <Header/>
            {children}
            <Footer />
        </div>
    )
}