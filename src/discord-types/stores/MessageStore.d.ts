/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Message, MessageJSON } from "@discord-types/general";

export default class MessageStore {
    getMessage(channelId: string, messageId: string): Message;
    /** @returns This return object is fucking huge; I'll type it later. */
    getMessages(channelId: string): unknown;
    /** Not full message objects; uses MessageJSON type. */
    getRawMessages(channelId: string): Record<string | number, MessageJSON>;
    hasCurrentUserSentMessage(channelId: string): boolean;
    hasPresent(channelId: string): boolean;
    isLoadingMessages(channelId: string): boolean;
    jumpedMessageId(channelId: string): string | undefined;
    whenReady(e: unknown, callback: Function): void;
    initialize(): void;
}
