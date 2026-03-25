import React from 'react';

interface InfoPageProps {
  title: string;
}

const InfoPage: React.FC<InfoPageProps> = ({ title }) => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-birch min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-forest mb-12">{title}</h1>
        <div className="prose prose-stone max-w-none text-forest/70 font-sans tracking-wide leading-relaxed space-y-6">
          <p>
            This is a placeholder for the {title} page. We are currently working on bringing you more detailed information about our sustainable practices and company values.
          </p>
          <p>
            At Lesnik, we believe in transparency and slow living. Every part of our business is designed with the planet in mind, and we look forward to sharing more of our journey with you soon.
          </p>
          <p>
            If you have any immediate questions, please don't hesitate to reach out to our team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
