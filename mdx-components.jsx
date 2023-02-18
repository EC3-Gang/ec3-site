import { Mermaid } from 'mdx-mermaid/lib/Mermaid';

export function useMDXComponents(components) {
	return {
		mermaid: Mermaid,
		...components,
	};
}