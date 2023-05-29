import Link from "next/link";
import Image from "next/image";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
} from "../../data/menu";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-xl order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image src="/images/logo/logo_01.png" alt="" height={30}  width={95} />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item active">
            <Link
              className="nav-link fs-6"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Home
            </Link>
          </li>
          {/* End li (home mega menu) */}

          <li className="nav-item">
            <Link
              className="nav-link fs-6"
              href="#"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              AboutUs
            </Link>
          </li>
          {/* End li (pages) */}

          <li className="nav-item dropdown">
            <Link
              className="nav-link fs-6"
              href="#"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Inventory
            </Link>
          </li>
          {/* End li (portfolio) */}

          <li className="nav-item">
            <Link
              className="nav-link fs-6"
              href="#"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Blogs
            </Link>
          </li>
          {/* End li (blog) */}

          <li className="nav-item">
            <Link className="nav-link fs-6" href="/gallery" role="button">
              Gallery
            </Link>
          </li>
          {/* End li (gallery) */}

          <li className="nav-item">
            <Link className="nav-link fs-6" href="/gallery" role="button">
              EmiCalc
            </Link>
          </li>
          {/* End li (emi calc) */}

          <li className="nav-item">
            <Link className="nav-link fs-6" href="/contact" role="button">
              ContactUs
            </Link>
          </li>
          {/* End li (contact) */}

          <li className="nav-item">
            <Link className="nav-link fs-6" href="/contact" role="button">
              Faq
            </Link>
          </li>
          {/* End li (faq) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
