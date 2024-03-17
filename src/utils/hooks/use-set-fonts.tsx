import WebFont from "webfontloader";
import { useSettings } from "./use-settings";
import { Fonts } from "../providers/settings-provider";
import { useEffect } from "react";

export default function useSetFonts() {
  const settings = useSettings();

  const currentFont = settings?.settings.fonts;

  if (!currentFont) {
    throw new Error("No font selected");
  }

  const setFontType = (font: Fonts) => {
    settings?.updateSettings({ fonts: font });
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: [currentFont as string],
      },
    });
    document.documentElement.style.setProperty(
      "--dynamic-fonts",
      currentFont as string
    );
  }, [currentFont]);
  return { setFontType };
}
