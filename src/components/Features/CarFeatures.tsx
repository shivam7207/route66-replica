import React from 'react'

const icons = [
    {
        src: "/images/icon/icon_30.svg",
        alt: "shape",
        className: "lazy-img shapes icon-one",
    },
    {
        src: "/images/icon/icon_31.svg",
        alt: "shape",
        className: "lazy-img shapes icon-two",
    },
    {
        src: "/images/icon/icon_32.svg",
        alt: "shape",
        className: "lazy-img shapes icon-three",
    },
    {
        src: "/images/icon/icon_33.svg",
        alt: "shape",
        className: "lazy-img shapes icon-four",
    },
    {
        src: "/images/icon/icon_34.svg",
        alt: "shape",
        className: "lazy-img shapes icon-five",
    },
];
const blocks = [
    {
        className:
            "block-bg shapes tran3s block-one d-flex align-items-center justify-content-center",
        text: "VAST SUPER CAR COLLECTION",
    },
    {
        className:
            "block-bg shapes tran3s block-two d-flex align-items-center justify-content-center",
        text: "Free cloud storage",
    },
    {
        className:
            "block-bg shapes tran3s block-three d-flex align-items-center justify-content-center",
        text: "Easy Customizable",
    },
    {
        className:
            "block-bg shapes tran3s block-four d-flex align-items-center justify-content-center",
        text: "SEO Optimized",
    },
    {
        className:
            "block-bg shapes tran3s block-five d-flex align-items-center justify-content-center",
        text: "User Friendly Interface",
    },
];

function CarFeatures() {
    return (
        <div className="fancy-feature-ten position-relative mt-170 lg-mt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 m-auto">
                        <div
                            className="title-style-four text-center pb-100"
                            data-aos="fade-up"
                        >
                            <div className="sc-title-two" style={{ color: "#6A45FF" }}>
                                OUR SHOWROOM SPECS
                            </div>
                            <h2 className="main-title fw-500 tx-dark m0">
                                <span>Luxury Guaranteed</span>
                            </h2>
                        </div>
                        {/* /.title-style-four */}
                    </div>
                </div>
                {/* End .row */}
                <div className="wrapper position-relative" data-aos="fade-up">
                    <div className="circle-one rounded-circle position-relative m-auto">
                        {blocks.map((block, index) => (
                            <div key={index} className={block.className}>
                                <span>{block.text}</span>
                            </div>
                        ))}

                        <div className="circle-two rounded-circle position-relative">
                            <div>
                                {icons.map((icon, index) => (
                                    <img
                                        key={index}
                                        src={icon.src}
                                        alt={icon.alt}
                                        className={icon.className}
                                    />
                                ))}
                            </div>
                            {/* <div className="circle-three rounded-circle position-relative" /> */}
                            {/* <div className="mobile-screen"> */}
                            <img
                                src="/images/assets/car.png"
                                alt="shape"
                                className="lazy-img circle-three"
                            />
                            {/* </div> */}
                        </div>
                    </div>
                    {/* End circle  */}


                    <img
                        src="/images/shape/shape_47.svg"
                        alt="shape"
                        className="lazy-img shapes fancy-shape"
                    />
                </div>
                {/* /.wrapper */}
            </div>
        </div>
    )
}

export default CarFeatures