export default function Services() {
    const services = [
      {
        title: "Courses and Lessons",
        description: "Learn at your own pace with structured courses.",
        img: "https://img.freepik.com/premium-photo/online-educator-conducting-virtual-class-with-students-via-video-conference_1314467-75062.jpg",
      },
      {
        title: "Live Classes and Webinars",
        description: "Attend live sessions and interact with experts.",
        img: "https://hirepro.in/wp-content/uploads/2024/01/Virtual-internship-hiring_-The-Pros-and-Cons-scaled-1-1024x672.jpg",
      },
      {
        title: "Lifelong Learning and Upskilling",
        description: "Enhance your skills with continuous learning.",
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuZKbOgyDfToSh8CnzSyMcjlTshW8X9NB1ZGL8UqIPpXvoxt7M",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100 flex justify-center">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src={service.img} alt={service.title} className="w-full h-56 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <a href="#" className="text-blue-500 mt-4 inline-block">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  