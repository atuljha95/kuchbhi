// gallery configuration

import {GALLERY_CONF, GALLERY_IMAGE} from "ngx-image-gallery";

export const DEMO_GALLERY_CONF_INLINE: GALLERY_CONF = {
  imageOffset: '0px',
  imagePointer: true,
  showDeleteControl: false,
  showCloseControl: false,
  showExtUrlControl: false,
  closeOnEsc: true,
  showImageTitle: false,
  inline: true,
  backdropColor: 'default'
};

export const DEMO_GALLERY_CONF: GALLERY_CONF = {
  imageOffset: '0px',
  showDeleteControl: false,
  showCloseControl: true,
  showImageTitle: false,
  inline: false,
  backdropColor: 'rgba(13,13,14,0.85)'
};

// gallery images
export const DEMO_GALLERY_IMAGE: GALLERY_IMAGE[] = [
  {
    url: "../../assets/images/1.jpg",
    altText: 'Birthday',
    title: 'Digital',
    thumbnailUrl: "../../assets/images/1.jpg"
  },
  {
    url: "../../assets/images/2.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/2.jpg"
  },
  {
    url: "../../assets/images/3.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/3.jpg"
  },{
    url: "../../assets/images/4.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/4.jpg"
  },
  {
    url: "../../assets/images/5.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/5.jpg"
  },
  {
    url: "../../assets/images/6.jpg",
    altText: 'Digital',
    title: 'Digital Academy', 
    thumbnailUrl: "../../assets/images/6.jpg"
  },{
    url: "../../assets/images/7.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/7.jpg"
  },
  {
    url: "../../assets/images/8.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/8.jpg"
  },
  {
    url: "../../assets/images/9.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/9.jpg"
  },{
    url: "../../assets/images/10.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/10.jpg"
  },
  {
    url: "../../assets/images/11.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/11.jpg"
  },
  {
    url: "../../assets/images/12.jpg",
    altText:'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/12.jpg"
  },{
    url: "../../assets/images/13.jpg",
    altText: 'Digital',
    title: 'Digital Academy',
    thumbnailUrl: "../../assets/images/13.jpg"
  },
];
