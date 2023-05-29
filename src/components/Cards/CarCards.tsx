import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    imgSrc: "/images/media/img_76.jpg",
    name: "Blueberry villa",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$34,900",
  },
  {
    imgSrc: "/images/media/img_77.jpg",
    name: "White House villa",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$28,100",
  },
  {
    imgSrc: "/images/media/img_78.jpg",
    name: "Luxury villa in Dal lake",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$42,500",
  },
  {
    imgSrc: "/images/media/img_78.jpg",
    name: "Luxury villa in Dal lake",
    address: "Mirpur 10, Stadium dhaka 1208",
    price: "$42,500",
  },
];

const CarCards = () => {
  return (
    <>
      {properties.map((property, index) => (
        <div key={index} className="col-lg-4 col-sm-6">
          <div className="card-style-twentyTwo mt-35">
            <Image
              width={424}
              height={361}
              src={property.imgSrc}
              alt="media"
              className="lazy-img w-100"
            />
            <div className="text-meta">
              <h4>
                <a href="#" className="property-name">
                  {property.name}
                </a>
              </h4>
              <p className="fs-18">{property.address}</p>
              <div className="d-flex align-items-center justify-content-between">
                <strong className="price fw-500 tx-dark">
                  {property.price}
                </strong>
                <Link href="#" className="read-more tran3s">
                  <i className="bi bi-arrow-up-right" />
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p>hello</p>
              <p>hello</p>
              <p>hello</p>
            </div>
          </div>
          {/* /.card-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default CarCards;
