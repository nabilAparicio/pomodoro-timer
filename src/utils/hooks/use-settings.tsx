import React from "react";
import { SettingsContext } from "../providers/settings-provider";

export const useSettings = () => React.useContext(SettingsContext);
