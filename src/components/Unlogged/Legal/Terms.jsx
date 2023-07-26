import { LegalSection } from "./Privacy";

function Terms() {
  const sectioninformation = {
    title: "Terms and Conditions",
    description:
      "Welcome to Blocksidian! These Terms and Conditions govern your use of our blockchain-based ticketing platform and related services. By using Blocksidian, you agree to comply with these Terms, our Privacy Policy, and any other guidelines provided. Please read these Terms carefully before using our services.",
    end: "By using Blocksidian, you acknowledge that you have read, understood, and agreed to these Terms and our Privacy Policy. Embrace the future of secure and transparent ticketing with Blocksidian, and enjoy unforgettable experiences at your favorite events!",
  };
  const information = [
    {
      title: "Account Registration",
      description:
        "To access and use our platform, you must create an account. You are responsible for providing accurate and up-to-date information during the registration process. You must keep your account credentials confidential and not share them with third parties. You are solely responsible for all activities that occur under your account.",
    },
    {
      title: "Ticket Purchases and Sales",
      description:
        "Blocksidian facilitates the buying and selling of event tickets using blockchain technology. When purchasing tickets, you agree to provide accurate billing and payment information. All ticket transactions are final, and refunds or cancellations are subject to the policies of the event organizer or venue. When selling tickets on our platform, you must comply with the terms set by the event organizer and ensure that the tickets you offer are genuine and valid.",
    },
    {
      title: "Blockchain Technology",
      description:
        "Our platform utilizes blockchain technology to ensure transparency, traceability, and tamper-proof ticket transactions. By using Blocksidian, you acknowledge and agree that the blockchain ledger stores transaction data, and this information is immutable.",
    },
    {
      title: "User Conduct",
      description:
        "You agree to use Blocksidian for lawful purposes only and not to engage in any activities that may disrupt or harm our platform or other users. You shall not attempt to access or tamper with our systems or interfere with the proper functioning of the platform.",
    },
    {
      title: "Intellectual Property",
      description:
        "All content and materials on Blocksidian, including logos, trademarks, text, graphics, and software, are the property of Blocksidian or its licensors and are protected by intellectual property laws. You may not use, reproduce, modify, or distribute any of our content without our express written consent.",
    },
    {
      title: "Limitation of Liability",
      description:
        "Blocksidian strives to provide a reliable and secure platform. However, we cannot guarantee that our services will be error-free or uninterrupted. We shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform or services.",
    },
    {
      title: "Indemnification",
      description:
        "You agree to indemnify and hold harmless Blocksidian and its affiliates, directors, officers, employees, and agents from any claims, losses, damages, liabilities, or expenses arising out of your use of our platform or any violation of these Terms.",
    },
    {
      title: "Modifications to the Platform and Terms",
      description:
        "We may update, modify, or discontinue any aspect of our platform at any time without prior notice. Similarly, we reserve the right to change these Terms periodically. You are responsible for regularly reviewing the Terms to stay informed about any updates.",
    },
    {
      title: "Termination",
      description:
        "We may suspend or terminate your access to Blocksidian at any time and for any reason, without prior notice. You may also close your account at any time by contacting our support team.",
    },
    {
      title: "Governing Law",
      description:
        "These Terms shall be governed by and construed in accordance with the laws of [your country], without regard to its conflict of laws principles.",
    },
    {
      title: "Contact Us",
      description:
        "If you have any questions or concerns about these Terms or our services, please contact us at blocksidian.inc@gmail.com",
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

export default Terms;
