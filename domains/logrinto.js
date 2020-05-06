var CLOUDFLARE = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");

D(
  "logrinto.ch",
  REG_NONE,
  DnsProvider(CLOUDFLARE),

  A("@", GITHUB_IP1_A, TTL(1)),
  A("@", GITHUB_IP2_A, TTL(1)),
  A("@", GITHUB_IP3_A, TTL(1)),
  A("@", GITHUB_IP4_A, TTL(1)),

  // github-pages
  CNAME("thesis", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("www", "logrinto.ch.", TTL(1)),

  // MAIL
  CNAME("autoconfig", "autoconfig.mail.hostpoint.ch.", TTL(1)),
  CNAME("autodiscover", "autoconfig-nonssl.mail.hostpoint.ch.", TTL(1)),
  CNAME("imap", "imap.mail.hostpoint.ch.", TTL(1)),
  CNAME("lists", "lists.admin.hostpoint.ch.", TTL(1)),
  CNAME("mail2", "imap.mail.hostpoint.ch.", TTL(1)),
  CNAME("mail", "asmtp.mail.hostpoint.ch.", TTL(1)),
  CNAME("pop", "pop.mail.hostpoint.ch.", TTL(1)),
  CNAME("smtp", "asmtp.mail.hostpoint.ch.", TTL(1)),
  MX("*", 10, "mx1.mail.hostpoint.ch.", TTL(1)),
  MX("*", 10, "mx2.mail.hostpoint.ch.", TTL(1)),
  MX("@", 10, "mx2.mail.hostpoint.ch.", TTL(1)),
  MX("@", 10, "mx1.mail.hostpoint.ch.", TTL(1))
);
