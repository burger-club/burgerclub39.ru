export interface Image {
  data: {
    attributes: {
      name: string;
      alternativeText: string;
      url: string;
      width: number;
      height: number;
    };
    id: number;
  };
}
