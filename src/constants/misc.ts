const country = process.env.NEXT_PUBLIC_COUNTRY || "Singapore";

export const deckingAndOutdoorDescription = `Calvary Composite, ${
  country === "Singapore" ? "dassoCTECH" : "MOSO"
}, Accoya, Timber`;

const currentYear = new Date().getFullYear();

export const footerCopyrightContent = `©${currentYear} Calvary Carpentry ${
  country === "Singapore" ? "Pte Ltd" : "Sdn. Bhd."
} All Rights Reserved.`;

export const footerCompanyDescription = `Welcome to Calvary Carpentry ${
  country === "Singapore" ? "Pte Ltd" : "Sdn. Bhd."
}, where exceptional craftsmanship meets unwavering trust. With a legacy of excellence established by prestigious brands in Singapore, we've wood for you.`;

export const whatsappNumber =
  country === "Singapore" ? "6594533233" : "60133001091";
// country === "Singapore" ? "6590297044" : "60133001091";
