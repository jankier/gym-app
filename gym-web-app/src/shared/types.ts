export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Plans = "plans",
  ContactUs = "contactus",
}

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type PlanType = {
  icon: JSX.Element;
  title: string;
  price: string;
  features: Array<string>;
};
