// To add a photo to the gallery, put the image file in the
// public/mangaloredaily-gallery folder, then add an entry below with its file
// name. Photos show in the order listed. `alt` describes the photo for people
// who can't see it.

export type GalleryPhoto = {
  src: string;
  caption: string;
  alt: string;
};

const folder = "/mangaloredaily-gallery";

export const gallery: GalleryPhoto[] = [
  {
    src: `${folder}/mangaloredaily8.jpg`,
    caption: "Kambala, the buffalo race",
    alt: "A Kambala racer drives two buffaloes through a flooded paddy track, sending up a spray of water",
  },
  {
    src: `${folder}/mangaloredaily7.jpg`,
    caption: "Bhoota Kola",
    alt: "A Bhoota Kola performer with a yellow painted face, flower garlands, a silver headdress and a skirt of tender coconut leaves",
  },
  {
    src: `${folder}/mangaloredaily4.jpg`,
    caption: "Yakshagana",
    alt: "A Yakshagana artist in a tall jewelled headdress, bold face paint and a red and gold costume",
  },
  {
    src: `${folder}/mangaloredaily2.jpg`,
    caption: "Mangaluru's clock tower",
    alt: "The red brick clock tower in Mangaluru with a city bus passing and the word Mangalore written across the sky",
  },
  {
    src: `${folder}/mangaloredaily5.jpg`,
    caption: "Alva's Pre-University College",
    alt: "The front of Alva's Pre-University College in Moodubidire, with large Yakshagana statues beside the entrance steps",
  },
  {
    src: `${folder}/mangaloredaily6.jpeg`,
    caption: "Dressed as Krishna",
    alt: "A dancer dressed as Krishna, with a peacock feather turban and flower garlands, performing on stage",
  },
  {
    src: `${folder}/mangaloredaily3.jpg`,
    caption: "On stage",
    alt: "A dancer in a checked sari, jewellery and a tall headdress covers her face with her hands as musicians play behind her",
  },
];
