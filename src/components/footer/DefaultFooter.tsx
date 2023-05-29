import Link from "next/link";
import Footer2 from "./Footer2";
import SubscribeUs from "./SubscribeUs";
import CopyrightFooter2 from "./CopyrightFooter2";
import Address from "./Address";

const DefaultFooter = () => {
    return (
        <div className="footer-style-eleven theme-basic-footer position-relative">
            <div className="bg-wrapper position-relative">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-xl-2 footer-intro mb-40">
                            <Address />
                        </div>
                        {/* End .col */}

                        <Footer2 />

                        <div className="col-xl-4 col-lg-5 mb-30 form-widget mt-30">
                            <h6 className="pt-15 pb-20 md-pt-10">Subscribe Us</h6>
                            <SubscribeUs />
                        </div>
                        {/* End .col-xl-4 */}
                    </div>
                    {/* End .row */}
                </div>
                {/* /.container */}
            </div>
            {/* /.bg-wrapper */}
            <CopyrightFooter2 />
        </div>
    );
};

export default DefaultFooter;
