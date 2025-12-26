export type Bike = {
  id: number;
  title: string;
  description: string | null;
  date_stolen: number;
  stolen_location: string;
  thumb: string | null;
  manufacturer_name: string;
  year: number;
  url: string;
  frame_colors: Array<string>;
  status: string;
};
