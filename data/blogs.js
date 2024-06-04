// data/blogs.js
const blogs = [
  {
    id: 1,
    title: "Exploring the Wonders of Deep Sea Diving",
    content: `Deep sea diving is an exhilarating adventure that takes you into the depths of the ocean, where you can encounter a mesmerizing array of marine life.

As you descend into the azure abyss, you're surrounded by the eerie silence of the ocean depths, broken only by the sound of your own breathing.

The coral reefs teem with vibrant colors, as schools of tropical fish dart in and out of the coral formations. Giant sea turtles glide gracefully through the water, while elusive octopuses camouflage themselves among the rocks.

But deep sea diving is not without its risks. The intense pressure of the water can crush a human body with ease, and the darkness of the depths can disorient even the most experienced diver.

Despite these dangers, the allure of the deep sea continues to draw adventurers from around the world, eager to explore the mysteries that lie beneath the waves.`,
    author: "Marie Johnson",
    profileImage: "https://example.com/profile_images/marie_johnson.jpg",
    date: "28/09/2023"
  },
  {
    id: 2,
    title: "The Art of Astrophotography: Capturing the Cosmos",
    content: `Astrophotography is a captivating art form that allows photographers to capture the beauty of the cosmos in stunning detail.

With the right equipment and techniques, amateur and professional photographers alike can produce breathtaking images of distant galaxies, nebulae, and celestial phenomena.

To capture these celestial wonders, photographers use specialized cameras and telescopes equipped with sensitive sensors that can detect faint light from distant objects. They often travel to remote locations with minimal light pollution to achieve the best results.

Once the images are captured, photographers use advanced editing software to enhance the details and colors of the celestial objects, creating images that are both scientifically informative and aesthetically pleasing.

Astrophotography requires patience, skill, and a deep appreciation for the beauty of the universe. It's a rewarding pursuit that allows photographers to explore the cosmos from the comfort of their own backyard.`,
    author: "David Thompson",
    profileImage: "https://example.com/profile_images/david_thompson.jpg",
    date: "12/10/2023"
  }
];


export const find = (predicate) => blogs.find(predicate);

export const length = blogs.length;

export const push = (item) => {
  blogs.push(item);
};

export default blogs;
