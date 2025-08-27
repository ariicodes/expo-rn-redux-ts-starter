// Tiny fetch helper with retry (drop-in for real APIs)
export async function getJson<T>(url: string, retries = 2): Promise<T> {
	let lastErr: any;
	for (let i = 0; i <= retries; i++) {
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			return await res.json();
		} catch (e) {
			lastErr = e;
			await new Promise(r => setTimeout(r, 300 * (i + 1)));
		}
	}
	throw lastErr;
}
