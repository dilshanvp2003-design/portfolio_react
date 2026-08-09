import { siGithub, siWhatsapp, siInstagram, siGmail, siLeetcode } from "simple-icons";

function BrandSvg({ path, className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export function GithubIcon({ className = "h-5 w-5" }) {
  return <BrandSvg path={siGithub.path} className={className} />;
}

export function WhatsappIcon({ className = "h-5 w-5" }) {
  return <BrandSvg path={siWhatsapp.path} className={className} />;
}

export function InstagramIcon({ className = "h-5 w-5" }) {
  return <BrandSvg path={siInstagram.path} className={className} />;
}

export function GmailIcon({ className = "h-5 w-5" }) {
  return <BrandSvg path={siGmail.path} className={className} />;
}

export function LeetcodeIcon({ className = "h-5 w-5" }) {
  return <BrandSvg path={siLeetcode.path} className={className} />;
}

// LinkedIn was removed from newer simple-icons/lucide brand sets, kept as hand-drawn SVG.
export function LinkedinIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}
