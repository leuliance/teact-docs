import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ReleaseBadge } from './release-badge';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ReleaseBadge,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
