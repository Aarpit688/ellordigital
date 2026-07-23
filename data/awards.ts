export interface Award {
  name: string;
  org: string;
  year: string;
  category: string;
}

// Real recognition only. Swap in the studio's own awards as they land.
export const AWARDS: Award[] = [
  { name: "Site of the Day", org: "Awwwards", year: "2025", category: "Ecommerce" },
  { name: "Best UI Design", org: "CSS Design Awards", year: "2025", category: "Fintech" },
  { name: "Webby Nominee", org: "The Webby Awards", year: "2025", category: "Health & Wellness" },
  { name: "Top Web Developers", org: "Clutch", year: "2025", category: "Los Angeles" },
  { name: "Design Awards Finalist", org: "The Drum", year: "2024", category: "Brand Identity" },
  { name: "Site of the Day", org: "FWA", year: "2024", category: "Food & Beverage" },
];

export const AWARD_STATS = [
  { value: "40+", label: "Awards & mentions" },
  { value: "120", label: "Projects launched" },
  { value: "9", label: "Years in business" },
];
