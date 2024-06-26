import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["var(--font-inter)"],
      },
      colors: {
        base: {
          DEFAULT: "var(--base)",
          foreground: "var(--base-foreground)",
          stroke: "var(--base-stroke)",
        },
        soft: {
          DEFAULT: "var(--soft)",
          foreground: "var(--soft-foreground)",
          stroke: "var(--soft-stroke)",
        },
        weak: {
          DEFAULT: "var(--weak)",
          foreground: "var(--weak-foreground)",
          stroke: "var(--weak-stroke)",
        },
        sub: {
          DEFAULT: "var(--sub)",
          foreground: "var(--sub-foreground)",
          stroke: "var(--sub-stroke)",
        },
        surface: {
          DEFAULT: "var(--surface)",
        },
        inverse: {
          DEFAULT: "var(--inverse)",
          foreground: "var(--inverse-foreground)",
          stroke: "var(--inverse-stroke)",
        },
        primary: {
          focus: "var(--primary-focus)",
          darkest: "var(--primary-darkest)",
          foreground: "var(--primary-foreground)",
          darker: "var(--primary-darker)",
          dark: "var(--primary-dark)",
          DEFAULT: "var(--primary-base)",
          light: "var(--primary-light)",
          lighter: "var(--primary-lighter)",
          lightest: "var(--primary-lightest)",
        },
        disabled: {
          DEFAULT: "var(--disabled)",
          foreground: "var(--disabled-foreground)",
        },
        secondary: {
          focus: "var(--secondary-focus)",
          darkest: "var(--secondary-darkest)",
          foreground: "var(--secondary-foreground)",
          darker: "var(--secondary-darker)",
          dark: "var(--secondary-dark)",
          DEFAULT: "var(--secondary-base)",
          light: "var(--secondary-light)",
          lighter: "var(--secondary-lighter)",
          lightest: "var(--secondary-lightest)",
        },
        danger: {
          focus: "var(--danger-focus)",
          darkest: "var(--danger-darkest)",
          foreground: "var(--danger-foreground)",
          darker: "var(--danger-darker)",
          dark: "var(--danger-dark)",
          DEFAULT: "var(--danger-base)",
          light: "var(--danger-light)",
          lighter: "var(--danger-lighter)",
          lightest: "var(--danger-lightest)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        state: {
          success: "var(--state-success)",
          foreground: "var(--state-foreground)",
          warning: "var(--state-warning)",
          error: "var(--state-error)",
          information: "var(--state-information)",
          away: "var(--state-away)",
          feature: "var(--state-feature)",
          neutral: "var(--state-neutral)",
          verified: "var(--state-verified)",
        },
        tremor: {
          brand: {
            faint: "var(--primary-lightest)",
            muted: "var(--primary-lighter)",
            subtle: "var(--primary-light)",
            DEFAULT: "var(--primary-base)",
            emphasis: "var(--primary-dark)",
            inverted: "var(--primary-foreground)",
          },
          background: {
            muted: "var(--weak)",
            subtle: "var(--soft)",
            DEFAULT: "var(--background)",
            emphasis: "var(--sub)",
          },
          border: {
            DEFAULT: "var(--sub-stroke)",
          },
          ring: {
            DEFAULT: "var(--primary-base)",
          },
          content: {
            subtle: "var(--weak-foreground)",
            DEFAULT: "var(--soft-foreground)",
            emphasis: "var(--sub-foreground)",
            strong: "var(--foreground)",
            inverted: "var(--background)",
          },
        },
      },
      boxShadow: {
        low: "var(--shadow-low)",
        medium: "var(--shadow-medium)",
        high: "var(--shadow-high)",
      },
      borderRadius: {
        "radius-none": "var(--radius-none)",
        "radius-xs": "var(--radius-xs)",
        "radius-sm": "var(--radius-sm)",
        radius: "var(--radius-base)",
        "radius-md": "var(--radius-md)",
        "radius-lg": "var(--radius-lg)",
        "radius-full": "var(--radius-full)",
      },
      fontSize: {
        "tremor-label": [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        "tremor-default": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        "tremor-title": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        "tremor-metric": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    ...["primary"].flatMap((customColor) => [
      `bg-${customColor}`,
      `border-${customColor}`,
      `hover:bg-${customColor}`,
      `hover:border-${customColor}`,
      `hover:text-${customColor}`,
      `fill-${customColor}`,
      `ring-${customColor}`,
      `stroke-${customColor}`,
      `text-${customColor}`,
      `ui-selected:bg-${customColor}`,
      `ui-selected:border-${customColor}`,
      `ui-selected:text-${customColor}`,
    ]),
  ],
};
export default config;
