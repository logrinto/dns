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

  // github-pages test
  CNAME("dns", GITHUB_LOGRINTO_CNAME, TTL(1)),

  // github-pages diplom
  CNAME("pascale", "sl345.web.hostpoint.ch.", TTL(1)),
  CNAME("marius", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("stephanie", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("marc", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("severin", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("matthias", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("lars", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("nils", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("tieu", "sl345.web.hostpoint.ch.", TTL(1)),
  CNAME("natasha", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("wolfgang", GITHUB_LOGRINTO_CNAME, TTL(1)),
  CNAME("nicole", "sl345.web.hostpoint.ch.", TTL(1)),

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
