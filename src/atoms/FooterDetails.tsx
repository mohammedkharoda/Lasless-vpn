const FooterDetails = () => {
  const footerDetails = [
    {
      title: "Products",
      details: [
        { label: "Downloads", link: "/downloads" },
        { label: "Pricing", link: "/pricing" },
        { label: "Locations", link: "/locations" },
        { label: "Server", link: "/servers" },
        { label: "Countries", link: "/countries" },
        { label: "Blog", link: "/blog" },
      ],
    },
    {
      title: "Engage",
      details: [
        { label: "LaslesVPN", link: "/laselesvpn" },
        { label: "FAQ", link: "/faq" },
        { label: "Tutorials", link: "/tutorials" },
        { label: "About Us", link: "/about-us" },
        { label: "Privacy Policy", link: "/privacy-policy" },
        { label: "Terms Of Services", link: "/terms-services" },
      ],
    },
    {
      title: "Earn Money",
      details: [
        { label: "Affiliations", link: "/affliliations" },
        { label: "Become partners", link: "/partners" },
      ],
    },
  ];

  return (
    <div id="footer-details-id" className="flex gap-10">
      {footerDetails.map((section) => (
        <div key={section.title}>
          <p className="font-rubik font-medium text-dark-blue-lz text-[18px] text-center mb-5">
            {section.title}
          </p>
          <div className="flex flex-col gap-4 text-center">
            {section.details.map((detail) => (
              <a
                key={detail.label}
                href={detail.link}
                className="font-rubik font-normal text-[16px]"
              >
                {detail.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterDetails;
