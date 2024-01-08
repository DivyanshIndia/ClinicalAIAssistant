const ResearchPage = () => {
  const researchItems = [
    {
      head: "Patent",
      title: "System and Method for Automated Disease Diagnosis",
      authors:
        "Abhisek Tiwari, Sriparna Saha, Pushpak Bhattacharya, Minakshi Dhar",
      description: "Indian Patent, 2023",
      year: "2023",
      type: "Patent",
    },
    {
      head: "Jounal",

      title:
        "A Knowledge Infused Context Driven Dialogue Agent for Disease Diagnosis using Hierarchical Reinforcement Learning",
      authors: "Abhisek Tiwari, Sriparna Saha, and Pushpak Bhattacharyya",
      description: "Knowledge Based Systems (KBS), 2021",
      year: "2021",
      type: "Journal",
    },
    {
      head: "Journal",

      title:
        "Towards Symptom Assessment guided Symptom Investigation and Disease Diagnosis Assistant",
      authors:
        "Abhisek Tiwari, Rishabh, Sriparna Saha, Pushpak Bhattacharyya, Sarbajeet Tiwari, and Minakshi Dhar",
      description: "IEEE Transactions on Artificial Intelligence, 2023",
      year: "2023",
      type: "Journal",
    },
    {
      head: "Conference",

      title:
        "Dr. Can See: Towards a Multi-modal Disease Diagnosis Virtual Assistant",
      authors:
        "Abhisek Tiwari, Manisimha Manthena, Sriparna Saha, Pushpak Bhattacharyya, Minakshi Dhar, and Sarbajeet Tiwari",
      description:
        "31st ACM International Conference on Information and Knowledge Management (CIKM), 2022",
      year: "2022",
      type: "Conference",
    },
    {
      head: "Confernece",

      title:
        "Experience and Evidence are the eyes of an excellent summarizer! Towards Knowledge Infused Multi-modal Clinical Conversation Summarization",
      authors:
        "Abhisek Tiwari, Anisha Saha, Sriparna Saha, Pushpak Bhattacharyya, and Minakshi Dhar",
      description:
        "32nd ACM International Conference on Information and Knowledge Management (CIKM) 2023",
      year: "2023",
      type: "Conference",
    },
  ];

  const ResearchCard = ({ head, title, authors, description, year, type }) => {
    return (
      <div className=" p-2 mb-1 ">
        <p className="">
          <strong> &#9679; {head}: </strong>
          {title}
        </p>
        <p className="">{authors}</p>
        <small className="">
          {type}, {year}
        </small>
        <small className=" mt-2">{description}</small>
      </div>
    );
  };

  return (
    <div className="container mx-auto my-12  p-6 text-white">
      <h1 className="text-3xl font-bold  mb-6">
        Research and Development
      </h1>
      <div className="space-y-4">
        {researchItems.map((item, index) => (
          <ResearchCard
            key={index}
            head={item.head}
            title={item.title}
            authors={item.authors}
            description={item.description}
            year={item.year}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
