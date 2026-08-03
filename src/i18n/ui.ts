/**
 * Short UI strings (nav, buttons, headings, aria labels) for the apex.
 *
 * Longer prose does NOT live here — it lives inline in the pages as paired
 * <Lang> blocks, so it can keep its links and inline markup. See src/i18n/README.md.
 *
 * HOW TO TRANSLATE: fill in the `de` values below. Every entry is currently
 * an empty string, which makes it fall back to the English text at render
 * time — so the site stays usable while the translation is in progress.
 * The English source is shown in a comment at the end of each line.
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
		"nav.home": "", // Home
		"nav.about": "", // About
		"nav.experience": "", // Experience
		"nav.projects": "", // Projects
		"nav.skills": "", // Skills
		"nav.certifications": "", // Certifications
		"nav.blog": "", // Blog

		"header.mainMenu": "", // Main menu
		"header.openMainMenu": "", // Open main menu
		"footer.moreOnThisSite": "", // More on this site

		"a11y.darkTheme": "", // Dark Theme
		"a11y.language": "", // Language
		"a11y.switchToEnglish": "", // Switch to English
		"a11y.switchToGerman": "", // Switch to German
		"a11y.skipToContent": "", // Skip to content

		"home.title": "", // Home
		"home.greeting": "", // Hey, I'm Shashwat 👋
		"home.learnMore": "", // Learn more about me →
		"home.viewExperience": "", // View my experience →
		"home.pinnedPosts": "", // Pinned Posts
		"home.posts": "", // Posts
		"home.notes": "", // Notes

		"page.about": "", // About
		"page.experience": "", // Experience
		"page.projects": "", // Projects
		"page.skills": "", // Skills
		"page.certifications": "", // Certifications
		"page.posts": "", // Posts
		"page.notes": "", // Notes
		"page.tags": "", // Tags

		"about.heading": "", // About Me
		"experience.heading": "", // Experience
		"projects.heading": "", // Projects
		"skills.heading": "", // Skills & Expertise
		"certifications.heading": "", // Certifications

		"404.title": "", // Oops! You found a missing page!
		"404.description": "", // Oops! It looks like this page is lost in space!
		"404.heading": "", // 404 | Oops something went wrong
		"404.body": "", // Please use the navigation to find your way back

		"paginator.previous": "", // Previous
		"paginator.next": "", // Next
		"paginator.previousPage": "", // Previous Page
		"paginator.nextPage": "", // Next Page
		"paginator.previousTags": "", // Previous Tags
		"paginator.nextTags": "", // Next Tags

		"a11y.breadcrumbs": "", // Breadcrumbs
		"social.findMeOn": "", // Find me on
		"search.open": "", // Open Search
		"search.close": "", // Close
		"toc.title": "", // Table of Contents
		"feed.rss": "", // RSS feed
		"posts.postsIn": "", // Posts in
		"tags.viewAll": "", // View all
		"tags.viewAllWithTag": "", // View all posts with the tag
		"tags.blogTags": "", // blog tags
		"webmentions.heading": "", // Webmentions for this post
	},
} as const;

export type UIKey = keyof (typeof ui)["en"];

/** Resolve a key for a locale, falling back to English while DE is unfilled. */
export function t(locale: "en" | "de", key: UIKey): string {
	const value = ui[locale][key];
	return value === "" ? ui.en[key] : value;
}
