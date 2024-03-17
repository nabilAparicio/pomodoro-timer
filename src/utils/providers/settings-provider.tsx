import React from "react";

export type Fonts = "Droid Sans" | "Chilanka";
export type AccentColor = "PRIMARY" | "SECONDARY" | "TERTIARY";

export interface Settings {
  fonts: Fonts;
  accentColor: AccentColor;
  pomodoroSettings: {
    workTime: number;
    shortBreak: number;
    longBreak: number;
  };
}

const defaultSettings: Settings = {
  fonts: "Droid Sans",
  accentColor: "PRIMARY",
  pomodoroSettings: {
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
  },
};

export const SettingsContext = React.createContext<{
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
} | null>(null);

interface SettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = React.useState<Settings>(defaultSettings);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
