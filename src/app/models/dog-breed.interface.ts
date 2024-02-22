export interface DogBreed {
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  origin: string;
  temperament: string;
  description: string;
  isFavourite: boolean;
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  image: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
  reference_image_id: string;
}
