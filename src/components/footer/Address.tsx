import Link from "next/link";

const data = {
  title: "Our Address",
  para: "Visit Route66 and we would commit to giving you best in class service with personalised attention and assistance to your requirements or contact us and we will make the delivery of your car a memorable one.",
  phone: "(757) 699-4478",
  email: "januinc@company.com",
  address: "No. 37A, Whites Road, Next to Sathyam Cinemas Car Parking, Royapettah, Chennai - 600014",
}

const Address = () => {
  return (
    <div className="row-xl-3 row-lg-3 row-sm-4">
      <h5 className="footer-title text-black fw-bold">{data.title}</h5>
      <p className="">
        {data.para}
      </p>
      <p className="mt-20 mb-0 mr-0 ml-0">phone:</p>
      <a href={`tel:${data.phone}`} className="email tran3s fs-8">
        {data.phone}
      </a>
      <br />
      <p className="mt-20 mb-0">email:</p>
      <Link
        href={`mailto:${data.email}`}
        className="mobile tran3s fs-8 mb-30"
      >
        {data.email}
      </Link>
      <p className="m-0">address:</p>
      <p className="mb-0">{data.address}</p>
    </div>
  );
};

export default Address;
