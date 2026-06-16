/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    enableProfileEffects: {
        type: OptionType.BOOLEAN,
        displayName: "Enable Profile Effects",
        description: "Allows you to use profile effects",
        default: true
    },
    enableNameplate: {
        type: OptionType.BOOLEAN,
        displayName: "Enable Nameplate",
        description: "Allows you to use nameplates",
        default: true
    },
    enableProfileThemes: {
        type: OptionType.BOOLEAN,
        displayName: "Enable Profile Themes",
        description: "Allows you to use profile themes",
        default: true
    },
    enableCustomBadges: {
        type: OptionType.BOOLEAN,
        displayName: "Enable Custom Badges",
        description: "Allows you to use custom badges",
        default: false,
        restartNeeded: true
    },
    enableAvatarDecorations: {
        type: OptionType.BOOLEAN,
        displayName: "Enable Avatar Decorations",
        description: "Allows you to use discord avatar decorations",
        default: true
    },
    nitroFirst: {
        type: OptionType.SELECT,
        displayName: "Nitro First",
        description: "Banner/Avatar to use if both Nitro and fakeProfile Banner/Avatar are present",
        options: [
            { label: "Nitro", value: true, default: true },
            { label: "fakeProfile", value: false },
        ]
    },
    voiceBackground: {
        type: OptionType.BOOLEAN,
        displayName: "Voice Background",
        description: "Use fakeProfile banners as voice chat backgrounds",
        default: true,
        restartNeeded: true
    }
});
