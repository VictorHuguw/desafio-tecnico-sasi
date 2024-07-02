export interface Slide {
    id: number;
    url_redirect: string;
    img: {
      data: {
        attributes: {
          url: string;
          alternativeText: string | null;
        };
      };
    };
  }