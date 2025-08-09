export type Project = {
  id: number;
  name: string;
  category: 'Residential' | 'Commercial' | 'Hospitality' | 'Retail' | 'Religious';
  location: string;
  completionDate: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  images: string[];
  area: string;
  duration: string;
  teamSize: string;
  client: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'Prodapt IT Park, Chennai',
    category: 'Commercial',
    location: 'Chennai, Tamil Nadu',
    completionDate: '2024',
    description:
      'Complete stone care and polishing project for a newly constructed IT Park, transforming 40,000 sq ft of space to achieve 5-star resort aesthetics using specialized chemical formulations.',
    fullDescription:
      'Every time you begin work on a new project, you need to ensure that all contingencies are covered in advance for the project, for the best possible outcome yet. A befitting example of this is one of the projects that we undertook for Sol Prodapt Solutions in Chennai. As it was a newly constructed IT Park in Guindy, which needed services set up, the primary aim of the project was to get the floors ready. This consisted of treating different surfaces with specialised chemical formulations to make an IT park look like a 5-star resort after the work was completed. The project began with a detailed inspection of the requirements in order to achieve the parameters of sophisticated transformation. With an approximate area of 40,000 sq. ft, the work of cleansing and polishing started initially. We also undertook the task of enhancing the appearance of the stone as well as stone sealing procedures wherever required.',
    coverImage: '/it park/1.png',
    images: [
      '/it park/1.png',
      '/it park/2.png',
      '/it park/3.png',
      '/it park/4.png',
      '/it park/5.png',
      '/it park/6.png',
      '/it park/7.png',
      '/it park/8.png',
      '/it park/9.png',
      '/it park/10.png',
    ],
    area: '40,000 sq ft',
    duration: '25-30 days',
    teamSize: 'Professional Team',
    client: 'Sol Prodapt Solutions',
    featured: false,
  },
  {
    id: 2,
    name: 'Ram Mandir, Ayodhya',
    category: 'Religious',
    location: 'Ayodhya, Uttar Pradesh',
    completionDate: '2024',
    description:
      'Prestigious stone cleaning project for Shri Ram Janmbhoomi Teerth Kshetra Trust, removing algae, moss, and dirt from sacred stones using Magik BSR Cleaner.',
    fullDescription:
      'MMC is pleased to have worked for Shri Ram Janmbhoomi Teerth Kshetra Trust at Ram Mandir Ayodhya, in cleaning the stones covered with dirt, algae and moss formed due to climatic conditions. The stones were cleaned with the use of our Magik BSR Cleaner which is a very effective cleaner used for removing algae, moss, stains and dirt particles. The results are there for you to check out. The results we achieved at the site surpassed our expectations by manifolds and we felt obliged to have been given the opportunity to work on such a prestigious project.',
    coverImage: '/ayodhya/1.jpg',
    images: ['/ayodhya/1.jpg', '/ayodhya/2.jpg', '/ayodhya/3.jpg', '/ayodhya/4.jpg', '/ayodhya/5.jpg'],
    area: 'Religious Complex',
    duration: 'Completed',
    teamSize: 'Expert Team',
    client: 'Shri Ram Janmbhoomi Teerth Kshetra Trust',
    featured: false,
  },
];

export const getProjectById = (id: number): Project | undefined =>
  projects.find((p) => p.id === id);


