export interface DomainCheckResult {
  domain: string;
  available: boolean;
}

/**
 * Utility to check domain availability via our secure server-side API proxy.
 * 
 * @param name The domain search term (slugified internally)
 * @param tlds Top-level domains to check, e.g. ['com', 'co.uk'] or ['.com', '.co.uk']
 * @returns Array of check results
 */
export async function checkDomains(name: string, tlds: string[]): Promise<DomainCheckResult[]> {
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!cleanName) {
    throw new Error("Invalid domain name");
  }

  // Clean TLDs (remove any leading dots)
  const cleanTlds = tlds.map((tld) => tld.replace(/^\./, ""));

  const res = await fetch(
    `/api/check-domain?name=${encodeURIComponent(cleanName)}&tlds=${encodeURIComponent(
      cleanTlds.join(",")
    )}`
  );

  if (!res.ok) {
    throw new Error(`Failed to check domains. Server returned status ${res.status}`);
  }

  const data = await res.json();

  if (data && Array.isArray(data.results)) {
    return data.results.map((r: any) => ({
      domain: r.domain,
      available: !!r.available,
    }));
  }

  throw new Error("Invalid API response format");
}
