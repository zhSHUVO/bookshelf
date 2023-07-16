export default function Banner() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url('src/assets/banner.jpg')",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-prose">
                    <h1 className="mb-5 text-5xl font-bold">
                        Welcome, Where Words Come Alive!
                    </h1>
                    <p className="mb-5">
                        Immerse yourself in a world of captivating stories and
                        endless possibilities. Explore our diverse collection of
                        books, spanning genres from thrilling adventures to
                        thought-provoking mysteries. Let the pages transport you
                        to new realms, spark your imagination, and ignite your
                        love for reading. Discover your next literary treasure
                        and embark on a journey through the enchanting pages of
                        our Bookshelf. Happy reading!
                    </p>
                    <div className="flex justify-center animate-bounce mt-10">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
