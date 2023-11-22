export interface VendorsListState {
  vendors: VendorsT[];
  page: number;
  page_size: number;
  lat: number;
  long: number;
}

export type VendorsT =
  | { type: "TEXT"; data: string }
  | {
      type: "BANNER";
      data: { image: string; deepLink: string };
    }
  | { type: "VENDOR"; data: VendorT };

export interface VendorT {
  logo: string;
  backgroundImage: string;
  id: number;
  title: string;
  description: string;
  rate: number;
  rating: number;
  voteCount: number;
}
