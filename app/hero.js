import { heroui } from '@heroui/react'
export default heroui({
    defaultTheme: "light",
    defaultExtendTheme: "light",
    themes: {
      light: {
        colors: {
          primary: { 
            "DEFAULT": "#59b2e9",
            "50": "#f0f9ff",
            "100": "#e0f2fe",
            "500": "#59b2e9",
            "600": "#0284c7",
            "700": "#0369a1"
          },
          secondary: {    
            "DEFAULT": "#fa5551"
          },
          doiBlue: { 
            "DEFAULT": "#04B9E8"
          },
          doiRed: {    
            "DEFAULT": "#DC353B"
          },
          doiYellow: {    
            "DEFAULT": "#FDBC59"
          },
          doiGreen: {    
            "DEFAULT": "#94C83F"
          },
          doiDark: {    
            "DEFAULT": "#0B0F1E"
          },
          doiLight: {    
            "DEFAULT": "#FEFEFA"
          },
          main: {    
            "DEFAULT": "#0B0F1E"
          },
          // New colors for the modern UI
          gold: {
            "DEFAULT": "#FFD700",
            "50": "#fffbeb",
            "100": "#fef3c7",
            "200": "#fde68a",
            "300": "#fcd34d",
            "400": "#fbbf24",
            "500": "#FFD700",
            "600": "#d97706",
            "700": "#b45309",
            "800": "#92400e",
            "900": "#78350f"
          },
          success: {
            "DEFAULT": "#10b981",
            "50": "#ecfdf5",
            "500": "#10b981",
            "600": "#059669"
          },
          darkgray: {    
            "DEFAULT": "#111314", 
            "100": "#151105",
          },
          doiorange: {    
            "DEFAULT": "#D4AF37", 
            "100": "#b8962e",
          },
        }
      },
      dark: {
        colors: {
          primary: { 
            "DEFAULT": "#59b2e9",
            "50": "#f0f9ff",
            "100": "#e0f2fe",
            "500": "#59b2e9",
            "600": "#0284c7",
            "700": "#0369a1"
          },
          secondary: {    
            "DEFAULT": "#fa5551"
          },
          main: {    
            "DEFAULT": "#0B0F1E"
          },     
        }
      },
    },  
});