function Privacy() {
  const sectioninformation = {
    title: "Privacy Policy",
    description:
      "At Blocksidian, we take your privacy and data protection seriously. This Privacy Policy outlines how we collect, use, and safeguard your personal information to provide you with a seamless and secure ticketing experience. By using our platform and services, you agree to the practices described in this policy.",
    end: "Join Blocksidian on our journey to revolutionize the ticketing industry, and experience the convenience, transparency, and trust that blockchain technology brings to event ticketing. Embrace a future where attending your favorite events is seamless, secure, and unforgettable.",
  };

  const information = [
    {
      title: "Collection of Personal Information",
      description:
        "We may collect personal information when you register for an account, purchase tickets, or interact with our platform. This information may include your name, email address, contact details, and payment information. We also use cookies and similar technologies to enhance your user experience and gather data on website usage.",
    },
    {
      title: "Use of Personal Information",
      description:
        "Your personal information is used to process transactions, verify your identity, and deliver tickets to you. We may also use your information to send you updates, promotional offers, and relevant event notifications, but you can opt-out of these communications at any time.",
    },
    {
      title: "Security and Data Protection",
      description:
        "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our platform is built on blockchain technology, ensuring that every ticket transaction is transparent, traceable, and tamper-proof, providing an additional layer of security.",
    },
    {
      title: "Sharing of Personal Information",
      description:
        "We may share your personal information with event organizers, venues, and service providers to fulfill ticket orders and ensure a smooth ticketing experience. We do not sell or rent your personal information to third parties for marketing purposes.",
    },
    {
      title: "Your Rights",
      description:
        "You have the right to access, correct, or delete your personal information stored on our platform. You can update your profile and communication preferences in your account settings. If you wish to delete your account, please contact our support team.",
    },
    {
      title: "Children's Privacy",
      description:
        "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us to have the data removed.",
    },
    {
      title: "Changes to the Privacy Policy",
      description:
        "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes and obtain your consent if required by applicable laws.",
    },
    {
      title: "Contact Us",
      description:
        "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at blocksidian.inc@gmail.com.",
    },
  ];

  return (
    <>
      <article className="container mx-auto px-2 xs:px-4 sm:px-6">
        <LegalSection
          information={information}
          sectioninformation={sectioninformation}
        />
      </article>
    </>
  );
}

export function LegalSection({ information, sectioninformation }) {
  return (
    <section className="px-4 py-8 max-w-screen-md mx-auto">
      <h1 className="mb-4 text-center text-4xl font-medium dark:text-white">{sectioninformation.title}</h1>
      <h2 className="mb-10 font-medium dark:text-white">{sectioninformation.description}</h2>
      {information.map((item, index) => (
        <LegalItem
          key={index}
          index={index}
          title={item.title}
          description={item.description}
        />
      ))}
      <h2 className="mb-10 font-medium dark:text-white">{sectioninformation.end}</h2>
    </section>
  );
}

const LegalItem = ({ index, title = "", description = "" }) => {
  return (
    <>
      <h2 className="text-lg font-bold mb-2 sm:mb-4 dark:text-white">
        {index + 1}. {title}
      </h2>
      <h3 className="text-justify mb-8 sm:mb-12 dark:text-SoftGray">{description}</h3>
    </>
  );
};

export default Privacy;
