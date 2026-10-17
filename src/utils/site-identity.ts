/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "vbags";
const DEFAULT_SITE_TAGLINE = "Thoughts on building for the web";

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	return {
		// 优先读后台 Settings(Settings → Site identity)的 title/tagline；
		// vbags-db 已是独立库，与 uupack 不再共库，硬编码限制解除。
		// 后台未配置时回落到 vbags 默认值。
		siteTitle: settings?.title || DEFAULT_SITE_TITLE,
		siteTagline: settings?.tagline || DEFAULT_SITE_TAGLINE,
		siteLogo: settings?.logo?.url ? settings.logo : null,
	};
}
