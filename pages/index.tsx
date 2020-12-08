import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { IProduct } from "../components/Product";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Head from "next/head";

import "../styles.scss";

interface IIndexProps {
    products: IProduct[];
}

const Index = (props: IIndexProps) => {
    return (
        <div className="app">
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

                <link rel="shortcut icon" href="/static/favicon.ico" />

                {/* Purchase script functionality */}
                <script
                    src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
                    data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"
                    id="snipcart"
                ></script>

                {/* Styles for Purchase Box */}
                <link
                    href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </Head>
            <Header />
            <main className="main">
                <img
                    src="/static/aziz.svg"
                    alt="a"
                    className="background-image"
                />
                <div className="promotional-message">
                    <h3>DREAM. TASTE. BELIEVE.</h3>
                    <h2>Kristeena</h2>
                    <p>
                        An <strong>exclusive selection of donations</strong>{" "}
                        available to make a dream come true.
                    </p>
                </div>
                <ProductList products={props.products} />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

Index.getInitialProps = async () => {
    return {
        products: [
            {
                id: "nextjs_chocolate",
                name: "Chocolate",
                price: 85.0,
                // image: "../static/chocolate.PNG",
                image: "https://i.imgur.com/Ge75NFe.png",
                description:
                    "The Chocolate is organic and full of essential vitamins that the body requires when exerting high levels of energy watching movies. This was also widely used for Netflix and Chill.",
            } as IProduct,
            {
                id: "nextjs_water",
                name: "Water",
                price: 50.0,
                // image: "../static/water.PNG",
                image: "https://i.imgur.com/pcKxWBy.png",
                description:
                    "The Water is full of minerals harvested and used by the body to recover from fatique and migraines. It was recognized by its clear transparent form when placed inside a container.",
            } as IProduct,
            {
                id: "nextjs_toast",
                name: "Toast",
                price: 17.5,
                // image: "../static/toast.PNG",
                image: "https://i.imgur.com/T5P3Oqy.png",
                description:
                    "The Toast contains iron and protein necessary after lifting and working out every day. It's said that the crusty and musky exterior of the Toast originated from Texas.",
            } as IProduct,
            {
                id: "nextjs_coffee",
                name: "Starbucks Coffee",
                price: 12.5,
                // image: "../static/starbucks.PNG",
                image: "https://i.imgur.com/Wmf8C5q.png",
                description:
                    "The Starbucks Coffee is necessary and keeps mental fatique elevated with stress inhibitors are more proactive than reactive. Coffee was also a common form of medicine used to treat confusion and can be mistaken as cocaine in liquid form.",
            } as IProduct,
        ],
    };
};

export default Index;
