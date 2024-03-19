const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

export const deckingAndOutdoorDescription = `Calvary Composite, ${
  country === "Singapore" ? "dassoCTECH" : "MOSO"
}, Accoya, Timber`;

export const footerCopyrightContent = `©2024 Calvary Carpentry ${
  country === "Singapore" ? "Pte Ltd" : "Sdn. Bhd."
} All Rights Reserved.`;

export const footerCompanyDescription = `Welcome to Calvary Carpentry ${
  country === "Singapore" ? "Pte Ltd" : "Sdn. Bhd."
}, where exceptional craftsmanship meets unwavering trust. With a legacy of excellence established by prestigious brands in Singapore, we've wood for you.`;
