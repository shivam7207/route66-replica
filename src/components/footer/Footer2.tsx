const columns = [
  {
    title: "Our Info",
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Inventory", url: "/" },
      { label: "Gallery", url: "/" },
      { label: "Contact Us", url: "/" },
      { label: "Send Feedback", url: "/" },
    ],
  },
  {
    title: "Cars Under",
    links: [
      { label: "Under 10 Lakhs", url: "/" },
      { label: "Under 20 Lakhs", url: "/" },
      { label: "Under 30 Lakhs", url: "/" },
      { label: "Under 40 Lakhs", url: "/" },
      { label: "Under 50 Lakhs", url: "/" },
      { label: "Under 60 Lakhs", url: "/" },
    ],
  }
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mt-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
