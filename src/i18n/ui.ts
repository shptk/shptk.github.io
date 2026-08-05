/**
 * Short UI strings (nav, buttons, headings, aria labels) for the apex.
 *
 * Longer prose does NOT live here — it lives inline in the pages as paired
 * <Lang> blocks, so it can keep its links and inline markup. See src/i18n/README.md.
 *
 * The English source is shown in a comment at the end of each German line, so
 * the two stay easy to compare when either side is edited.
 *
 * Register: this surface addresses visitors with "Sie" — it is the professional,
 * recruiter-facing page. The learning apps under learn.shashwat.de use "du",
 * which is the norm for German learning tools. Keep each surface internally
 * consistent.
 *
 * A German value left empty falls back to the English text at render time, so a
 * newly added key is never a blank on the page.
 */

export const ui = {
	en: {
		"nav.home": "Home",
		"nav.about": "About",
		"nav.experience": "Experience",
		"nav.projects": "Projects",
		"nav.skills": "Skills",
		"nav.certifications": "Certifications",
		"nav.blog": "Blog",

		"header.mainMenu": "Main menu",
		"header.openMainMenu": "Open main menu",
		"footer.moreOnThisSite": "More on this site",

		"a11y.darkTheme": "Dark Theme",
		"a11y.language": "Language",
		"a11y.switchToEnglish": "Switch to English",
		"a11y.switchToGerman": "Switch to German",
		"a11y.skipToContent": "Skip to content",

		"home.title": "Home",
		"home.greeting": "Hey, I'm Shashwat 👋",
		"home.learnMore": "Learn more about me →",
		"home.viewExperience": "View my experience →",
		"home.pinnedPosts": "Pinned Posts",
		"home.posts": "Posts",
		"home.notes": "Notes",

		"page.about": "About",
		"page.experience": "Experience",
		"page.projects": "Projects",
		"page.skills": "Skills",
		"page.certifications": "Certifications",
		"page.posts": "Posts",
		"page.notes": "Notes",
		"page.tags": "Tags",

		"about.heading": "About Me",
		"experience.heading": "Experience",
		"projects.heading": "Projects",
		"skills.heading": "Skills & Expertise",
		"certifications.heading": "Certifications",

		"404.title": "Oops! You found a missing page!",
		"404.description": "Oops! It looks like this page is lost in space!",
		"404.heading": "404 | Oops something went wrong",
		"404.body": "Please use the navigation to find your way back",

		"paginator.previous": "Previous",
		"paginator.next": "Next",
		"paginator.previousPage": "Previous Page",
		"paginator.nextPage": "Next Page",
		"paginator.previousTags": "Previous Tags",
		"paginator.nextTags": "Next Tags",

		"a11y.breadcrumbs": "Breadcrumbs",
		"social.findMeOn": "Find me on",
		"search.open": "Open Search",
		"search.close": "Close",
		"toc.title": "Table of Contents",
		"feed.rss": "RSS feed",
		"posts.postsIn": "Posts in",
		"tags.viewAll": "View all",
		"tags.viewAllWithTag": "View all posts with the tag",
		"tags.blogTags": "blog tags",
		"webmentions.heading": "Webmentions for this post",
	},

	de: {
		"nav.home": "Start", // Home
		"nav.about": "Über mich", // About
		"nav.experience": "Erfahrung", // Experience
		"nav.projects": "Projekte", // Projects
		"nav.skills": "Kenntnisse", // Skills
		"nav.certifications": "Zertifizierungen", // Certifications
		"nav.blog": "Blog", // Blog

		"header.mainMenu": "Hauptmenü", // Main menu
		"header.openMainMenu": "Hauptmenü öffnen", // Open main menu
		"footer.moreOnThisSite": "Mehr auf dieser Seite", // More on this site

		"a11y.darkTheme": "Dunkles Design", // Dark Theme
		"a11y.language": "Sprache", // Language
		"a11y.switchToEnglish": "Zu Englisch wechseln", // Switch to English
		"a11y.switchToGerman": "Zu Deutsch wechseln", // Switch to German
		"a11y.skipToContent": "Zum Inhalt springen", // Skip to content

		"home.title": "Start", // Home
		"home.greeting": "Hallo, ich bin Shashwat 👋", // Hey, I'm Shashwat 👋
		"home.learnMore": "Mehr über mich →", // Learn more about me →
		"home.viewExperience": "Meine Erfahrung ansehen →", // View my experience →
		"home.pinnedPosts": "Angeheftete Beiträge", // Pinned Posts
		"home.posts": "Beiträge", // Posts
		"home.notes": "Notizen", // Notes

		"page.about": "Über mich", // About
		"page.experience": "Erfahrung", // Experience
		"page.projects": "Projekte", // Projects
		"page.skills": "Kenntnisse", // Skills
		"page.certifications": "Zertifizierungen", // Certifications
		"page.posts": "Beiträge", // Posts
		"page.notes": "Notizen", // Notes
		"page.tags": "Tags", // Tags

		"about.heading": "Über mich", // About Me
		"experience.heading": "Erfahrung", // Experience
		"projects.heading": "Projekte", // Projects
		"skills.heading": "Kenntnisse & Expertise", // Skills & Expertise
		"certifications.heading": "Zertifizierungen", // Certifications

		"404.title": "Ups! Diese Seite gibt es nicht.", // Oops! You found a missing page!
		"404.description": "Ups! Diese Seite scheint verschwunden zu sein.", // Oops! It looks like this page is lost in space!
		"404.heading": "404 | Ups, da ist etwas schiefgelaufen", // 404 | Oops something went wrong
		"404.body": "Bitte nutzen Sie die Navigation, um zurückzufinden.", // Please use the navigation to find your way back

		"paginator.previous": "Zurück", // Previous
		"paginator.next": "Weiter", // Next
		"paginator.previousPage": "Vorherige Seite", // Previous Page
		"paginator.nextPage": "Nächste Seite", // Next Page
		"paginator.previousTags": "Vorherige Tags", // Previous Tags
		"paginator.nextTags": "Nächste Tags", // Next Tags

		"a11y.breadcrumbs": "Navigationspfad", // Breadcrumbs
		"social.findMeOn": "Zu finden auf", // Find me on
		"search.open": "Suche öffnen", // Open Search
		"search.close": "Schließen", // Close
		"toc.title": "Inhaltsverzeichnis", // Table of Contents
		"feed.rss": "RSS-Feed", // RSS feed
		"posts.postsIn": "Beiträge aus", // Posts in
		"tags.viewAll": "Alle ansehen", // View all
		"tags.viewAllWithTag": "Alle Beiträge mit diesem Tag ansehen", // View all posts with the tag
		"tags.blogTags": "Blog-Tags", // blog tags
		"webmentions.heading": "Webmentions zu diesem Beitrag", // Webmentions for this post
	},
} as const;

export type UIKey = keyof (typeof ui)["en"];

/**
 * Resolve a key for a locale, falling back to English when the German is empty.
 *
 * The annotation widens the literal union back to `string`: with every German
 * value currently filled in, TypeScript can prove the comparison never matches
 * and rejects it. The guard is kept anyway so a newly added, not-yet-translated
 * key renders English rather than nothing.
 */
export function t(locale: "en" | "de", key: UIKey): string {
	const value: string = ui[locale][key];
	return value === "" ? ui.en[key] : value;
}
