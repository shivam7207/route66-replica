import Link from "next/link";
import Image from "next/image";

const CarBanner = () => {
    const features = [
        "World Class Collections",
        "Solid Trusted Reputation",
        "Experienced & Market Knowledge",
        "Strong Customer Service"
    ];

    const buttons = [
        {
            className: "windows-button",
        }
    ];

    return (
        <div className="fancy-feature-thirtyEight mt-60 lg-mt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="block-style-seven wow fadeInLeft">
                            <div className="title-style-one">
                                <div className="sc-title text-uppercase">ABOUT OUR COMPANY</div>
                                <h2 className="main-title fw-500 tx-dark m0">
                                    For All Your Luxury & Automotive Needs.
                                </h2>
                            </div>
                            <p className="fs-20 pt-30 pb-30 lg-pb-20">
                                A Luxury automotive company that provides high-end cars & services for resale. Route66 is your premier source for all things automotive. Luxury, performance, and pre-owned vehicles with the best prices in Chennai
                            </p>
                            <ul className="style-none list-item">
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            {/* End list */}

                            <div className="d-sm-flex align-items-center platform-button-group-three mt-55 lg-mt-30">
                                <Link
                                    href="#"
                                    className={`d-flex align-items-center`}
                                >
                                    <div>
                                        <strong>Learn more</strong>
                                    </div>
                                </Link>
                            </div>
                            {/* /.platform-button-group-three */}
                        </div>
                        {/* /.block-style-seven */}
                    </div>
                    {/* End col-6 */}

                    <div className="col-lg-6 wow fadeInRight">
                        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
                            <Image
                                src="images/assets/car_about_banner.jpg"
                                alt=""
                                className="lazy-img main-img ms-auto"
                            />
                            {/* <Image
                                src="images/media/img_56.png"
                                alt=""
                                className="lazy-img screen-two"
                            /> */}
                            {/* <Image
                                src="images/shape/shape_139.svg"
                                alt=""
                                className="lazy-img shapes shape-one"
                            />
                            <Image
                                src="images/shape/shape_140.svg"
                                alt=""
                                className="lazy-img shapes shape-two"
                            /> */}
                        </div>{" "}
                        {/* /.illustration-holder */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarBanner;
