/**
 * Shared EN/DE locale contract.
 *
 * This module is duplicated verbatim across all six shashwat.de surfaces
 * (apex, blogs, tmux-game, vim-game, german-app, todo-tracker) so the
 * language choice follows the visitor between them. Keep the cookie name,
 * domain logic and value set identical everywhere — only DEFAULT_LOCALE
 * differs per surface.
 *
 * Persistence is a cookie, not localStorage: the surfaces live on four
 * different origins (shashwat.de, blogs., learn., tools.) and localStorage
 * is per-origin, so it would not carry the choice across the hop.
 */

export const LOCALES = ["en", "de"] as const;
export type Locale = (typeof LOCALES)[number];

/** This surface is the apex — German recruiters land here, so it opens in German. */
export const DEFAULT_LOCALE: Locale = "de";

export const COOKIE_NAME = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;
const APEX = "shashwat.de";

export function isLocale(value: unknown): value is Locale {
	return value === "en" || value === "de";
}

/** Cookie domain that spans every *.shashwat.de surface; host-only on localhost. */
function cookieDomain(hostname: string): string {
	return hostname === APEX || hostname.endsWith(`.${APEX}`) ? `; domain=.${APEX}` : "";
}

export function readLocale(): Locale {
	if (typeof document === "undefined") return DEFAULT_LOCALE;
	const match = document.cookie.match(/(?:^|;\s*)lang=(en|de)(?:;|$)/);
	return match && isLocale(match[1]) ? match[1] : DEFAULT_LOCALE;
}

export function writeLocale(locale: Locale): void {
	if (typeof document === "undefined") return;
	const domain = cookieDomain(window.location.hostname);
	// The Cookie Store API is async and unsupported in Safari, but the locale has to
	// be readable synchronously by the parser-blocking script in LangProvider.astro,
	// before first paint.
	// biome-ignore lint/suspicious/noDocumentCookie: must be synchronous, see above
	document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=${ONE_YEAR}; SameSite=Lax${domain}`;
}
